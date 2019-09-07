import React from 'react';
import { LinearProgress } from '@material-ui/core'

import { connect } from 'react-redux';
import { getAllRecipes } from '../../store/actions';

import Header from '../../components/Header';
import Card from '../../components/Card';

import './home.styles.scss';

class Home extends React.Component{

  componentDidMount(){
    this.props.getAllRecipes();
  }

  render(){
    const { recipes, loading, error } = this.props;
    return (
      <div className="Home">
        <Header/>
        <div className='homeContainer'>
          { loading ? <LinearProgress variant="indeterminate" color='secondary' className="progressBar"/> :
            error ? <div>error getting data</div> :
            recipes.map( (recipe, index) => <Card key={index} {...recipe}/>)
            
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({recipes, loading, error}) => ({
  recipes,
  loading,
  error
});

const mapDispatchToProps = {
  getAllRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);