import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WriteRecommendation from './components/WriteRecommendation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import HomePage from './components/HomePage';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import { Provider } from './context';
import AllProjects from './components/AllProjects';
import ScrollToTop from  './components/ScrollToTop';
import Test from './components/Test';


function App() {
  return (
  <Provider>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/write-a-recommendation" component={WriteRecommendation} />
          <Route exact path="/all-projects" component={AllProjects} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  </Provider>
    
  
  );
  
}

export default App;
