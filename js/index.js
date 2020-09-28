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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const title = document.querySelector('title'); 
title.textContent = 'Great Idea!';

//Header -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

//Nav Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, idx) => {
  link.textContent = siteContent.nav[`nav-item-${idx+1}`];
});

//logo IMG

// const logoIMG = document.querySelector('#logo-img');
// logoIMG.src = siteContent.nav["img-src"];ß
document.querySelector('#logo-img').src = siteContent.nav["img-src"];

//Section CTA -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

const newH1 = document.createElement('h1');
const newerH1 = document.createElement('h1');
const heading1 = document.querySelector('.cta-text h1');
const headingArray = siteContent.cta.h1.split(' ');
//Creat new H1 elements to mimic line breaks in original.html
newerH1.textContent = headingArray[0];
newH1.textContent = headingArray[1];
heading1.textContent = headingArray[2];
//Split Heading into an array and prepend newly created H1s to get line breaks - did not want to mess with inline styling to mess with whitespace. 
heading1.parentElement.prepend(newerH1,newH1);


const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta["img-src"];

//Main Content -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

//Top-Content

const featureH4 = document.querySelector('.text-content h4');
const featureP = document.querySelector('.text-content p');
featureH4.textContent = siteContent["main-content"]["features-h4"];
featureP.textContent = siteContent["main-content"]["features-content"];

//Practice some child selectors I haven't used before 
const productH4 = document.querySelector('.text-content:nth-child(2) h4');
const productP = document.querySelector('.text-content:nth-child(2) p');
productH4.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];

//Middle img

const midIMG = document.querySelector('#middle-img');
midIMG.src = siteContent["main-content"]["middle-img-src"];

//Bottom Content 
// order = services -- product -- vision
const bottomDivH4s = document.querySelectorAll('.bottom-content .text-content h4');

bottomDivH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomDivH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomDivH4s[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomDivPs = document.querySelectorAll('.bottom-content .text-content p');

bottomDivPs[0].textContent = siteContent["main-content"]["services-content"];
bottomDivPs[1].textContent = siteContent["main-content"]["product-content"];
bottomDivPs[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Content -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll('.contact p');
//order = address -- phone # -- email
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

//Footer -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent.footer.copyright;

