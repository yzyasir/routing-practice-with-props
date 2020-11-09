import React from 'react';

const Differ = (props) => {
// this is a functional component so we can console.log things
// remember that from the url it will all be taken as a string 
console.log(typeof props.id)

if(!isNaN(props.id)){
    console.log("This isnt a number")
    return (
        <div>
            <h1 style={{color: props.id}}>This Number is: {props.id}</h1>
        </div>
        );
} else{
// Now remember, a function is only equal to what it returns
        return (
            <div>
                <h1 style={{color: props.id}}>The word is: {props.id}</h1>
            </div>
        );
}
}
export default Differ;