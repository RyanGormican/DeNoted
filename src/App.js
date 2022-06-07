import { nanoid } from 'nanoid';
import { useState } from 'react';
import listNotes from './components/listNotes';
import searchNotes from './components/searchNotes';
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
    const newList = note.filter((note)=> note.noteId !== noteId);   
    setNote(newList);
  }
    return (<div className="containNotes">
        <searchNotes />
        <listNotes theNotes={note} addtheNote={addNote} removetheNote={removeNote}/>
        </div>;
  );


export default App;
