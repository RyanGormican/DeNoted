import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import listNotes from './components/listNotes';
import searchNotes from './components/searchNotes';
const App = () => {
    const [note, setNote] = useState([{ noteId: nanoid(),  noteText: "", noteDate:""}]);
    const [search,setSearch] = useState(''); 
    const [darkMode, setdarkMode] = useState(false);
  useEffect(() => {
      localStorage.setItem('denoted-data', JSON.stringify(note));
  }, []_)
    
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
  };
    return (
        
    <div className={'${darkMode && 'setdarkMode'}'>  
        <div className="containNotes">
        <noteHeader toggleDarkMode={setDarkMode}/>   
        <searchNotes setSearch={setSearch}/>
        <listNotes theNotes={note.filter((note)=> note.noteText.toLowerCase().includes(search))} addtheNote={addNote} removetheNote={removeNote}/>
        </div>
</div>
  );


export default App;
