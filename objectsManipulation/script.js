const dataContent = document.getElementById("dataContent");

let data = [
    {
        id: 1,
        firstname: "Tayeb",
        lastname: "SOUINI",
        email: "Tayeb@gmail.com"
    }
]


function afficherData(oneItem) {
    dataContent.innerHTML = 
        <tr>
                    <th scope="row">${oneItem.firstname}</th>
                    <td>${oneItem.lastname}</td>
                    <td>${oneItem.email}</td>
                    <td>
                        <button id="${oneItem.id}" class="btn btn-danger">Delete</button>
                        <button id="${oneItem.id}" class="btn btn-info">Update</button>
                    </td>
                </tr>
    
} 


afficherData(data[0]);