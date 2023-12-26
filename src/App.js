import React, { useState } from "react";
import "./App.css";

// Import necessary modules from React

// Define the functional component App
const App = () => {
  // State to manage the list of notes
  const [notes, setNotes] = useState([]);
  // State to manage the current note being edited
  const [currentNote, setCurrentNote] = useState("");
  // State to manage the editing mode
  const [editMode, setEditMode] = useState(false);
  // State to manage the index of the note being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle the input change
  const handleInputChange = (event) => {
    setCurrentNote(event.target.value);
  };

  // Function to handle the form submission (add or edit note)
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editMode) {
      // If in edit mode, update the existing note
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = currentNote;
      setNotes(updatedNotes);
      setEditMode(false);
      setEditIndex(null);
    } else {
      // If not in edit mode, add a new note
      setNotes([...notes, currentNote]);
    }

    // Clear the input field
    setCurrentNote("");
  };

  // Function to handle note edit
  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setCurrentNote(notes[index]);
  };

  // Function to handle note deletion
  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Simple Note Taking App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <input type="text" value={currentNote} onChange={handleInputChange} />
        </label>
        <button type="submit">{editMode ? "Edit Note" : "Add Note"}</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
