/*DOM select
 Event Listner
//Validation
//Creating Element
//Append for UI display
*/

//DOM select
const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const bookList=document.querySelector('#bookList');

// EventListener
btn.addEventListener('click',function(e){
    e.preventDefault();
    //console.log('Hellow')

// Validation
if(title.value=='' && author.value=='' && year.value=='')
{
    alert('Enter value please');
}

else{
      const newRow=document.createElement('tr');

      // create newtitle
      
      const newTitle=document.createElement('th');
      newTitle.innerHTML=title.value;
      newRow.appendChild(newTitle);

      const newAuthor=document.createElement('th');
      newAuthor.innerHTML=author.value;
      newRow.appendChild(newAuthor);

      const newYear=document.createElement('th');
      newYear.innerHTML=year.value;
      newRow.appendChild(newYear);

      bookList.appendChild(newRow);
}
});