const DenoteNote = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, }) => {
  const changeColor = (event) => {
    var noteIds = {noteId};
     var noteTexts = {noteText};
     var noteDates = {noteDate};
   setNotes({noteId: noteIds, noteText: noteTexts, noteDate: noteDates, noteColor: event.target.value});
  }
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
