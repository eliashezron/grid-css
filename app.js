import './index.css'

const portifolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portifolioItems.forEach(portifolioItem => {
    portifolioItem.addEventListener('mouseover', ()=>{
        console.log(portifolioItem.childNodes[1].classList)
        portifolioItem.childNodes[1].classList.add('img-darken')
    })
})