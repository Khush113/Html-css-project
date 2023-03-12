//selected
// const select1=document.querySelectorAll('.items li');
// console.log(select1);
// select1.forEach((selectitems)=>{
//     selectitems.addEventListener('click',()=>{
//         const menu=document.querySelectorAll('.menu ');
//         menu.forEach((menuitems)=>{
//             menuitems.addEventListener('click',()=>{
//                 menuitems.style.background="red";
//                 menuitems.style.display="block";
//             })
//         })
//     })
// })

const menu=document.getElementById('menubar');
const sidebar=document.getElementById('sidebar');
menu.addEventListener('click',()=>{
    // const sidebar=document.getElementById('sidebar');
    // sidebar.style.background="red";
    sidebar.style.display="block";
})

//cross
const cross=document.querySelector('.crossicon');
cross.addEventListener('click',()=>{
     sidebar.style.display="none";
})

//About 