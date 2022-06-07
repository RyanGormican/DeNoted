import React from 'react';
const noteHeader = ({ toggleDarkMode }) => {
    return (
    <div className="header">
    <h1>DeNoted</h1>
    <button onClick={()=> toggleDarkMode((previousdarkMode)=> !previousdarkMode)}className='saveNote'> Dark Mode </button>
    </div>
    )
    }
    export default noteHeader;
