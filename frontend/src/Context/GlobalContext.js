import React,{createContext, Component} from 'react';

export const AppContext = createContext({
    ContentData : '',
    UserData : '',
    ModalContent : ''
})

export class AppContextProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            ContentData : '',
            ModalData : '',
            UserData : ''
        }
    }

    setUserData = params => {
        this.setState({
            UserData : params
        })
    }

    changeContent = content =>{
        this.setState({
            ContentData : content
        })
    }

    changeModalContent = content => {
        this.setState({
            ModalData : content
        })
    }

    render(){
        return(
            <AppContext.Provider value={{
                ContentData             : this.state.ContentData,
                changeContent           : this.changeContent,
                UserData                : this.state.UserData,
                setUserData             : this.setUserData,
                ModalContent            : this.state.ModalContent,
                changeModalContent      : this.changeModalContent
            }} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
    
}

export const AppContextConsumer = AppContext.Consumer;