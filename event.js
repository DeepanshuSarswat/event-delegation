const category = document.querySelector("#category");

category.addEventListener('click', (event)=>{

   if(event.target.tagName == 'LI'){
    window.location.href = '/' + event.target.id;
   }
})