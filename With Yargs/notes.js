const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

var addNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("Note already exists.");
  }
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var listNotes = () => {
  var notes = fetchNotes();

  var length = fetchNotes().length
  console.log("Printing "+length+" note(s)")

  notes.forEach((note) => logNote(note));

  
  
}



var logNote = (note) => {
  console.log("----------------------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
}
