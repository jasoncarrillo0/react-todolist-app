import React from "react";
import Item from "./Item";

function App() {
    // set state variables
    const [inputText, setInputText]   = React.useState("");
    const [todoItems, setTodoItems]   = React.useState([]);

    // make inputText match any change in the input html element
    function handleChange(event) {
        setInputText(event.target.value);
        console.log(inputText);
    }
    // add inputText to todoItems array
    function handleClick() {
        setTodoItems(prevItems => {
            return [...prevItems, inputText]; // returning a single array with all previous array items, and new item
        });
        setInputText(""); // reset input text to be empty
    }

    // remove a list item (to be passed down to Item.jsx)
    function deleteItem(id) {
        setTodoItems((previousItems => {
            // returns a list of indexes new array should have, and applies those indexes to previousItems
            return previousItems.filter((item, index) => {
                return index !== id; 
            });
        }));
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <input type="text" name="input" value={inputText} onChange={handleChange} />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>

            <div>
                <ul>
                    {todoItems.map((item, index) =>  <Item key={index} id={index} text={item} deleteItem={deleteItem}/>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
