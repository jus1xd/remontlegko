//! slider
console.log('working')

const leftArrow = document.querySelectorAll('.left__arrow')
const rightArrow = document.querySelectorAll('.right__arrow')

const sliderList = document.querySelector('.slider__list')
let slideGroup = document.querySelectorAll('.slides__group')

let html = document.querySelector('html')
let htmlWidth = parseInt(window.getComputedStyle(html).width.replace('px', ''))

if (htmlWidth > 1200) {
    htmlWidth = 1200
}

let sliderStep = htmlWidth

for (let index = 0; index < slideGroup.length; index++) {
    groupsCounter = index
}

let currentTranslateX = 0
let sliderListLength = groupsCounter * 1200

let cantSlideLeft = false
let cantSlideRight = false



const cantSlideLeftFunc = (bool, i) => {
    cantSlideLeft = bool
    if (bool) {
        leftArrow[i].style.opacity = '0.4'
    }
    else {
        leftArrow[i].style.opacity = '1'
    }
}
const cantSlideRightFunc = (bool, i) => {
    cantSlideRight = bool
    if (bool) {
        rightArrow[i].style.opacity = '0.4'
    }
    else {
        rightArrow[i].style.opacity = '1'
    }
}
for (let i = 0; i < leftArrow.length; i++) {
    leftArrow[i].addEventListener('click', () => {
        if ((Math.abs(currentTranslateX)) <= sliderListLength && (Math.abs(currentTranslateX)) > 0 && !cantSlideLeft) {
            currentTranslateX += sliderStep
            console.log('danil')
            sliderList.style.transform = `translateX(${currentTranslateX}px)`
            cantSlideRightFunc(false, i)
            rightArrow[i].style.opacity = '1'
            if (Math.abs(currentTranslateX) >= sliderListLength || Math.abs(currentTranslateX) <= 0) {
                console.log('logpar')
                cantSlideLeftFunc(true, i)
            }
        }
    })
}

for (let i = 0; i < rightArrow.length; i++) {
    rightArrow[i].addEventListener('click', () => {
        if ((Math.abs(currentTranslateX)) <= sliderListLength && (Math.abs(currentTranslateX)) >= 0 && !cantSlideRight) {
            currentTranslateX -= sliderStep
            console.log('vlad')
            sliderList.style.transform = `translateX(${currentTranslateX}px)`
            cantSlideLeftFunc(false, i)
            leftArrow[i].style.opacity = '1'
            if (Math.abs(currentTranslateX) >= sliderListLength) {
                cantSlideRightFunc(true, i)
            }
        }
    })
}



// ! QA

const answerItem = document.querySelectorAll('.answer__item')
const answerText = document.querySelectorAll('.answer__text')

for (let i = 0; i < answerItem.length; i++) {
    answerText[i].style.height = answerText[i].offsetHeight + 'px'
    answerItem[i].classList.add('hidden')
    answerText[i].classList.add('hidden')
    answerItem[i].addEventListener('click', (e) => {
        console.log(answerItem[i])

        // answerItem[i].style.height = answerItem[i].offsetHeight
        console.log(answerItem[i].offsetHeight)
        if (answerItem[i].classList.contains('hidden')) {
            answerItem[i].classList.remove('hidden')
            answerText[i].classList.remove('hidden')
            // answerText[i].scrollIntoView()
            console.log('fir')
        }
        else if (!answerItem[i].classList.contains('hidden')) {
            answerItem[i].classList.add('hidden')
            answerText[i].classList.add('hidden')
            console.log('sec')
        }
    })
}

// !burger 

const burgerBtn = document.querySelector('.burger')
const mobileHeader = document.querySelector('.mobile_header__nav')

burgerBtn.addEventListener('click', () => {
    if (mobileHeader.classList.contains('nav_hidden')) {
        mobileHeader.classList.remove('nav_hidden')
    }
    else {
        mobileHeader.classList.add('nav_hidden')
    }
})

// ! POPUP

const popupButton = document.querySelectorAll('.main__button')
const popupOverlay = document.querySelector('.overlay')
const popupWindow = document.querySelector('.popup')
const popupCloseBtn = document.querySelector('.popup__close')

popupOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
        html.style.overflow = 'visible'
        html.style.overflowX = 'hidden'
        html.style.paddingRight = '0px'
        popupOverlay.style.display = 'none'
    }
    else {
        return
    }
})

for (let i = 0; i < popupButton.length; i++) {
    popupButton[i].addEventListener('click', () => {
        if (popupButton[i].innerText === 'Заказать') {
            popupOverlay.style.display = 'flex'
            html.style.overflow = 'hidden'
            html.style.paddingRight = '11px'
        }
    })
    console.log(popupButton[i].innerText === 'Заказать')
}

popupCloseBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none'
    html.style.overflow = 'visible'
    html.style.overflowX = 'hidden'
    html.style.paddingRight = '0px'
})


// !SCROLL

const serviceButton = document.querySelectorAll('.nav-service')
const qaButton = document.querySelectorAll('.nav-qa')
const contactsButton = document.querySelectorAll('.nav-contacts')
const costButton = document.querySelectorAll('.nav-cost')

const serviceSection = document.querySelector('.service')
const qaSection = document.querySelector('.qa')
const contactsSection = document.querySelector('.contacts')
const costSection = document.querySelector('.cost')

for (let i = 0; i < serviceButton.length; i++) {
    serviceButton[i].addEventListener('click', () => {
        if (htmlWidth <= 576) {
            window.scrollTo({top: 1450, behavior: "smooth"})
        }
        if (htmlWidth > 576 && htmlWidth <=767) {
            window.scrollTo({top: 1250, behavior: "smooth"})
        }
        if (htmlWidth >= 768 && htmlWidth <=991) {
            window.scrollTo({top: 1150, behavior: "smooth"})
        }
        if (htmlWidth >= 992 && htmlWidth <=1199) {
            window.scrollTo({top: 1650, behavior: "smooth"})
        }
        if (htmlWidth >= 1200) {
            window.scrollTo({top: 1650, behavior: "smooth"})
        }
    })
}

for (let i = 0; i < costButton.length; i++) {
    costButton[i].addEventListener('click', () => {
        if (htmlWidth <= 576) {
            window.scrollTo({top: 2100, behavior: "smooth"})
        }
        if (htmlWidth > 576 && htmlWidth <=767) {
            window.scrollTo({top: 1950, behavior: "smooth"})
        }
        if (htmlWidth >= 768 && htmlWidth <=991) {
            window.scrollTo({top: 1850, behavior: "smooth"})
        }
        if (htmlWidth >= 992 && htmlWidth <=1199) {
            window.scrollTo({top: 2350, behavior: "smooth"})
        }
        if (htmlWidth >= 1200) {
            window.scrollTo({top: 2350, behavior: "smooth"})
        }
    })
}

for (let i = 0; i < contactsButton.length; i++) {
    contactsButton[i].addEventListener('click', () => {
        if (htmlWidth <= 576) {
            window.scrollTo({top: 3050, behavior: "smooth"})
        }
        if (htmlWidth > 576 && htmlWidth <=767) {
            window.scrollTo({top: 3050, behavior: "smooth"})
        }
        if (htmlWidth >= 768 && htmlWidth <=991) {
            window.scrollTo({top: 2750, behavior: "smooth"})
        }
        if (htmlWidth >= 992 && htmlWidth <=1199) {
            window.scrollTo({top: 3050, behavior: "smooth"})
        }
        if (htmlWidth >= 1200) {
            window.scrollTo({top: 3050, behavior: "smooth"})
        }
    })
}

for (let i = 0; i < qaButton.length; i++) {
    qaButton[i].addEventListener('click', () => {
        if (htmlWidth <= 576) {
            window.scrollTo({top: 5750, behavior: "smooth"})
        }
        if (htmlWidth > 576 && htmlWidth <=767) {
            window.scrollTo({top: 5750, behavior: "smooth"})
        }
        if (htmlWidth >= 768 && htmlWidth <=991) {
            window.scrollTo({top: 5750, behavior: "smooth"})
        }
        if (htmlWidth >= 992 && htmlWidth <=1199) {
            window.scrollTo({top: 5750, behavior: "smooth"})
        }
        if (htmlWidth >= 1200) {
            window.scrollTo({top: 5750, behavior: "smooth"})
        }
    })
}




