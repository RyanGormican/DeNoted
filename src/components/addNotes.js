import { useState } from 'react';
const addNotes = () => {
     const [notesText, setnotesText] = useState('');
 const noteEdit = (event) => {
  setnotesText(event.target.value);
 }
 return (<div className='notes add'>
         <textarea rows='8' cols='10' placeholder='Type your new note here... onChange={noteEdit}]
         </textarea>
         <div className="footnotes"
         <small> </small>
         <button className="saveNote"> Save</button>
         </div>) ;
};
export default addNotes;
