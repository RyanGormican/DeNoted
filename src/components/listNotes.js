import denoteNote from './Note';
const listNotes = ({ theNotes }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <denoteNote noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate} />)}
    </div>;
    )
}
export default listNotes;
