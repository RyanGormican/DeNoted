import { TiDelete } from 'react-icons/md';
const denoteNote = ({ noteId, noteText, noteDate }) => {
  return(
    <div className='notes'>
    <span> {noteText } </span>
    <div className='footnotes'>
      <small> {noteDate} </small>
    <TiDelete className= 'deletenotes' size='1.3em' />
    </div>
    
    </div>;
    )
}

export defaulte denoteNote;
