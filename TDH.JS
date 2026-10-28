var myform = document.getElementsbyid("myform");
var myinput = document.getElementsbyid("myinput");
var myitem = document.getElementsbyid("myitem");

myform.addeventlistener("submit",function(event){
event.preventdatafall();
createitem(myinput.value)
})

function createitem(inputitem){
var item = <li>${inputitem}
<button onclick="DeleteElement(this)">delete</button></li>
myitem.insertadjacantHTML("beforeend",item)
myinput.value = ""
myinput.focus()
}
function DeleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}
<Script>src="tdl.html"</Script>