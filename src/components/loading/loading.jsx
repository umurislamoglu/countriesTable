import React from 'react'
import loading from './loading.gif'

export default function Loading() {
    return (
        <React.Fragment>
            <img src={loading} alt="Loading..." style={{width:"200px", display:"block",margin:"auto"}} />
        </React.Fragment>
    )
}
