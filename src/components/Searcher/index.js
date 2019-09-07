import React from 'react';
import { Search } from '@material-ui/icons'
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
      showSearcher: false
    }
    this.searcherRef = React.createRef();
    this.toggleSearcher = this.toggleSearcher.bind(this);
  }

  toggleSearcher(){
    this.setState({
      showSearcher: !this.state.showSearcher
    }, () => {if(this.state.showSearcher){ this.searcherRef.current.focus()}})
  }

  render(){
    const { value, showSearcher } = this.state;
    return(
      <div className='searcherContainer'>
        <Search className='searchIcon' onClick={this.toggleSearcher}/>
        <Input
          value={value}
          onChange={ (e) => this.setState({value: e.target.value})}
          placeholder='Search for a recipe'
          className={['searchInput', showSearcher ? 'showSearcher' : 'hideSearcher']}
          onBlur={this.toggleSearcher}
          inputRef={this.searcherRef}
        />
      </div>
    )
  }

}

export default withStyles(inputSearcherStyles)(Searcher);