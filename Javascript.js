var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
  //  INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function resume(){
  window.open('https://drive.google.com/file/d/1wVpD4JB9fk6_yE1jc1Ibgzy4shzP7hXt/view?usp=sharing', '_blank').focus();
}

function glassdoorDemo()
{
  window.open('https://drive.google.com/file/d/186qzxpWQsU4LI6HG04HXg7bCLemlusUJ/view?usp=sharing', '_blank').focus();
}

function expediaDemo()
{
  window.open('https://drive.google.com/file/d/186qzxpWQsU4LI6HG04HXg7bCLemlusUJ/view?usp=sharing', '_blank').focus();
}

function nutritionappDemo(){
  window.open('https://drive.google.com/file/d/1mgRK79YEAVChnHMY-WwMth3rwcKyJpaK/view?usp=sharing', '_blank').focus();
}

function glassdoorGit(){
  window.open('https://github.com/kapish33/Glassdoor', '_blank').focus();
}


function expediaGit(){
  window.open('https://github.com/MukulHowale/expedia-clone', '_blank').focus();
}

function nutritionGit(){
  window.open('https://github.com/ShubhamShegokar1/Nutrition-App', '_blank').focus();
}

function gmail()
{
  window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shubhamsandy.1@gmail.com', '_blank').focus();
}

function glassdoorProjectLink(){
  window.open('https://glassdoor-clony.netlify.app/', '_blank').focus();
}

function expediaProjectLink(){
  window.open('https://expedia-clonee.netlify.app/', '_blank').focus();
}



function goToProjects(e) {

  window.location.href="#projects";
  e.preventDefault();
  e.stopPropagation(); 

  }

  

function goToSkills(e) {

  window.location.href="#skills";
  e.preventDefault();
  e.stopPropagation(); 

  }

  

function goToContacts(e) {

  window.location.href="#contacts";
  e.preventDefault();
  e.stopPropagation(); 

  }

  function whatsApp(){
    window.open('https://api.whatsapp.com/send?phone=917774961299', '_blank').focus();
  }

  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

