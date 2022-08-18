import React from "react";

function First(){

    const handleClick=(name) => {
        document.write(" Hello " + name);
    }

    return (
        <div className="First">

       <h1>jdghfjgfirhferiferfoe</h1>

    <button onClick={() => {handleClick("govind")}}>Click Me</button>



        </div>
    );
}

export default First;