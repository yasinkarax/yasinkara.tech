// portfolio's menu and button variables
let portfolio_menu = document.getElementById('portfolio--menu');
let portfolio_button = document.getElementById('portfolio--button');
let mobile_menu = document.getElementById('mobile--menu');

// mobile menu page links
let navbar_element = document.getElementsByClassName('navbar--element');
let navLent = navbar_element.length;

// mobile menu portfolio page links
let portfolio_element = document.getElementsByClassName('portfolio--element');
let portfolioLent = portfolio_element.length;

// profile menu's variables
let profile = document.getElementById('profile');
let profile_img = document.getElementById('profile--img')
let author = document.getElementById('author');
let social_media_head = document.getElementById('social--media--head');
let social_media = document.getElementById('social--media');

profile.style.height = profile_img.scrollHeight + author.scrollHeight + 'px';
;

// custom height mobile and portfolio's menu
mobile_menu.style.height = "96px";
// portfolio_menu.style.height = "0px";

//desktop  menu items variable
let  desktop_menu_item = document.getElementsByClassName('desktop--menu--item');

let content = document.getElementsByClassName('content');

let content_page = document.getElementById('yy');




// navbar 
window.addEventListener('load', function () {
    for(let i = 0; i <= navLent; i++){
        navbar_element[i].addEventListener('click', function (){

            navbar_element[i].classList.toggle('navbar--element--select');
            // portfolio_element[x].classList.remove('portfolio--element--select');


            //remove left red border when click another menu elements
            /*for(let z = 0; z <= navLent; z++){
                if(z == i){ continue };
                navbar_element[z].classList.remove('navbar--element--select');
                
            }*/
            
            /*remove left red border from portfolio element when 
              click another menu element (home, article)*/
            for(let a = 0; a <= portfolioLent; a++){

               portfolio_element[a].className = 'portfolio--element';
               //portfolio_element[a].classList.remove('navbar--element--select');

            }


        })
    }
})



// portfolio menu inside navbar 
window.addEventListener('load', function () {
    for(let i = 0; i <= portfolioLent; i++){

        portfolio_element[i].addEventListener('click', function (){

            portfolio_element[i].classList.toggle('portfolio--element--select');

            // remove left red border when click another portfolio menu elements
            for(let x = 0; x <= portfolioLent; x++){
                if(x == i){ continue};
                portfolio_element[x].classList.remove('portfolio--element--select');
            }

        })
    }
})




//profile menu function 
function openProfileMenu(icon) {
    if(profile.style.height == profile_img.scrollHeight + author.scrollHeight + "px"){
        profile.style.height =  profile.scrollHeight + social_media_head.scrollHeight + social_media.scrollHeight + "px" ;
        profile.style.transition = '.5s';
        icon.style.transform = 'rotate(360deg)';
    }

    else{
        profile.style.height = profile_img.scrollHeight + author.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';

    }
}



// mobile menu open-close function
function openMobileMenu(icon) {
    if (mobile_menu.style.height == "270px") {
        mobile_menu.style.height = "96px";
        icon.style.transform = "rotate(180deg)";
    }
    else{
        mobile_menu.style.height = "270px";
        // portfolio_menu.style.height = 0;
        icon.style.transform = "rotate(360deg)";
    }

}


/* submenu portfolio  open-close function
function portfolioMenu(){
    portfolio_button.classList.toggle('close--portfolio');

    if(portfolio_menu.style.height == "0px"){
        portfolio_menu.style.height = "120px";
        mobile_menu.style.height = "370px";
    }
    else{
        portfolio_menu.style.height = 0;
        mobile_menu.style.height = "270px";
    }
}
*/


desktop_menu_item = '';
window.addEventListener('load', function (){
    let itemLen = desktop_menu_item.length;
    
    for(let i = 0; i <= itemLen; i++){
        desktop_menu_item[i].addEventListener('click', function (){
            
        })
    }
})


//content page_arrow desktop_menu_item


/* profile col-l-3 will be col-l-2 and 
content side col-l-8 is will be col-l-9

window.addEventListener('resize', function (){
  
  if(window.innerWidth >= 1100){
    profile.classList.remove("col-l-3");
    profile.classList.add("col-l-2");
    
    content_page.classList.remove('col-l-8');
    content_page.classList.add('col-l-9');

  }
  else{
    profile.classList.remove("col-l-2");
    profile.classList.add("col-l-3");

    content_page.classList.remove('col-l-9');
    content_page.classList.add('col-l-8');
  }
})



*/














