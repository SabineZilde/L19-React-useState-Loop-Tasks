/* 2. Write a program that prints the numbers from 
1 to 100. But for multiples of two print "Fizz" 
instead of the number and for the multiples of 
three print "Buzz". For numbers which are multiples 
of both two and three print "FizzBuzz".) */

function Task2() {
    const fizzBuzzArray = [];

    for (let i = 1; i <= 100; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            fizzBuzzArray.push(<li>{'FizzBuzz'}</li>);
        } else if (i % 2 === 0) {
            fizzBuzzArray.push(<li>{'Fizz'}</li>);
        } else if (i % 3 === 0) {
            fizzBuzzArray.push(<li>{'Buzz'}</li>);
        } else {
            fizzBuzzArray.push(<li>{i}</li>);
        }
    }

    return (
        <div>
            <h1>Task 2</h1>
            <p>Printing numbers from 1 to 100, replacing with Fizz, if it divides with 2, Buzz - if it devides with 3, FizzBuzz - if it devides with 2 and 3:</p>
            <p>{fizzBuzzArray}</p>
        </div>
    )
}

export default Task2;