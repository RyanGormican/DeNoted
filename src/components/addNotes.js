import { useState } from 'react';
const addNotes = ({ addtheNote }) => {
     const [notesText, setnotesText] = useState('');
 const noteEdit = (event) => {
  setnotesText(event.target.value);
 }
 const saveNote = () => {
      if(notesText.trim().length > 0)
      {
      addtheNote(notesText);
      setnotesText('');
      }
  }
 return (<div className='notes add'>
         <textarea rows='8' cols='10' placeholder='Type your new note here... value={notesText} onChange={noteEdit}]
         </textarea>
         <div className="footnotes"
         <small> </small>
         <button className="saveNote" onClick ={saveNote}> Save</button>
         </div>) ;
};
export default addNotes;
