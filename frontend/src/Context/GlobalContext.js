import React,{createContext, Component} from 'react';

export const AppContext = createContext({
    ContentData : '',
    UserData : ''
})

export class AppContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            ContentData : ''
        }
    }

    setUserData = params => {
        //
    }

    changeContent = content =>{
        this.setState({
            ContentData : content
        })
    }

    render(){
        return(
            <AppContext.Provider value={{
                ContentData : this.state.ContentData,
                changeContent : this.changeContent,
                UserData : ''
            }} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
    
}

export const AppContextConsumer = AppContext.Consumer;