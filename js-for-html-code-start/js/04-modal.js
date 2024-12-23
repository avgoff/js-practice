const modalButtons = document.querySelectorAll('[data-modal-button]');  //получаем коллекцию кнопок
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]')

modalButtons.forEach(item=>{
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton; // получаем значение из атрибута кнопки
        const modal = document.querySelector('#' + modalId); // получаем id модалки и записываем в переменную modal
        modal.classList.remove('hidden');
        
        modal.querySelector('.modal-window').addEventListener('click', function(e){
            e.stopPropagation();//находим в модвлке блок .modal-window и запрещаем ему передавть клики родителю
        })

        
    })
})

modalCloseButtons.forEach(item=>{
    item.addEventListener('click',function(){
             const modal = this.closest('[data-modal]');//получается ищем родителя с таким атрибутом
                                          modal.classList.add('hidden')  //добавляем класс чтоб скрыть
        
    })
})

allModals.forEach(item=>{
    item.addEventListener('click',function(){
        this.classList.add('hidden')
        
    })
})