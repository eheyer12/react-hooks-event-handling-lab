// Code EyesOnMe Component Here
function EyesOnMe() {
    function Focus() {
        console.log("Good!")
    }

    function Blur() {
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={Focus} onBlur={Blur}>Eyes on me</button>
        </div>
    )
}



// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

export default EyesOnMe