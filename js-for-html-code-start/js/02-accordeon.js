const headers = document.querySelectorAll("[data-name='accordeon-title']");



headers.forEach(item=>{
    item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden')

    })
    
})
