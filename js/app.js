document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');

  const button = document.createElement('button');
  button.textContent = "Delete All";
  button.classList.add('delete');
  form.appendChild(button);

  button.addEventListener('click', deleteAllSubmissions);


  form.addEventListener('submit', handleFormSubmit);
});

const deleteAllSubmissions = (e) => {
  const list = document.querySelector('#reading-list');
  list.remove()
}
const handleFormSubmit = (e) => {
  e.preventDefault();

  const newItemTitle = document.createElement('li');
  const newItemAuthor = document.createElement('li');
  const newItemCategory = document.createElement('li');
  const readingListItem = document.createElement('ul');
  const readingList = document.querySelector('#reading-list');

  newItemTitle.textContent = e.target.title.value;
  newItemAuthor.textContent = e.target.author.value;
  newItemCategory.textContent = e.target.category.value;
  readingListItem.appendChild(newItemTitle);
  readingListItem.appendChild(newItemAuthor);
  readingListItem.appendChild(newItemCategory);
  readingListItem.classList.add('list-item');
  readingList.appendChild(readingListItem);
  
  const form = document.querySelector('#new-item-form')
  form.reset()
  

  
}
