import DenoteNote from './DenoteNote';
import AddNotes from './AddNotes';
const ListNotes = ({ theNotes, addtheNote, removetheNote, }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <DenoteNote noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate}removetheNote={removetheNote} />)}
  
<AddNotes addtheNote={addtheNote}/>
</div>
    );
};
export default ListNotes;
