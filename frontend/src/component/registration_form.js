import React from 'react';
// import axios from 'axios';
import { useState } from 'react';
// import express from 'express';



 function getInput( e ){
    return e.currentTarget.value
}

const Registratonform = () => {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    console.log(email, password)

    return(
        <div>
            <form>
                <label>username:</label><input onChange= { setEmail(getInput())} type='text'/>
                <label>password:</label><input onChange= { setPassword(getInput())} type='password'/>
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}

export default Registratonform;