import React, { useState, useEffect, useReducer } from 'react'

import titleReducer, { UPDATE_TITLE } from '../reducers/title'
import EditTitle from '../components/EditTitle'
import TitleContext from '../context/title-context'
import EditTitleChild from '../components/EditTitleChild'

const Home = (props) => {
    
    //const [title, setTitle] = useState(props.title)
    const [title, titleDispatch] = useReducer(titleReducer, props.title)

    const [edit, setEdit] = useState(props.edit)

    //this useEffect gets called only once when Home component is mounted
    //by passing an empty array on the dependency list 
    useEffect(() => {        
        const storedTitle = localStorage.getItem('title')
        if (storedTitle)
            titleDispatch({type: UPDATE_TITLE, title: storedTitle})
            //setTitle(storedTitle)
    }, [])   
    

    //this useEffect gets called each time title is changed by passing
    //title to the dependency list
    useEffect(() => {        
        localStorage.setItem('title', title)        
    }, [title])   
    
    
    return (        
        <TitleContext.Provider value={{title, titleDispatch, setEdit}}>            
            <h1>{title}</h1>
            {edit === true ?
                <EditTitle />
                :
                <>
                <div><button onClick={() => setEdit(true)}>Edit</button></div>
                <h3>A child component within Home</h3>
                <EditTitleChild />
                </>
            }            
        </TitleContext.Provider>        
    )
}

Home.defaultProps = {
    title: 'Home Page',
    edit: false
}

export default Home