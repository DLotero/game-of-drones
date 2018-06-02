import React from 'react'

const ActionButton = (props) => {
    return(
        <div className="action-button">
            <button onClick={props.handleClick}>{props.action}</button>
        </div>
    )
}

export default ActionButton