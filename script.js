if(localStorage.storedList){
    loadList()
}
//Variables
const submitSnake = document.getElementById("submitBtn")


//Event Listners
submitSnake.addEventListener('click', addSnakeName)



//Functions
function addSnakeName(){
    var newItem = document.createElement("div")
    newItem.innerHTML = document.getElementById("box").value
    document.getElementById("list").appendChild(newItem)
    newItem.addEventListener('click', removeSnake)
    saveList()
}

function removeSnake(){
    document.getElementById("list").removeChild(this);
    saveList()
}


