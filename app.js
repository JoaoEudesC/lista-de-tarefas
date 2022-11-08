// Seleção de elementos





const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const canceleditbtn = document.querySelector("#cancel-edit-btn");
let oldinputValue = {}














//Funções




const savetodo = (Text)=>{


    const todo =document.createElement("div")
    todo.classList.add("todo")
    const todotitle = document.createElement("h3")
    todotitle.innerText = Text
    todo.appendChild(todotitle)

    const donebtn= document.createElement("button")
    donebtn.classList.add("finish-todo")
    donebtn.innerHTML = '<i class ="fa-solid fa-check"></i>'
    todo.appendChild(donebtn)

    const editbtn = document.createElement("button")
    editbtn.classList.add("edit-todo")
    editbtn.innerHTML = '<i class ="fa-solid fa-pen"></i>'
    todo.appendChild(editbtn)

    const deletebtn = document.createElement("button")
    deletebtn.classList.add("remove-todo")
    deletebtn.innerHTML = '<i class ="fa-solid fa-xmark"></i>'
    todo.appendChild(deletebtn)

    todolist.appendChild(todo)

    todoinput.value = ""
    todoinput.focus()
    
}


const toggleforms = () =>{
    editform.classList.toggle("hide")
    todoform.classList.toggle("hide")
    todolist.classList.toggle("hide")
};





const updatetodo = (text) =>{
    const todos = document.querySelectorAll(".todo") 

    todos.forEach((todo) => {

        let todotitle = todo.querySelector("h3")

        if(todotitle.innerText === oldinputValue){
            todotitle.innerText = text;
        }
    })
}















//Eventos


todoform.addEventListener("submit" , (e)=>{
    e.preventDefault()
    
    const inputvalue = todoinput.value

    if(inputvalue){
    savetodo(inputvalue)


    
    }
})


document.addEventListener("click" , (e) =>{

    const targetel = e.target;
    const parentel = targetel.closest("div");
    let todotitle;

    
    
    if(parentel && parentel.querySelector ("h3")){
        todotitle = parentel.querySelector("h3").innerText;
    }

    if(targetel.classList.contains("finish-todo")){
        parentel.classList.toggle("done")
    }
    if(targetel.classList.contains("remove-todo")){
        parentel.remove()
    }
    if(targetel.classList.contains("edit-todo")){
        toggleforms()
        editinput.value = todotitle
        oldinputValue = todotitle
    }

});



canceleditbtn.addEventListener("click" , (e)=>{
    e.preventDefault()

    toggleforms();
})



editform.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const editinputvalue = editinput.value

    if( editinputvalue){
        updatetodo(editinputvalue)
    }

    toggleforms()
})



