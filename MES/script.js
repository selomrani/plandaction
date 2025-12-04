const dataContent = document.getElementById("dataContent");

let data = [
    {
        id: 1,
        firstname: "Tayeb",
        lastname: "SOUINI",
        email: "Tayeb@gmail.com"
    }
]

addnew()
function afficherData() {
    dataContent.innerHTML = ``
    data.forEach((dataelement) => {
        const elementprofile = document.createElement(("tr"))
        elementprofile.innerHTML += `
        <tr>
            <th scope="row">${dataelement.firstname}</th>
            <td>${dataelement.lastname}</td>
            <td>${dataelement.email}</td>
            <td>
                <button id="${dataelement.id}" class="btn btn-danger">Delete</button>
                <button id="${dataelement.id}" class="dltbtn btn btn-info">Update</button>
            </td>
        </tr>`
        dataContent.appendChild(elementprofile)
    })
}



function addnew() {
    const addForm = document.forms["ajouter"]
    addForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newELement = {
            firstname: addForm.firstname.value,
            lastname: addForm.lastname.value,
            email: addForm.email.value,
        }
        data.push(newELement)
        console.log(data)
        afficherData()
    })

}

function deletefn() {
    const deletebtns = document.querySelectorAll(".dltbtn")
}



// ------------------------------------------------------------------------


const searchform = document.forms["searchform"]
searchform.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchkw = searchform.searchkw.value
    const filterebyname = data.filter((datae)=>{
        return datae.firstname == searchkw
    })
    console.log(filterebyname)
})
