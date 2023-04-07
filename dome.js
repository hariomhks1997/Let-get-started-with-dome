// GET ELEMENT BY ID//
//console.log(document.getElementById('header-title'))
//var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="Hello"; 
//headerTitle.innerText="Good Bye"; 
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML="<h3>Hello</h3>";
//headerTitle.style.borderBottom ="solid 3px #000";
header.style.borderBottom ="solid 3px #000" 

// GETR ELEMENTS BY CLASS NAME //

var items=document.getElementsByClassName("title")
items[0].style.fontWeight="bold"
items[0].style.backgroundColor="green"


var items=document.getElementsByClassName("list-group-item")
console.log(items);
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight="bold"
items[1].style.backgroundColor="yellow"
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor="purple"
}
 