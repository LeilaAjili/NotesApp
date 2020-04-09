console.log("");
console.log("----------------------");
console.log("----  NOTES APP  -----");
console.log("----------------------");
console.log("");


const notes = require('./notes.js');




var command = (process.argv[2]);
var title = (process.argv[4]) ;
var body = (process.argv[6]) ;


if((command === "add")&&(title))
{
    
        
        notes.addNote(title, body);
        console.log("---------------------------------")
    
    
}

else if ((command === "remove")&&(title))
{
    console.log("Note removed !");
    notes.removeNote(title);
    console.log("---------------------------------")
}

else if ((command === "read")&& (title))
{
    console.log("Note :");
    notes.readNote(title);
    console.log("---------------------------------")
}

else if(command === "list")
{
    
    notes.listNotes();
}

else{
    console.log("Options: ");
    console.log("--help           Show help                [boolean] ");
    console.log("--title          Title of note            [required] ");
    console.log("Missing required argument : title")
    console.log("---------------------------------")
}