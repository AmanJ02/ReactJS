import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDo = () => {

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];    // storing old values and adding new values
        });
        setInputList('');
    };

    const deleteItems = (id) => {
        console.log('Deleted');
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {                                 // Callback Function 
                return index !== id;                                                     // Deleting an item from an array
            });
        });
    };

    return (
        <>
            <div className = "main_div">
                <div className = "center_div">
                    <br />
                    <h1> ToDo List</h1>
                    <br />
                    <input 
                        type = "text" 
                        placeholder = 'Add Items' 
                        onChange = {itemEvent} 
                        value = {inputList}
                    />
                    <button onClick = {listOfItems}> + </button>

                    <ol>

                        {/* Array mapping with callback function*/}

                        {items.map( (itemval, index) => {
                           return <ToDoList 
                            key = {index}
                            id = {index}
                            text = {itemval} 
                            onSelect = {deleteItems}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )

}


export default ToDo;



// cutline method is use for strikethrough the text
// strike() is also used for this purpose only
