import DenoteNote from './DenoteNote';
import AddNotes from './AddNotes';
const ListNotes = ({ theNotes, addtheNote, removetheNote, setNotes, }) => {
  return (
    <div className='listnotes'>
<AddNotes addtheNote={addtheNote}/>
    {theNotes.map((note)=>   <DenoteNote theNotes={theNotes}noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate}noteColor={note.noteColor}removetheNote={removetheNote} setNotes={setNotes} />)}
  
</div>
    );
};
export default ListNotes;
