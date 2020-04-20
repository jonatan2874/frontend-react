import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Modal from './components/Modal/Modal'
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import useSidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {AppContext,AppContextProvider} from './Context/GlobalContext'
import {verifiedToken} from './Actions/AppAction'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      verifiedToken : false
                    
    }                  
    
  }

  verifiedToken = async ()=>{
    let userInfo = JSON.parse(localStorage.UserData)
    // console.log('objetoObtenido: ', localStorage.UserData)
    const response = await verifiedToken(userInfo.token);
    if (response && response.success){
        console.log(response.data);         
        if(response.data.failure !== undefined ){
          this.changeState(false);
        }
        else{
          this.changeState(true);
        }
      }
  }

  componentWillMount(){
    if("UserData" in localStorage ){
      if (localStorage.UserData!=='') this.verifiedToken() ;
    }
  }

  changeState = (params)=>{
    this.setState({
      verifiedToken : params
    })
  }

  changeContent = ()=>{
    const {UserData} = this.context
    let content = (UserData ==='' || UserData === undefined)? <Login/> : this.AppView ;
    this.setState({
      mainContent : content
    })
  }

  render(){
      if(!this.state.verifiedToken){
        return(<AppContextProvider><Login changeState={this.changeState} /></AppContextProvider>)
      }
      else{
        return (
          <AppContextProvider>
              <Modal/>
              <div className="d-flex" id="wrapper">
                {useSidebar()}
              <div id="page-content-wrapper">
                <Header changeState={this.changeState}/>
                <Content/>
              </div>
              </div> 
          </AppContextProvider>
        );
      }
      // if(this.context.UserData==='' || this.context.UserData === undefined){
      //   return(
      //     <AppContextProvider><Login/></AppContextProvider>
      //     )
      // }
      // else{
      //   return (
      //     <AppContextProvider>
      //       {/* {console.log(this.context)} */}
      //         {/* {this.props.params.dropdown && <span className="material-icons rotate">play_arrow</span>} */}
      //         <Modal/>
      //         <div className="d-flex" id="wrapper">
      //           {useSidebar()}
      //         <div id="page-content-wrapper">
      //           {Header()}
      //           <Content/>
      //         </div>
      //         </div> 
      //         {/* {this.state.mainContent} */}
      //         {/* {this.AppView} */}
      //     </AppContextProvider>
      //   );
      // }
    
  }
 
}

App.contextType = AppContext;

export default App;
