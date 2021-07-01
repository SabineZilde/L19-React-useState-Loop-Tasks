/* 9. Have 2 input fields. If the inputs are anagrams, 
show a green message stating that those are anagrams. 
If they are not, show red message stating they are not. */

import { useState } from 'react';

function Task9() {
    const [word1, setWords1] = useState('');
    const [word2, setWords2] = useState('');

    const updateWord1 = (e) => {
        setWords1(e.target.value);
    }

    const updateWord2 = (e) => {
        setWords2(e.target.value);
    }

    let isAnagramMessage = <h4 style={{ backgroundColor: 'red' }}>These words are not anagrams</h4>
    const sortedWord1 = word1.toLocaleLowerCase().replace(/ /g, '').split('').sort().join('');
    const sortedWord2 = word2.toLocaleLowerCase().replace(/ /g, '').split('').sort().join('');
    if (sortedWord1 === '') {
        isAnagramMessage = <h4>Enter two words to find out if they are anagrams</h4>
    } else if (sortedWord1 === sortedWord2) {
        isAnagramMessage = <h4 style={{ color: 'green' }}>These words are anagrams</h4>
    }

    return (
        <div>
            <h1>Task 9</h1>
            {isAnagramMessage}
            <input value={word1} onChange={updateWord1} />
            <input value={word2} onChange={updateWord2} />
        </div>
    )
}

export default Task9;