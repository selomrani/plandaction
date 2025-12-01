let contacts = []

function addNewContact (){
    const addForm = document.forms[0]
    addForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let newContact = {
            fullname : addForm.FullName.value,
            email : addForm.email.value,
            phone : addForm.phone.value
        }
          contacts.push(newContact)
          console.log(contacts)
    })
}
addNewContact()