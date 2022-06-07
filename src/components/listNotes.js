import denoteNote from './denoteNote';
import addNotes from './addNotes';
const listNotes = ({ theNotes, addtheNote }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <denoteNote noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate} />)}
  
<addNotes addtheNote/>
</div>;
    )
}
export default listNotes;
