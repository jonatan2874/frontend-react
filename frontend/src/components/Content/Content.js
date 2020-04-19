import React,{useContext} from 'react';
import ContentContext from './../../Context/ContentContext'

const useContent = ()=>{
    // const [content] = useState('')
    const {content} = useContext(ContentContext)

    return (
        <div className="container-fluid">
            {content}
        </div>
    )
    
}

export default useContent