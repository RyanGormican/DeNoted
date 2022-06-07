import denoteNote from './denoteNote';
import addNotes from './addNotes';
const listNotes = ({ theNotes, addtheNote, removetheNote }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <denoteNote noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate} />)}
  
<addNotes addtheNote removetheNote/>
</div>;
    )
}
export default listNotes;
