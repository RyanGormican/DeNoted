import { nanoid } from 'nanoid';
import { useState } from 'react';
import listNotes from './components/listNotes';
const App = () => {
    const [note, setNote] = useState([{ noteId: nanoid(),  noteText: "Edit the note!", noteDate:""}]);
    
    const addNote = (note) => {
        const date = new Date();
        const newNote = {
            noteId: nanoid(),
            noteText note,
            noteDate: date.toLocaleDateString();
    }
    const newList = [...note, newNote];
    setNote(newList);
    };
  const removeNote = (noteId) => {
    note.filter((note)=> note.noteId !== noteId);   
  }
    return (<div className="containNotes">
        <listNotes theNotes={note} addtheNote={addNote}/>
        </div>;
  );


export default App;
