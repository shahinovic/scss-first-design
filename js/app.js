// start nav
let toggler = document.querySelector('.toggler');
let openI = document.querySelectorAll('.on');
let closeI = document.querySelectorAll('.off');
let navbar = document.querySelector('.navbar');

window.onresize = function () {
    if (window.getComputedStyle(toggler).display == 'none') {
        if (navbar.classList.contains('active')) {
            document.querySelector('.on').style.display = 'block';
    document.querySelector('.off').style.display = 'none';
    document.querySelector('.toggler').classList.remove('active');
    navbar.classList.remove('active');
        }
    }
}

window.onclick = function(e) {
    if (!e.target.classList.contains('active')) {
        document.querySelector('.toggler').classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggler.addEventListener('click', _ => {
    if (!toggler.classList.contains('active')) {
        document.querySelector('.on').style.display = 'none';
    document.querySelector('.off').style.display = 'block';
    document.querySelector('.toggler').classList.add('active');
    navbar.classList.add('active');
    } else {
        document.querySelector('.on').style.display = 'block';
    document.querySelector('.off').style.display = 'none';
    document.querySelector('.toggler').classList.remove('active');
    navbar.classList.remove('active');
    }
})
// end nav
// start active
let activeList = document.querySelectorAll('.navbar li a');
activeList.forEach((ele) => {
    ele.addEventListener('click', function () {
        activeList.forEach((rem) => rem.classList.remove('active'));
        ele.classList.add('active');
    })
})
// end active

// start slide

let slides = Array.from(document.querySelectorAll('.slide img'));
let forward = document.querySelector('.forward');
let backward = document.querySelector('.back');
let bolts = Array.from(document.querySelectorAll('.slides > ul > li'));
let counter = 0;
forward.onclick = function () {
    if (counter < 3) {
        counter++;
    } else {
            counter = 0;
    }
    bolts.forEach((ele) => {
        ele.classList.remove('active');
        bolts[counter].classList.add('active');
    })
        slides.forEach((ele) => {
        ele.parentElement.style.transform = `translateX(${(-100 * counter)}%)`;
        })
}

backward.onclick = function () {
    if (counter > 0) {
        counter --;
    } else {
            counter = 3;
    }
    bolts.forEach((ele) => {
        ele.classList.remove('active');
        bolts[counter].classList.add('active');
    })
    slides.forEach((ele) => {

    ele.parentElement.style.transform = `translateX(${(-100 * counter)}%)`;
    })
}

bolts.forEach((bol) => {
    bol.onclick = function () {
        bolts.forEach((ele) => ele.classList.remove('active'));
        bol.classList.add('active');
        counter = bolts.indexOf(bol);
        slides.forEach((ele) => {
            ele.parentElement.style.transform = `translateX(${(-100 * counter)}%)`;
            })
    }
})
// end slide