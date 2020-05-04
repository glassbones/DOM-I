const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let d = document;

function lazyAssign(targetProp, slotString, subString){
  
  let propValues = [];
  let propKeys = Object.keys(siteContent[`${targetProp}`]);
  let slot = d.querySelectorAll(`${slotString}`);

  propKeys.forEach(element => {
    if (element.includes(`${subString}`)){
      propValues.push(siteContent[`${targetProp}`][`${element}`])
    }
  });
    
  propValues.forEach((element, index) => {
    slot[index].textContent = element; 
  });
}

function lazyTxtImg(slotString, mainProp, subProp){
  if (subProp.includes(`src`)){
    d.querySelector(`${slotString}`).src = siteContent[`${mainProp}`][`${subProp}`];
  }
  else{
    d.querySelector(`${slotString}`).textContent = siteContent[`${mainProp}`][`${subProp}`];
  }
}

lazyAssign("nav","a","nav-item");
lazyAssign("main-content",".main-content h4",'h4');
lazyAssign("main-content",".main-content p",'content');
lazyAssign("contact",".contact h4",'h4');
lazyAssign("contact",".contact p",'e');

lazyTxtImg("#logo-img", "nav", "img-src");
lazyTxtImg("#cta-img", "cta" ,"img-src");
lazyTxtImg("#middle-img", "main-content", "middle-img-src");
lazyTxtImg("h1", "cta", "h1");
lazyTxtImg(".cta-text button", "cta", "button");
lazyTxtImg("footer p", "footer", "copyright");


let navLinks = d.querySelectorAll(`nav a`);
for(element of navLinks){element.style.color = "green"};
d.querySelector(`h1`).style.border = "solid red";
d.querySelector(`h1`).innerHTML = "DOM <br> Is <br> Awesome";


const nav = document.querySelector('nav');

const post = document.createElement('a');
post.href = '#';
post.textContent = '🙂'
nav.appendChild(post);

const pre = document.createElement('a')
pre.href = '#';
pre.textContent = '🙃';
nav.prepend(pre);







/*
let mcH4Txt = [];
let mcKeys = Object.keys(siteContent["main-content"]);
let mcH4Slot = d.querySelectorAll(".main-content h4");
console.log(mcH4Slot);

mcKeys.forEach(element => {
if (element.includes('h4')){
  mcH4Txt.push(siteContent["main-content"][`${element}`])}
});

mcH4Txt.forEach((element, index) => {
  mcH4Slot[index].textContent = element; 
});
*/

