const addNewToDo = document.querySelector('.addNew');
const list       = document.querySelector('.todos')
const searchItem = document.querySelector('.searchBox');


// Add new things in to do list
generateNewLi =(todo) => {
    const newLi = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt"></i>
    </li>
    `;
    list.innerHTML += newLi;

};

addNewToDo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addNewToDo.addNew.value.trim();
    console.log(todo);
    generateNewLi(todo)
    
});





// search things in to do
searchItem.addEventListener('submit' , e => {
    e.preventDefault
    const search = searchItem.searchBox.value;
    console.log(search);
});