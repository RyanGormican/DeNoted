import denoteNote from './denoteNote';
import addNotes from './addNotes';
const listNotes = ({ theNotes }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <denoteNote noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate} />)}
  
<addNotes />
</div>;
    )
}
export default listNotes;
