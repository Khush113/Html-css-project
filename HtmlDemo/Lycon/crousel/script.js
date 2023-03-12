const slides=document.querySelectorAll('.slides');
console.log(slides.length)
let counter=0;
slides.forEach((slide ,index)=>{
    slide.style.left=`${index * 100}%`
})
const pre=()=>{
   if(counter!=0){
   counter++;
   slideimg();}
}
const next=()=>{
    if(counter < slides.length-1){
    counter--;
    slideimg();}
 }
const slideimg=()=>{
    slides.forEach((slide)=>{
       slide.style.transform=`translateX(${counter *100}%)` 
    })
}