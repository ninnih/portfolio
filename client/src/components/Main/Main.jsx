import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../modules/Home/Home';
import About from '../../modules/About/About';
import Contact from '../../modules/Contact/Contact';
import AboutContent from '../AboutContent/AboutContent';


const Main = (props) => {
  const { projectData, aboutInfo, educationData, getDevProjects, getProjects, changeType } = props;
  return (
    <Switch> 
      <Route exact path='/' render={(props) => <Home {...props} projectData={projectData} getDevProjects={getDevProjects} getProjects={getProjects} changeType={changeType}/>}></Route>
      <Route exact path='/about' render={(props) => <About {...props} projectData={projectData} aboutInfo={aboutInfo} educationData={educationData}/>}></Route>
      <Route exact path='/contact' render={(props) => <Home {...props} projectData={projectData}/>}></Route>
    </Switch>
  );
}

export default Main;