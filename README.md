[DeNoted](https://denoted.vercel.app/) -

DeNoted is a notes app developed using React and an assortment of web technologies. Users are able to manage the notes on the page by adding and deleting the notes they want to change. Management of notes also allows the user to change the design of a note by modifying the background color.

React Components -
. AddNotes.js - Handles the logic of the add note widget. This ensures characters of a note are 250 characters or less and that blank notes can't be added.
. DenoteNote.js - A handler for classifying a note. Contains the text, a date of when it was added, and two buttons. There is the color button that allows the user to change the background color of the respective note, and the X button that allows the user to remove the respective note when clicked.
. ListNotes.js - Holds the list of all notes created. The div extracts all the notes to display using the map function
. NoteHeader.js - Holds the title as well as a button for toggling dark mode
. SearchNotes.js - Holds the input for the search bar that will set the search filter to whatever is typed in the textbox. 

Main -
. App.js - Processes the commands to add a new note to the list and remove a note from the list along with the filtering of the note list from the search value. App.js also handles the usage of storage in order to store and retrieve the notes from the local storage.

[Linkedin](https://www.linkedin.com/in/ryangormican/)
