import './App.css';
import React from 'react'
import routes from './config/routes'
import Header from './components/Header'
import ContentContainer from './containers/ContentContainer'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import PlayerList from './components/PlayerList'
import About from './components/About'
import ContentTwo from './components/ContentTwo'
import Search from './components/Search'
import NewPlayer from './pages/NewPlayer'
import PlayerShow from './components/PlayerShow'
import EditPlayer from './components/EditPlayer';



function App() {
  return (
    <div className="App">
      {/* {routes} */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/players/new" component={NewPlayer} />
        <Route path='/players/:id' component={ PlayerShow } />
        <Route path="/players/:id" component={EditPlayer} />
        {/* <Route path="/contenttwo" component={ContentTwo} /> */}
        <Route path="/search" component={Search} />
        <Route path="/players" component={PlayerList} />

      </Switch> 
      {/* <ContentContainer /> */}
    </div>
  );
}

export default App;
