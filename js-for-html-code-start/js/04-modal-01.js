const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const closeButton = document.querySelector('[data-modal-close]')

button.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

closeButton.addEventListener('click', function(){
    modal.classList.add('hidden');
})

modal.addEventListener('click', function(){
    modal.classList.add('hidden')
})

modal.querySelector('.modal-window').addEventListener('click', function(e){
    e.stopPropagation()//чтоб не видело клик внутри модалки  
})