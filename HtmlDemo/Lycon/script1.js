//take caret 
//get all the dropsowns from document
const dropdowns=document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown=>{
    //get inner html of all dropdown
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu ul')  
    const selected=dropdown.querySelector('.selected')

    select.addEventListener('click',()=>{
        //add the cliked select styles to the select element
       select.classList.toggle('select-clicked');
       //add rotate style to caret
       caret.classList.toggle('caret-rotate');
       //Add open style to menu elements
       menu.classList.toggle('menu-open');
      });
       //loop throgh all option elements
       options.forEach(option=>{
        option.addEventListener('click',()=>{
            selected.innerText=option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option=>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        })
    
    
    })
})
