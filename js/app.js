

 // Global Variables
 const ul = document.getElementById('navbar__list');
 const sections = document.querySelectorAll('.section');
 const anchor = document.getElementsByClassName('menu__link');
 const active   = document.getElementsByClassName('active');
 const activeSection   = document.getElementsByClassName('active-section');
 const toTop = document.querySelector('.top');
 const add = document.querySelector('.add');


// creat observer to detect section that is in viewport
let options = {
    root: null,
    rootMargin: "0px",
    threshold:.80
  };

const observer = new IntersectionObserver((entries , observer)=>{

        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return; 
            }
            addActive(entry.target);
          });

},options)


 // add section form button
add.addEventListener('click',addSection);

// creat links of existing sections
sections.forEach(section=>{creatMenu(section)})


// init of active state
if(window.scrollY == 0){
    sections[0].classList.add('active-section');
    anchor[0].classList.add('active');
}

//to top
window.addEventListener('scroll',()=>{
    if(window.scrollY > 500){
        toTop.style.opacity = 1;
    }
    else{
        toTop.style.opacity = 0;
    }
})

toTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
})



//////////// all app functions

// add active state to section and link function

function addActive(section){
    if(activeSection[0]){
        activeSection[0].classList.remove('active-section');
    }
    section.classList.toggle('active-section')


    const id = section.getAttribute('id');
    if(active[0]){
        active[0].classList.remove('active');
    }
    document.querySelector(`[href="#${id}"]`).classList.add('active');
}



// add new section function
function addSection(){
    let counter = document.querySelectorAll('.section').length;
    const txt = sections[0].querySelector("p").innerText
    const section = createElement('section' , {id:`section${counter+1}` , dataNav:`section ${counter+1}` , class:'section'});
    const div  = createElement('div' , {class:'landing__container'});
    const h2 = createElement('h2',null , `section ${counter+1}`);
    const p = createElement('p', null , txt);
    const main = document.querySelector('main')

    
    section.appendChild(div);
    div.appendChild(h2)
    div.appendChild(p)
    main.appendChild(section);

    creatMenu(section)
   
}



// creat menu links function
function creatMenu(section){
    const href = section.getAttribute('id');
    const title = section.getAttribute('dataNav');

    const li = createElement('li');
    const a = createElement('a', {href:`#${href}`,class:'menu__link'} , title );

    li.appendChild(a)
    ul.appendChild(li);
    observer.observe(section);

}




// creat element function
function createElement(tag ,attribute , text){
    const element = document.createElement(tag);

    if(attribute){
        const attributeName = Object.keys(attribute);
        attributeName.forEach(name =>{
            element.setAttribute(name , attribute[name]);
        })}

   if(text){element.append(text);}

   return element;
}
