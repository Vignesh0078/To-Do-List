// Selecting ul

let list = document.getElementById("container")

// Select input
let input = document.getElementById("inputlist")

function add(){
    let inputValue = input.value.trim()

    if(inputValue ===""){
        alert("Please Add Your Task...")
    }else{
        let listitem = document.createElement("li")
        listitem.innerHTML=inputlist.value + "<button onclick='deleteitem(event)' class='dlt'>Delete Task</button>"
        list.append(listitem)
        input.value=""
    }
}

// Trying or try to Create a Edit button before delete button.So,User can Edit their inputs incase if its wrong and not delete.

// function edit(){
//     let listedit = document.getElementById("")
//     listedit.textContent=inputedit.value + "<button>Edit</button>"
// }

function deleteitem(event){
    event.target.parentElement.remove()
}