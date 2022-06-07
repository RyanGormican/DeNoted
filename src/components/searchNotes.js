import React from 'react';
import { MDSearch } from'react-icons/md';
const searchNotes =({setSearch}) = {
   return <div className='searchNotes'>
   <MDSearch className='search-icons' size='1.3em' />
   <input  onChange={(event)=>setSearch(event.target.value)}type="text" placehold='type to search for a note...' />
   </div>;
};
export default searchNotes;
