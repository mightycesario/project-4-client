import React from 'react'
import routes from './config/routes'
import Header from './components/Header'
import ContentContainer from './containers/ContentContainer'
import './App.css';


function App() {
  return (
    <div className="App">
      test
      {routes}
      <Header />
      {/* <ContentContainer /> */}
    </div>
  );
}

export default App;
