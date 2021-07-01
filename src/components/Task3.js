/* 3. Have a table with 2 columns and 2 rows + 
a button. Clicking on that button should add a row 
to the table. */

import { useState } from 'react';

function Task3() {
    const [rowCount, addRowCount] = useState(0);
    const [row, addRow] = useState('');

    const rowArray = [];

    const handleButtonClick = () => {
        addRowCount(rowCount + 1);
        for (let i = 0; i <= rowCount; i++) {
            rowArray.push(
                <tr>
                    <td>Row{i + 3} cell1</td>
                    <td>Row{i + 3} cell2</td>
                </tr>);
            addRow(rowArray);
        }
    }

    return (
        <div>
            <h1>Task 3</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Row1 cell1</td>
                        <td>Row1 cell2</td>
                    </tr>
                    <tr>
                        <td>Row2 cell1</td>
                        <td>Row2 cell2</td>
                    </tr>
                    {row}
                </tbody>
            </table>
            <div>
                <button onClick={handleButtonClick} style={{ marginTop: '5px' }}>Add a row</button>
            </div>

        </div>
    )
}

export default Task3;