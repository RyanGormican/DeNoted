import React from 'react';
import { Icon } from '@iconify/react';

const NoteHeader = ({ toggleDarkMode }) => {
    return (
    <div className='header'>
    <h1>DeNoted</h1>
    <span>
    <a href="https://www.linkedin.com/in/ryangormican/">
		<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
	</a>
	<a href="https://github.com/RyanGormican/DeNoted">
		<Icon icon="mdi:github" color="#e8eaea" width="40" />
	</a>
    <a href="https://ryangormicanportfoliohub.vercel.app/">
		<Icon icon="teenyicons:computer-outline" color="#199c35" width="40" />
	</a>
    </span>
    <button onClick={()=> toggleDarkMode((previousdarkMode)=> !previousdarkMode)}className='saveNote'> Toggle Dark Mode </button>
    </div>
    )
    }
    export default NoteHeader;
