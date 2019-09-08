import React from 'react';
import { Search } from '@material-ui/icons'
import { connect } from 'react-redux';
import { searchRecipes } from '../../store/actions';
import { withStyles } from '@material-ui/styles'
import { Input } from '@material-ui/core';

import './searcher.styles.scss';

const inputSearcherStyles = {
  root:{
    background: 'red'
  }
}

class Searcher extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: '',
      showingSearcher: false
    }
    this.searcherRef = React.createRef();
    this.handleKey = this.handleKey.bind(this);
    this.showSearcher = this.showSearcher.bind(this);
    this.hideSearcher = this.hideSearcher.bind(this);
  }

  showSearcher(){
    this.setState({
      showingSearcher: true
    }, () => this.searcherRef.current.focus())
  }

  hideSearcher(){
    this.setState({
      showingSearcher: false,
      value: ''
    })
  }

  handleKey(key){
    const { searchRecipes } = this.props;
    const queryToSearch = this.state.value;
    if (key === 'Enter' ){
      this.setState({value: '', showingSearcher: false});
      searchRecipes(queryToSearch);
    }
  }

  render(){
    const { value, showingSearcher } = this.state;
    return(
      <div className='searcherContainer'>
        <Search className='searchIcon' onClick={this.showSearcher}/>
        <Input
          value={value}
          onChange={ (e) => this.setState({value: e.target.value})}
          placeholder='Search for a recipe'
          className={['searchInput', showingSearcher ? 'showSearcher' : 'hideSearcher']}
          onBlur={this.hideSearcher}
          inputRef={this.searcherRef}
          onKeyPress={ (e) => this.handleKey(e.key)}
        />
      </div>
    )
  }

}

const mapDispatchToProps = {
  searchRecipes
}

const ConnectedComponent = connect(null, mapDispatchToProps)(Searcher);

export default withStyles(inputSearcherStyles)(ConnectedComponent);