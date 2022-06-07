import React from 'react';
const SearchNotes =({ setSearch }) => {
   return
   (
   <div className='searchNotes'>
   <input  onChange={(event) => 
   setSearch(event.target.value)} type='text' placeholder='type to search for a note...' />
   </div>
);
};
export default SearchNotes;
