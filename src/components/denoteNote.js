// import { TiDelete } from "react-icons/md";
const denoteNote = ({ noteId, noteText, noteDate, removetheNote }) => {
  return(
    <div className='notes'>
    <span> {noteText } </span>
    <div className='footnotes'>
      <small> {noteDate} </small>
    <Button onClick={() => removetheNote(noteId)} className='deletenotes' size='1.3em' > X </Button>
    </div>
    
    </div>
    );
};

export default denoteNote;
