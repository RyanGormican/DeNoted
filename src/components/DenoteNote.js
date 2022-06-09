const DenoteNote = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, theNotes,}) => {
  const changeColor = (event) => {
  const updColor = theNotes.map(note => {
    if(note.noteId === {noteId))
       {
    setNotes(...note,{noteColor: event.target.value});
       }
  }
  };
  var noteColors = {noteColor};

  return(
    <div className='notes' id={noteId} style={{'backgroundColor': noteColors }}>
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
