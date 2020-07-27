import React, {useContext} from 'react'

import TitleContext from '../context/title-context'

const EditTitleChild = () => {
    const {title} = useContext(TitleContext)
    return (
        <>            
           New home page title - {title}
        </>
    )
}

export default EditTitleChild
