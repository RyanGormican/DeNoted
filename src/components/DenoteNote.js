const DenoteNote = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, }) => {
  const changeColor = (event) => {
   setNotes({noteColor: event.target.value});
  }
  const theColor = {
  background-color:'noteColor';
};
  return(
    <div className='notes' id={noteId} style={theColor}>
    <span> {noteText } </span>
    <div className='footnotes'>
      <small> {noteDate} </small>
     <input type="color" onChange={changeColor} id="noteColorS" name="noteColor"  value={noteColor} />
    <button onClick={() => removetheNote(noteId)} className='deletenotes' size='1.3em' > X </button>
    </div>
    
    </div>
    );
};

export default DenoteNote;
