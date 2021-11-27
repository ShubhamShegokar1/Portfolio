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
  window.location="https://drive.google.com/file/d/1wVpD4JB9fk6_yE1jc1Ibgzy4shzP7hXt/view?usp=sharing"
}

function glassdoorDemo()
{
  window.location="https://drive.google.com/file/d/186qzxpWQsU4LI6HG04HXg7bCLemlusUJ/view?usp=sharing"
}

function expediaDemo()
{
  window.location="https://drive.google.com/file/d/186qzxpWQsU4LI6HG04HXg7bCLemlusUJ/view?usp=sharing"  
}

function nutritionappDemo(){
  window.location="https://drive.google.com/file/d/1mgRK79YEAVChnHMY-WwMth3rwcKyJpaK/view?usp=sharing"  
}

function glassdoorGit(){
  window.location="https://github.com/kapish33/Glassdoor"
}


function expediaGit(){
  window.location="https://github.com/MukulHowale/expedia-clone"
}

function nutritionGit(){
  window.location="https://github.com/ShubhamShegokar1/Nutrition-App"
}

function gmail()
{
  window.location="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shubhamsandy.1@gmail.com"
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
    window.location="https://api.whatsapp.com/send?phone=917774961299"
  }