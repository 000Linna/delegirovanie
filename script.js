let lm1 = document.getElementById('lm1')
let lm2 = document.getElementById('lm2')
let lm3 = document.getElementById('lm3')

lm1.addEventListener("click",()=>{
    console.log('pink')
})
lm2.addEventListener("click",(event)=>{
    console.log('red ')
    event.stopImmediatePropagation()
})
// метод event.stopImmediatePropagation()- полностью останавливает обработку
lm2.addEventListener("click",(event)=>{
    console.log('red - второй обрабодчик')
    
})
// метод event.stopPropagation()- остановка вспытия
lm3.addEventListener("click",()=>{

    console.log('blue')
   
})

let btn =document.querySelector("#btn")
let parent =document.querySelector("#parent")
let block =document.querySelector("#block")

btn.addEventListener('click',(event)=>{
    
    block.classList.add('active')
//  ОТМЕНЯЕМ ВСПЛЫТИЕ СОБЫТИЯ ПРИ КЛИКЕ НА КНОПКУ
// ЕСЛИ ЭТОГО НЕ СДЕЛАТЬ ТО ПРИ КЛИКЕ НА КНОПКУ СРАБОТАЕТ СОБЫТИЕ НАВЕШАННОЕ НА РОДИТЕЛЯ
    event.stopPropagation()
   
})
parent.addEventListener('click',()=>{
    block.classList.remove('active');
})


// делегирование
let list=document.querySelector('#list');

list.addEventListener('click',(event)=>{
    console.log(event.target)
    // tooggle- добавить класс если его нет и удалить класс если он уже есть на элименте
    event.target.classList.toggle('color')
})