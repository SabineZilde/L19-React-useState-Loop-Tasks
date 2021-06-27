/* 4. Have a list of items and an input field + button. 
Typing something into the field and hitting the button would add 
whatever was entered in the input field as a new item to the list.App */
import { useState } from 'react';

function Task4() {

    //useState must be used, google how to add an array...
    const [array, setArray] = useState(['milk', 'bread', 'dog food']);
    const [listElement, setListElement] = useState('');

    //taks our array and returns it as a list
    const arrayAsList = array.map((i) => {
        return <li>{i}</li>
    });

    //pushing the input value to our array
    const addElementToList = () => {
        setArray(prevArray => [...prevArray, listElement]);
        setListElement('');
    }

    return (
        <div>
            <h1>Task 4</h1>
            <h4>List:</h4>
            <ul>
                {arrayAsList}
            </ul>
            <input placeholder={'Enter the product'} value={listElement} 
            //getting current state of our input field and setting it as a {listElement} value
            onChange={(e) => setListElement(e.target.value)} />
            <button onClick={addElementToList}>Add to list</button>
        </div>
    )
}

export default Task4;