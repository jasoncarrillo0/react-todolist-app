import React from 'react';

function Item(props) {

    const [isDone, setIsDone] = React.useState(false)
    return (
        <div onClick={() => {
            props.deleteItem(props.id)
        }}>
            <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}
export default Item;