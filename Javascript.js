var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};


var message = "function disabled";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;

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
  window.open('https://drive.google.com/file/d/1eo_UvGxdSE1dufDOa6UzFy68z2LprEQt/view?usp=sharing', '_blank').focus();
}

function glassdoorDemo()
{
  window.open('https://drive.google.com/file/d/186qzxpWQsU4LI6HG04HXg7bCLemlusUJ/view?usp=sharing', '_blank').focus();
}

function expediaDemo()
{
  window.open('https://drive.google.com/file/d/17lRW52YM80usZl3o66N2RZ8dgct9VFjr/view?usp=sharing', '_blank').focus();
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
  window.open('https://expediaclone.netlify.app/', '_blank').focus();
}

function twitter(){
  window.open('https://twitter.com/ShubhamShegoka5').focus();
}

function git(){
  window.open('https://github.com/ShubhamShegokar1').focus();
}

function hackerRank(){
  window.open('https://www.hackerrank.com/shubhamsandy_1').focus();
}

function linkedIn(){
  window.open('https://www.linkedin.com/in/shubham-shegokar/').focus();
}

function nutritionappLink(){
  window.open('https://nutritionapp.netlify.app/').focus();

}

function goToProjects() {
  window.location.href="#projects";
 
  }

function goToSkills() {
  window.location.href="#skills";
  }

function goToContacts() {
  window.location.href="#contacts";
  }

  function whatsApp(){
    window.open('https://api.whatsapp.com/send?phone=917774961299', '_blank').focus();
  }

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// hamburger.addEventListener("click", mobileMenu);

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

