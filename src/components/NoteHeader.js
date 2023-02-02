import React from 'react';
const NoteHeader = ({ toggleDarkMode }) => {
    return (
    <div className='header'>
    <h1>DeNoted</h1>
    <a href="https://www.linkedin.com/in/ryangormican/">
		<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
	</a>
	<a href="https://github.com/RyanGormican/DeNoted">
		<Icon icon="mdi:github" color="white" width="40" />
	</a>
    <button onClick={()=> toggleDarkMode((previousdarkMode)=> !previousdarkMode)}className='saveNote'> Toggle Dark Mode </button>
    </div>
    )
    }
    export default NoteHeader;
