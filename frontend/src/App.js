import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Login from './components/Login/Login';
import useHeader from './components/Header/Header';
import useSidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {AppContext,AppContextProvider,AppContextConsumer} from './Context/GlobalContext'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainContent : ''
    }

    const AppView = <AppContextProvider>
                      <div className="d-flex" id="wrapper">
                        {useSidebar()}
                      <div id="page-content-wrapper">
                        {useHeader()}
                        <Content/>
                      </div>
                      </div>
                    </AppContextProvider>
  }

  sin_in = ()=>{

  }

  render(){
    return (
      <AppContextProvider>
          <Login/>
      </AppContextProvider>
    );
  }
 
}

App.contextType = AppContext;

export default App;
