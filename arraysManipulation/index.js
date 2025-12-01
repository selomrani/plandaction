let contacts = [];
function addNewContact() {
    const addForm = document.forms["addForm"];
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let newContact = {
            fullname: addForm.FullName.value,
            email: addForm.email.value,
            phone: addForm.phone.value,
        };
        contacts.push(newContact);
        addForm.reset();
        console.log(contacts)
        RenderContacts()
    })
}
addNewContact()
function RenderContacts() {
    const contactList = document.getElementById("contactList")
    contactList.innerHTML = ``
    contacts.forEach((contact) => {
        const contactCard = document.createElement("div")
        contactCard.innerHTML = `                    <div class="card mb-3 w-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${contact.fullname}</h5>
                            <div class="card-text mb-3">
                                <div class="mb-1"><i
                                        class="bi bi-envelope me-2 text-primary"></i>${contact.email}
                                </div>
                                <div><i class="bi bi-telephone me-2 text-success"></i>${contact.phone}</div>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-warning flex-fill"><i class="bi bi-pencil-square"></i>
                                    Edit</button>
                                <button class="btn btn-danger flex-fill"><i class="bi bi-trash"></i> Delete</button>
                            </div>
                        </div>`
        contactList.appendChild(contactCard)
        console.log(contactList);

    })


}
