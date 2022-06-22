//sections---
const homeSection = document.querySelector("#home")
const skillsSection = document.querySelector("#skills")
const projectsSection = document.querySelector("#projects")
const educationSection = document.querySelector("#education")
const contactSection = document.querySelector("#contact")

const headerNav = document.querySelector("header")
const toReveal = document.querySelectorAll("section:not(#home) .toReveal")
const homeToReveal = document.querySelectorAll("#home .toReveal")
const navToReveal = document.querySelectorAll("header .toReveal")

// scroll top
const scrollTop = document.querySelector('.scrollTop')
scrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
}
)

window.onscroll = () => {
    if (window.scrollY < skillsSection.offsetTop - 100) {
        activeNav(0)
    }
    else if (window.scrollY >= skillsSection.offsetTop - 100 && window.scrollY < projectsSection.offsetTop - 100) {
        activeNav(1)
    }
    else if (window.scrollY >= projectsSection.offsetTop - 100 && window.scrollY < educationSection.offsetTop - 100) {
        activeNav(2)
    }
    else if (window.scrollY >= educationSection.offsetTop - 100 && window.scrollY < contactSection.offsetTop - 100) {
        activeNav(3)
    }
    else if (window.scrollY >= contactSection.offsetTop - 100) {
        activeNav(4)
    }
    //revealing toggling
    toReveal.forEach(li => {
        if (window.scrollY >= li.offsetTop - window.innerHeight + 50) {
            li.classList.add('reveal')
        }
        else {
            li.classList.remove('reveal')
        }
    })
    // showing the scroll top button
    if (window.scrollY >= skillsSection.offsetTop + 50) {
        scrollTop.classList.add('show')
    }
    else {
        scrollTop.classList.remove('show')
    }
}


function activeNav(j) {
    for (let i = 0; i < 5; i++) {
        let li = document.querySelector('header ul li:nth-child(' + (i + 1) + ')')
        if (i == j)
            li.classList.add('active')
        else li.classList.remove('active')
    }
}

//!--- revealing the home section's elements (not like the other elements) ---
const homeIcons = document.querySelectorAll("#home li")
const navIcons = document.querySelectorAll("header ul li")
setTimeout(() => {
    homeToReveal.forEach(li => {
        li.classList.add("reveal")
    })
    navToReveal.forEach(li => {
        li.classList.add("reveal")
    })
}, 1000);


//!=== hiding the header ---
const hideHeader = document.querySelector('.hide-header')
const showHeader = document.querySelector('.show-header')

hideHeader.addEventListener('click', () => {
    headerNav.classList.add('hide')
    showHeader.classList.add('show')
    hideHeader.classList.remove('show')
})
showHeader.addEventListener('click', () => {
    headerNav.classList.remove('hide')
    hideHeader.classList.add('show')
    showHeader.classList.remove('show')
})



//!--------- typing text ----------------
const hello = document.querySelector('.hello')
const job = document.querySelector('.job')

let HelloText = `Hello, I'm Jacer Chetoui`

function typing(field, text) {
    field.textContent = ""
    let interval = setInterval(() => {
        if (field.textContent.length == text.length) {
            clearInterval(interval)
        }
        else {
            field.textContent += text[field.textContent.length]
        }
    }, 120)

}

setTimeout(() => {
    typing(hello, HelloText)
    job.classList.add('showText')
    document.querySelectorAll('li').forEach(li => {
        li.style.transitionDelay = '0s'
    })
}, 4200);

// !== preloader ===

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none'
})


//----------- switching projects -------------

const allBtn = document.querySelector('.all')
const interactiveBtn = document.querySelector('.interactive')
const templatesBtn = document.querySelector('.templates')

allBtn.addEventListener('click', () => {
    interactiveBtn.classList.remove('active')
    allBtn.classList.add('active')
    templatesBtn.classList.remove('active')
    document.querySelectorAll('.project').forEach(li => {
        li.classList.remove('hide')
    })
})
interactiveBtn.addEventListener('click', () => {
    interactiveBtn.classList.add('active')
    allBtn.classList.remove('active')
    templatesBtn.classList.remove('active')

    document.querySelectorAll('.project').forEach(li => {
        if (li.classList.contains('template')) {
            li.classList.remove('hide')
        }
        else {
            li.classList.add('hide')
        }
    })
})
templatesBtn.addEventListener('click', () => {
    interactiveBtn.classList.remove('active')
    allBtn.classList.remove('active')
    templatesBtn.classList.add('active')

    document.querySelectorAll('.project').forEach(li => {
        if (li.classList.contains('interactive')) {
            li.classList.remove('hide')
        }
        else {
            li.classList.add('hide')
        }
    })
})

