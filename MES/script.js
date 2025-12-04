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
    data.forEach((data) => {
        const elementprofile = document.createElement(("div"))
        elementprofile.innerHTML = `
        <tr>
            <th scope="row">${data.firstname}</th>
            <td>${data.lastname}</td>
            <td>${data.email}</td>
            <td>
                <button id="${data.id}" class="btn btn-danger">Delete</button>
                <button id="${data.id}" class="btn btn-info">Update</button>
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
            email: addForm.email.value
        }
        data.push(newELement)
        console.log(data)
        afficherData()
    })

}
