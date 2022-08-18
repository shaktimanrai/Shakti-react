import React, { useState } from 'react'

const TodoList = () => {

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
            <h1>{questionno + 1}</h1><h1>{questions[questionno]}</h1>
            <div className='btn_div'>
                
                <button onClick={prevQuestion}>Prev</button>
                
<button onClick={addQuestion} >Next</button>

            
            </div>
            

        </div>

    </div>
    </center>
    </>
  )
}

export default TodoList
