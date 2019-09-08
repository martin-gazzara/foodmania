import React from 'react';

import { connect } from 'react-redux';
import { getAllRecipes } from '../../store/actions';
import get from 'lodash/get';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './home.styles.scss';

class Home extends React.Component{

  componentDidMount(){
    this.props.getAllRecipes();
  }

  render(){
    const { loading, error } = this.props;
    const recipes = get(this.props, 'recipes', []);
    return (
      <div className="Home">
        <Header/>
        <div className='homeContainer'>
          { loading ? <Loader /> :
            error ? <div>error getting data</div> :
            recipes.length ? recipes.map( (recipe, index) => <Card key={index} {...recipe}/>) :
            <p>No recipes to show.</p>            
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