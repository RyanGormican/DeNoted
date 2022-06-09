const DenoteNote = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, }) => {
  const changeColor = (event) => {
   setNotes({noteColor: event.target.value});
  }
  return(
    <div className='notes' id={noteId} style={{background-color: noteColor}}>
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
