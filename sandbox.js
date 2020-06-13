const addNewToDo = document.querySelector('.addNew');
const searchItem = document.querySelector('.searchBox')


// Add new things in to do list
addNewToDo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addNewToDo.addNew.value.trim();
    console.log(todo);
});
// search things in to do
searchItem.addEventListener('submit' , e => {
    e.preventDefault
    const search = searchItem.searchBox.value;
    console.log(search);
});