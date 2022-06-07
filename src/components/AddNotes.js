import { useState } from 'react';
const AddNotes = ({ addtheNote }) => {
     const [notesText, setnotesText] = useState('');
     const noteCount = 250; 
 const noteEdit = (event) => {
  if(noteCount -event.target.value.length >=0)
  {
  setnotesText(event.target.value);
  }
  }
 const saveNote = () => {
      if(notesText.trim().length > 0)
      {
      addtheNote(notesText);
      setnotesText('');
      }
  }
 return (<div className='notes add'>
         <textarea rows='8' cols='10' placeholder='Type your new note here...' value={notesText} onChange={noteEdit}>
         </textarea>
         <div className='footnotes'>
         <small> {noteCount - notesText.length} characters left </small>
         <button className='saveNote' onClick ={saveNote}> Save</button>
         </div>
         </div>
);
};
export default AddNotes;
