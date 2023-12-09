import logo from './logo.svg';
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {

 const[length, setLength] = useState(8)
 const[isnoallowed, setisnoallowed] = useState(false)
 const[charallow, setCharallow] = useState(false)
 const[password, setPass] = useState("")

 //useRef hook
 const passwordRef = useRef(null)

 const PasswordGenerator = useCallback(() =>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(isnoallowed) str += "0123456789"
  if(charallow) str += "!@#$%^&*+={}"

  for(let i = 1 ; i<length;i++){

    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)

  }

  setPass(pass)
 } , 
  [length, isnoallowed,charallow, setPass])

  const copyPasswordtoClipBoard = useCallback(()=>{

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{

    PasswordGenerator()

  },[length,isnoallowed,charallow,PasswordGenerator])


  return (
   <>
   
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 '>
    <h1 className='text-center text-white my-3'> Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4 align-middle'>

<input type='text' value={password}  ref = {passwordRef} className='outline-none w-full py-1 px-2' placeholder='password' readOnly/>
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClipBoard}>Copy</button>

</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input type='range' min={6} max={100} value={length} className='cursor-pointer'
  onChange={(e) => {setLength(e.target.value)}}
  />
  <label>Length : {length}</label>
</div>

<div className='flex items-center gap-x-1'>
<input type='checkbox' defaultChecked={isnoallowed} id='numberInput' 
onChange={() => {setisnoallowed((prev) => !prev)}}

></input>
<label htmlFor='numberInput'>Number</label>
</div>

<input type='checkbox' defaultChecked={charallow} id='charInput' 
onChange={() => {setCharallow((prev) => !prev)}}/>
<label htmlFor='charInput'>Character</label>
</div>

   </div>
   
   </>
  );
}

export default App;
