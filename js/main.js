const chooseColor = document.querySelectorAll('chooose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.datase.button;
    const contentActive = document.querySelectorAll(`.${button}`)
    
    chooseColor.forEach(function(item){
        item.classList.remove('chooose-color__btn--active')
    })

    target.classList.add('chooose-color__btn--active')

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    })

    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    })
}