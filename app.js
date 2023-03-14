var btnSearch = document.querySelector('.bx-search')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('search-box-open')
    this.previousElementSibling.focus()
})

var moreInfo = document.querySelector('.moreinfo')
moreInfo.addEventListener('click',function(){
    this.nextElementSibling.classList.toggle('open-more')
})
