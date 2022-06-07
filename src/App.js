import listNotes from './components/listNotes';
const App = () => {
    const [note, setNote] = useState();
    return (<div className="containNotes">
        <listNotes />
        </div>;
  );


export default App;
