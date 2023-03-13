const menu=document.getElementById('menubar');
const sidebar=document.getElementById('sidebar');
menu.addEventListener('click',()=>{
    // const sidebar=document.getElementById('sidebar');
 //sidebar.style.background="red";
 sidebar.style.display="block";
})

//cross
const cross=document.querySelector('.crossicon');
cross.addEventListener('click',()=>{
     sidebar.style.display="none";
})
//About us
const aboutmenu=document.getElementById('about');
console.log(aboutmenu);
const homemenu=document.getElementById('home');
console.log(homemenu);
const contact=document.getElementById('contact');
console.log(contact)
const menua=document.getElementById('about-us');
const menuc=document.getElementById('contact-us');
const menuh=document.getElementById('home-menu');
const mainmenu=document.getElementById('main');


aboutmenu.addEventListener('click',()=>{
     menua.style.display="block";
     menuc.style.display="none";
     mainmenu.style.display="none";
     
     
})
contact.addEventListener('click',()=>{
     menuc.style.display="block";
     menua.style.display="none";
     mainmenu.style.display="none";
})

homemenu.addEventListener('click',()=>{
     mainmenu.style.display="flex";
     menua.style.display="none";
     menuc.style.display="none";
})

