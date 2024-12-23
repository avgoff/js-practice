const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(item=>{
    item.addEventListener('click', function(){
                
        contentBoxes.forEach(item=>{
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);//пишем имя атрибута но без 'data-'
        contentBox.classList.remove('hidden')
    })
})