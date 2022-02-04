const input = document.querySelector('#input')

const items = document.querySelector('#items')

let toDos

showTodo()

function showTodo(){
    items.innerHTML = ''
    let div = ''
    let itemList1 = JSON.parse(localStorage.getItem('itemList'))
    if(itemList1 === null){
        toDos = []
    }else{
        toDos = itemList1
    }
    toDos.forEach((_, index) => {
        let list = toDos[index]
        div += `<li class="list" onClick="checkList(this)">${list}</li>`
    })
    items.innerHTML = div
    input.value = ''
}



addItems = () => {
    if(input.value != ''){
        toDos.push(input.value.trim())
        localStorage.setItem('itemList', JSON.stringify(toDos))
    }else{
        alert('The field is empty')
    }
    showTodo()
}

removeItems = () => {
    localStorage.clear()
    items.innerHTML = ''
    showTodo()
}

checkList = (e) => {
    e.classList.toggle('checked')
}