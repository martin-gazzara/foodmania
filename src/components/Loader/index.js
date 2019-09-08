import React from 'react';
import { LinearProgress } from '@material-ui/core'

import './loader.styles.scss';

const Loader = () => {
  return <LinearProgress variant="indeterminate" color='secondary' className="progressBar"/>
}

export default Loader;