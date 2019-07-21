const fs=require('fs')

// Java Script Object
// const book={
//     title:'Ego is the enemy',
//     author:'Ryan Holiday'
// }
// // converting into JSON
// const bookJSON=JSON.stringify(book)
// fs.writeFileSync("1-JSON.json",bookJSON)
// console.log(bookJSON)


// // covert to javascript object

// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData)
// console.log(parsedData.title)

// const dataBuffer=fs.readFileSync('1-JSON.json')
// //console.log(dataBuffer)
// const dataJSON=dataBuffer.toString()

// const data=JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer=fs.readFileSync('1-JSON.json')
//console.log(dataBuffer)
 const json_data=dataBuffer.toString()
 const js_object=JSON.parse(json_data)
 //console.log(js_object)
 js_object.name='Sagnik'
 js_object.age=22
  const json_data1=JSON.stringify(js_object)
  //console.log(json_data1)
   fs.writeFileSync('1-JSON.json',json_data1)