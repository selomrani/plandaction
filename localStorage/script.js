// //exercice (partie 1)
// let person = {
//     name : "Ali"
// }
// // store to local storage
// const itemtostore = JSON.stringify(person)
// localStorage.setItem("person",itemtostore)
// console.log(itemtostore)

// //get from local storage 
// const localdata = localStorage.getItem("person")
// const storeddata = JSON.parse(localdata)
// console.log(storeddata)

// partie 2

// let people = [{
//     name : "soufyane" , "age" : 19
// },
// {
//     name : "adam","age" : 20
// }]

// store

// const storepeople = JSON.stringify(people)
// localStorage.setItem("localpeople",storepeople)

// //get

// const getlocal = localStorage.getItem("localpeople")
// const parseddata = JSON.parse(getlocal)
// console.log(parseddata)

// remove
// localStorage.removeItem("localpeople") // shows up as null if you remove the the stored item before trying to get it



// partie 3

// let person = {
//     id : 1, name : "salah" 
// }
// let players = [{
//     name : "soufyane" , rank : "Pro" , id : 1001
// },
// {
//     name : "Adam" , rank : "Newbie", id : 1002
// },
// {
//     name : "Walid" , rank : "intermediate" , id : 1003
// }]
// StoreToLocalStorage(players,"storedArray")
// StoreToLocalStorage(person,"storedObject")
// function StoreToLocalStorage(item,key){
//     const ToStore = JSON.stringify(item)
//     localStorage.setItem(key,ToStore)
// }

// players[1].name = "Salah" 
// StoreToLocalStorage(players,"storedArray")
