//const add=require('./utils.js')


 //const c =add(4,-2)

 //console.log(c)
//const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const getNotes=require('./notes.js')
//const msg=getNotes()
//console.log(msg)

//console.log(validator.isEmail('sagniksenguota017@gmail.com'))
//console.log(validator.isURL('https://facebook.com'))
//console.log(chalk.red.bold.underline('Error'))

//console.log(process.argv[2])
// const command=process.argv[2]
// console.log(process.argv)
// if(command==='add')
// {
//     console.log('Adding note !!')
// }
// else if(command==='remove')
// {
//     console.log('Removing note !!')
// }

//console.log(process.argv)
yargs.version('1.1.0')

// Adding a note
yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:
        {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        //console.log('Add a note !!',argv.title,argv.body)
        console.log('Title: ',argv.title)
        console.log('Body: ',argv.body)
    }
})
// remove a note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function()
    {
        console.log('Remove a note !!')
    }
})
yargs.command({
    command:'list',
    describe:'Listing a note',
    handler:function()
    {
        console.log('Listing a note')
        
    }
})
yargs.command({
    command:'read',
    describe:'Reading a note',
    handler:function()
    {
        console.log('Reading a note')
    }
})
yargs.parse()
//console.log(yargs.argv)

