import { useState } from 'react';
// import { useEffect } from 'react';


function Example1() {
    const [text, setText] = useState('Foo');
    const [list, setList] = useState(['foo', 'bar', 'baz']);

    const clearText = () => {
        setText('Bar');

        /*arrays are objects - newList is pointing to a same variable 'list' 
        and  not creating a new list - thats why this wont work */
        // const newList = list;
        // newList.push('biz');
        // setList(newList);

        //solution for creating a new array
        //though the ugly one - turns array into a string and then turns it back to a new array
        // const newList = JSON.parse(JSON.stringify(list));
        // newList.push('biz');
        // setList(newList);

        //bettery way
        //splat operator clones an array
        // const newList = [...list]; 
        // newList.push('biz');
        // setList(newList);

        //you can write it in one line like this
        //creates a new array + adds another element 'biz'
        setList([...list, 'biz']);
        //or
        // setList(['biz', ...list]);
    }

    const listAsLiElem = list.map((item) => <li>{item}</li>)

    return (
        <div>
            <h1>Example 1</h1>
            <h3>{text}</h3>
            <input value={text} />
            <ul>
                {listAsLiElem}
            </ul>
            <button onClick={clearText}>Change text</button>
        </div>
    )
}

export default Example1;