const addNewToDo = document.querySelector('.addNew');
const list       = document.querySelector('.todos')
const search     = document.querySelector('.search input');


// Add new things in to do list
generateNewLi =(todo) => {
    const newLi = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += newLi;

};

addNewToDo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addNewToDo.addNew.value.trim();
    
    if(todo.length){
        console.log(todo);
        generateNewLi(todo);
        addNewToDo.reset();
    }
    
});

// Delete button

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});



// search things in to do with key up event
const match = (letter) => {
    Array.from(list.children)
        .filter(list => !list.textContent.includes(letter))
        .forEach(list => list.classList.add('notfound'));
    Array.from(list.children)
        .filter(list => list.textContent.includes(letter))
        .forEach(list => list.classList.remove('notfound'));
};

search.addEventListener('keyup',() =>{
    const letter = search.value.trim();
    match(letter);
});