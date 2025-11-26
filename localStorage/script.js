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


const resetbtn = document.getElementById("reset")
resetbtn.addEventListener("click", (e) => {
    localStorage.clear()
})

// partie 4 (CRUD)


let players = [{
    name: "soufyane", rank: "Pro", id: 1001
},
{
    name: "Adam", rank: "Newbie", id: 1002
},
{
    name: "Walid", rank: "intermediate", id: 1003
}]
function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}
function GetLocalStorage(key) {
    let getlocal = localStorage.getItem(key)
    let localdata = JSON.parse(getlocal)
    localdata = players
}
const addBtn = document.getElementById("add")
addBtn.addEventListener("click", function () {
    let newPlayer = {}
    newPlayer.name = prompt("Please enter your name")
    newPlayer.rank = prompt("Please enter your current rank")
    newPlayer.id = prompt("Please enter a unique id (1003+)")
    players.push(newPlayer)
    console.log(players)
    GetLocalStorage("StoredPlayers")
    StoreToLocalStorage(players, "StoredPlayers")
})

const deleteBtn = document.getElementById("delete")
deleteBtn.addEventListener("click", function () {
    let deleteid = prompt("Enter an ID to delete")
    const playerTodelete = players.find((player) => {
        return player.id == deleteid
    })
    console.log(playerTodelete)
    for (let i = 0; i < players.length; i++) {
        if (players[i] == playerTodelete) {
            players.splice(i, 1)
        }
    }
    StoreToLocalStorage(players, "StoredPlayers")
    console.log(players)
})

const editBtn = document.getElementById("edit")

editBtn.addEventListener("click", function () {
    let editId = prompt("Enter Id ")
    const playerToedit = players.find((player) => {
        return player.id == editId
    })
    console.log(playerToedit)
})

