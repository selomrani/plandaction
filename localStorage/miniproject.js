let tasks = [
    {
        title: "Plan d'action",
        description: "I need to complete this task by the end of the week",

    },
    {
        title: "Brief Project",
        description: "I need to work on this week's brief project "
    }
]

function addnewtask() {
    const addtaskform = document.forms[0]
    addtaskform.addEventListener("submit", (e) => {
        e.preventDefault()
        let newtask = {
            title: addtaskform.taskTitle.value,
            description: addtaskform.taskDescription.value
        }
        tasks.push(newtask)
        console.log(tasks)
        StoreToLocalStorage(tasks,"localtasks")
    })
}
addnewtask()

function StoreToLocalStorage(item, key) {
    const ToStore = JSON.stringify(item)
    localStorage.setItem(key, ToStore)
}