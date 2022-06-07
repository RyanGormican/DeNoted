import { nanoid } from 'nanoid';
import { useState } from 'react';
import listNotes from './components/listNotes';
const App = () => {
    const [note, setNote] = useState([{ noteId: nanoid(),  noteText: "Edit the note!", noteDate:""}]);
    
    const addNote = (text) => {
        
    }
    return (<div className="containNotes">
        <listNotes theNotes={note} addtheNote={addNote}/>
        </div>;
  );


export default App;
