const fs=require('fs')
const chalk=require('chalk')


const getNotes=function()
{
    return "Your notes.... "
}

const addNote=function(title,body)
{
   const notes=loadNotes()
   //filter creates a new js array from the existing array(here notes) which statisfy the given condition
   const duplicate_notes=notes.filter(function(note){
       return title===note.title
   })

   if (duplicate_notes.length === 0)
   {
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green('New Note added'))
   }
   else{
    console.log('Note already exists')
   }
   
   //console.log(notes)
}
const removeNote=function(title)
{
   const notes=loadNotes()
   const duplicate_notes=notes.filter(function(note){
        return title===note.title
   })

   if(duplicate_notes.length === 0)
   {
    console.log(chalk.red.inverse("Title of any note doesnot match, so noting to be removed !!"))
   }
    
    else
    {
        const removeNotes=notes.filter(function(note)
        {
            return title!=note.title
        })
        saveNotes(removeNotes)
        console.log(chalk.green.inverse("Note deleted"))
    }
        

}

const saveNotes=function(notes)
{
    const jsondata=JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsondata)
}

const loadNotes=function()
{
     try{
         const dataBuffer=fs.readFileSync('notes.json')
         const json_data=dataBuffer.toString()
         return JSON.parse(json_data)

     }catch(e)
     {
        return []
     }
}

// now from notes.js we need to get 3 functions to use them in app.js file
//So Now for module.exports, we are passsing an object having 2 properties (getNotes_1, addNote_1 & removeNote_1)
//getNotes_1 property will get its value from getNotes function and 
// addNote_1 will get its value from addNote function
module.exports={
    getNotes_1:getNotes,
    addNote_1:addNote,
    removeNote_1:removeNote
}

