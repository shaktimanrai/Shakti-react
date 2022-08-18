import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[num,setNum]=useState(0);
  const[num1,setNum1]=useState(0);

  const addNum=()=>{

    setNum(num+1);
  }
  const prevNum=()=>{
    if(num>0){
      setNum(num-1);
    } else{
      setNum(0);
    }
  }


  return (<>
  
 <div className='columncontainer'  >
  <div className='rowcontainer'>
    
    <div className='boxcontent' >
      <h1>{0}</h1>
        <button onClick={addNum}>-</button>
      </div>
    <div className='boxcontent'>
   
      <button>-</button>
      
      </div>
    <div className='boxcontent'>
    
    <button>-</button>
      
      
      </div>
  </div>

  <div className='rowcontainer'>
  <div className='boxcontent'>
  
  <button>-</button>
      
     
      </div>
  <div className='boxcontent'>
 
  <button>-</button>
      
      
      </div>
  <div className='boxcontent'>
  
  <button>-</button>
      
      
      </div>

  </div>

  <div className='rowcontainer'>
  <div className='boxcontent'>
  
  <button>-</button>
      
      
      </div>
  <div className='boxcontent'>
 
  <button>-</button>
   
     
      </div>
  <div className='boxcontent'>
  
  <button>-</button>
      
      </div>
  </div>
  
  
  </div>
 
  
  </>
    
  )
}

export default App