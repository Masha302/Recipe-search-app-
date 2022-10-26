const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(item =>{
   item.addEventListener('mouseover', ()=>{
      removeFocus();
      item.classList.add('selected');
   })

   removeFocus = () =>{
      items.forEach(item =>{
      item.classList.remove('selected');
   })
   }
}) 

const saerchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".picture");

saerchInput.addEventListener('keyup', function(event){
   const word = event.target.value.toLowerCase();
   divs.forEach(item => {
      item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
   })
   
})
console.log(divs);
