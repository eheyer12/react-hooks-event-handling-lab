// Code Keypad Component Here

function Keypad (){
    function handleKeypad() {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handleKeypad}>
            </input>
        </div>
    )
}

// We'll keep things super simple instead, and use an <input type="password" /> field to capture input. Here's how to complete the exercise:

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.


export default Keypad;