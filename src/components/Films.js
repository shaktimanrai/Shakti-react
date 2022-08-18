import React from "react"
import { useState } from "react"
import axios from "axios";


function films(){

    const[films, ]= ('');
    const[city, setCity]= ('');
    const apiKey= "5bbd2faff4ec034b077115e686b8efdb";

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = "https://swapi.dev/api/people/49/";
        const req = axios.get(url);
        const res = await req;
        console.log(res.data);
        
    

    }

    //Converting K to C

    return(<>
    
        <div className="weathhead"></div>
        <div className="mainfilms">
            <div className="films">
                <form onSubmit={apiCall} className="form">
                    <input type="text"
                    placeholder="city"
                    name="loc" />
                    <button className="bttn">Search</button>
                </form> 

                {films && <weath />}



                          </div>
        </div>
    
    
    </>

    );
}
export default films;