import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Header2 from './components/Header2';
// import AddNote from './components/AddNote';
const App = () => {
  const [notes, setnotes] = useState([{
    text: "Learn React",
    date: "15/04/2023",
    id: nanoid(),
  },
  {
    text: "Buy Eggs",
    date: "16/04/2023",
    id: nanoid(),
  },
  {
    text: "Wish Muskaan",
    date: "17/04/2023",
    id: nanoid(),
  },


  ]);

  const [searchtext, setsearchtext] = useState('');
  const [darkMode, setdarkMode] = useState(false);
  // useEffect(() => {
  //   localStorage.setItem(
  //     'data-react-notes', JSON.stringify(notes)
  //   );
  // }, [notes]);

  const addNote = (textsss) => {
    const date = new Date();
    const newNote = {
      text: textsss,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    const newNotes = [...notes, newNote];
    setnotes(newNotes);


  }
  const handleToggleDarkMode = () => {
    setdarkMode(!darkMode);
    // console.log(darkMode)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  };
  return (
    < div className={`${darkMode ? 'dark' : 'light'}`
    }>
      <div className="container">

        {/* {darkMode ? <div><Header2 handleToggleDarkModes={handleToggleDarkMode} /></div> : <div><Header handleToggleDarkModes={handleToggleDarkMode} changeLogo={setdarkMode} /></div>
        } */}
        <Header handleToggleDarkModes={handleToggleDarkMode} changeLogo={darkMode} />
        <Search hanleSearchNote={setsearchtext} />
        <NotesList
          notess={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchtext))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div >
  );
}

export default App;
