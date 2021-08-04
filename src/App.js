import './App.css';
import React from 'react';
import { MovieProvider } from './contexts/MovieContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MovieView } from './components/MovieView';
import { MovieViewType } from './components/MovieViewType';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div style={styles.container}>
      <Router>
      <Header />
        <MovieProvider>
        <Switch>
          <Route exact path="/">
            <MovieView/>
          </Route>
          <Route path="/series">
            <MovieViewType type={'Series'} />
          </Route>
          <Route path="/movies">
            <MovieViewType type={'Movie'} />
          </Route>
          <Route render={
            () =>  <div className="error-div" style={{ justifyContent: 'center', display: 'flex' }}><h1>Endpoint not found</h1></div>
          } />
      </Switch>
      </MovieProvider>
      <Footer />
    </Router> 
    </div>
    
  );
}

const styles = {
  container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'scroll'
    }
}

export default App;
