import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Social from "./Social";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ExperienceList from './ExperienceList';
import ProjectList from './ProjectList';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="app-container">
      <Banner />
      <Social />
      <AboutMe />
      <Skills />
      <ExperienceList />
      <ProjectList />
    </div>
    </div>
  );
}

export default App;
