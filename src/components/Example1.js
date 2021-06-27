import { useState } from 'react';
// import { useEffect } from 'react';


function Example1() {
    const [text, setText] = useState('Foo');
    // const [list, setList] = useState(['foo', 'bar', 'baz']);
    
    const clearText = () => {
        setText('Bar');
        // const newList = JSON.parse(JSON.stringify(list));
        // const newList = [...list]; //splat operator clones an array
        // better way
        // newList.push('biz');
        // setList(newList);

        // setList([...list, 'biz']);
    }
//arrays are objects - newList is pointing to a same variable 'list'


    // useEffect(() => {
    //     setText('Bar');
    // }, [])

    // const listAsLiElem = list.map((item) => <li>{item}</li>)

    return (
        <div>
            <h1>Example 1</h1>
            <h3>{text}</h3>
            <input value={text}/>
            <ul>
                {/* {listAsLiElem} */}
            </ul>
            <button onClick={clearText}>Change text</button>
        </div>
    )
}

export default Example1;