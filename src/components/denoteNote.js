// import { TiDelete } from "react-icons/md";
const denoteNote = ({ noteId, noteText, noteDate, removetheNote }) => {
  return(
    <div className='notes'>
    <span> {noteText } </span>
    <div className='footnotes'>
      <small> {noteDate} </small>
    <button onClick={() => removetheNote(noteId)} className='deletenotes' size='1.3em' > X </button>
    </div>
    
    </div>
    );
};

export default denoteNote;
