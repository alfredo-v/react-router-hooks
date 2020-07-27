import React, { useContext } from 'react'

import { UPDATE_TITLE } from '../reducers/title'
import TitleContext from '../context/title-context'
import EditTitleChild from '../components/EditTitleChild'

const EditTitle = () => {
    const { title, titleDispatch, setEdit } = useContext(TitleContext)
    return (
        <>
            <textarea
                style={{ height: "100px", width: "300px" }}
                id="msg"
                //onChange={(e) => setTitle(e.target.value)}
                onChange={(e) => titleDispatch({ type: UPDATE_TITLE, title: e.target.value })}
                value={title}
            ></textarea>
            <div><button onClick={() => setEdit(false)}>Done</button></div>
            <hr />
            <h4>A child component within Edit Title</h4>
            <EditTitleChild />
            
        </>
    )
}

export default EditTitle