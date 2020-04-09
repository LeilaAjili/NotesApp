console.log("");
console.log("----------------------");
console.log("----  NOTES APP  -----");
console.log("----------------------");
console.log("");

const yargs = require ('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if((command === "add")&&(title))
{
    
        console.log("Note created !");
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