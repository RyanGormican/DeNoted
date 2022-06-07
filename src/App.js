import { useState from 'react';
import listNotes from './components/listNotes';
const App = () => {
    const [note, setNote] = useState([{ noteText: "Edit the note!", date:"");
    return (<div className="containNotes">
        <listNotes />
        </div>;
  );


export default App;
