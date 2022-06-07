import denoteNote from './Note';
const listNotes = ({ theNotes }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <denoteNote />)}
    </div>;
    )
}
export default listNotes;
