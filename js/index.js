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

// funct takes 3 parameters
// 1. state: An vauge Object property from above (header, footer, ect) in the form of a string. So we generally know where to look.
// 2. DOMstring: An html tag / class / id in the form of a string, so we know what we are looking for.
// 3. subString: A specific string to filter out unwanted properties by making sure the property includes the subString.
function lazyAssign(state, DOMstring, subString){
  // gonna store final array of values here
  let propValues = [];
  // grabbing all properties within the targeted property
  let propKeys = Object.keys(siteContent[`${state}`]);
  // slot is what we are looking for
  let slot = d.querySelectorAll(`${DOMstring}`);

  // grab what we are looking for and add it to our final array
  // BUT ONLY IF IT CONTAINS THE SUBSTRING IN IT'S PROPERTIES!
  propKeys.forEach(element => {
    if (element.includes(`${subString}`)){
      propValues.push(siteContent[`${state}`][`${element}`])
    }
  });
  
  //now we assign them to their respectable spots in the DOM thanks to index showing us where they belong
  propValues.forEach((element, index) => {
    slot[index].textContent = element; 
  });
}

// DOMstring is the where we want to put the data in the DOM
// State is the a vague location for out data in the array (header, footer, nav, ect)
// City is a specific location for our data within the vague location (ID or class)
function lazyTxtImg(DOMstring, state, city){
  //subProp contains "src"? 
  if (city.includes(`src`)){
    //DOM Location                          //Array Location
    d.querySelector(`${DOMstring}`).src = siteContent[`${state}`][`${city}`];
  }
  //this must me a <p> element 
  else{
    //DOM Location                                   //Array Location
    d.querySelector(`${DOMstring}`).textContent = siteContent[`${state}`][`${city}`];
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

//make nav green
let navLinks = d.querySelectorAll(`nav a`);
for(element of navLinks){element.style.color = "green"};

//put line breaks in the Header text
d.querySelector(`h1`).innerHTML = "DOM <br> Is <br> Awesome";

//create and add elements to the nav
const nav = d.querySelector('nav');

const post = d.createElement('a');
post.href = '#';
post.textContent = '🙂'
nav.appendChild(post);

const pre = d.createElement('a');
pre.href = '#';
pre.textContent = '🙃';
nav.prepend(pre);


/////////////////////////////////////////////////////////////
///////////////////////// stretch ///////////////////////////
/////////////////////////////////////////////////////////////



// don't spoil the suprise for yourself if you are brave enough to click the button
const dangerZone = d.querySelector("button");

function btnReset(){
  dangerZone.innerHTML = 'DANGER ZONE';
  dangerZone.style.color = 'white';
  dangerZone.style.backgroundColor = 'red';
  dangerZone.style.transition = '300ms';
  dangerZone.style.transform = 'scale(1) rotate(0deg)';
};
btnReset();
  dangerZone.onmouseenter =()=>{
  dangerZone.style.color = 'red';
  dangerZone.style.backgroundColor = 'white';
  dangerZone.innerHTML = '!!!!!!!! ⚠️ !!!!!!!!';
  dangerZone.style.transform = 'scale(1.5) rotate(5deg)';
};



dangerZone.onmouseleave =()=>{btnReset()};

dangerZone.addEventListener('click', warningClick)

function warningClick(event){
  let warn = ('⚠️');

  event.stopImmediatePropagation();
  this.removeEventListener("click", warningClick);
  alert(`${warn.repeat(10)}\nThis is your final warning.\n${warn.repeat(10)}`);
  this.onclick = boom;
}


function boom(){
  const body = d.querySelector('body');
  const headImg = d.querySelector('#cta-img');
  
  new Audio('https://tinyurl.com/y7fwo5mn').play();
  body.style.filter = `invert(1)`;
  body.style.backgroundColor = `black`;
  headImg.style.transition = `20000ms`;
  headImg.style.transitionTimingFunction = 'ease-in-out';
  headImg.src = "img/topgun.gif";
  headImg.style.transform = 'rotate(1000deg) scale(8)';
}