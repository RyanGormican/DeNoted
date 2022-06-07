import { nanoid } from 'nanoid';
import { useState } from 'react';
import listNotes from './components/listNotes';
const App = () => {
    const [note, setNote] = useState([{ noteId: nanoid(),  noteText: "Edit the note!", noteDate:""}]);
    return (<div className="containNotes">
        <listNotes theNotes={note}/>
        </div>;
  );


export default App;
