const input =document.querySelector('input');
const button=document.querySelector('button');
const list=document.querySelector('ul');

button.addEventListener('click',function(){
    const myItem = input.value;
    input.value = '';

    const listItem=document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton=document.createElement('button');
    //listItem.innerHTML(input);
    listItem.appendChild(listText);
    listText.textContent=myItem;
    //listItem.textContent(myItem);
    deleteButton.textContent="X";
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    list.appendChild(button);
    //aria label
    

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        console.log(deleteButton.ariaLabel); 
        deleteButton.ariaLabel = "Close dialog"
        console.log(deleteButton.ariaLabel);
      });
    input.focus();
});