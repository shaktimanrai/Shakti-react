
import React, { useState } from 'react';
import axios from 'axios';
let res="";
async function download()
{
    const url = "https://gist.githubusercontent.com/champaksworldcreate/320e5af5ea9dbd31597d220637885587/raw/99f8f7a4df34ae477dcceb62598aa0bdde9ef685/tfquestions.json"
     const req = axios.get(url);

  res =await  req;
     //console.log(res.data);
}
const Shakti =async   (e) =>   {
 //axios.get(req)
//e.preventDefault()
  // const loc= e.target.Elements.loc.value
 await download();
console.log(res.data);
    // questions=res.data.questions;
    // console.log("Question 0 ");
   //  console.log(questions[0]);
     //console.log(questions[1]);
    //  console.log(questions[2]);
    //  console.log(questions[3]);
    //  console.log(questions[4]);



    const[questionno,setQuestionno]=useState(0);
   
 const questions = ["C is a programming language","Java ia a programming language","Python is a snake"];
    
    
const addQuestion=()=>{
    
    if(questionno>=questions.length-1)
     {
         alert();
         return;
    }
    setQuestionno(questionno + 1);      
}
 const prevQuestion=()=>{
    if(questionno > 0) {
    setQuestionno(questionno - 1);
} else {
      alert('Sorry,zero limit reacted');
    setQuestionno(0);
 }
};

  return (
  <>
  <center>
    
    <div className='main_div'>
        <div className='center_div'>
            <h1>{questionno + 1}</h1><h1>Question</h1>
            <h1>{questions[questionno]}</h1>
            <div className='btn_div'>
                <button onClick={prevQuestion}>Prev</button>
<button onClick={addQuestion} >Next</button>

            </div>
        </div>
    </div>
    </center>
    </>
  );
}; 

export default Shakti;
