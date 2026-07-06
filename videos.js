const slider = document.getElementById("slider");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const cardWidth = 240;


/*=========================================
=      BOTONES DERECHA E IZQUIERDA        =
=========================================*/

next.addEventListener("click", ()=>{

    slider.scrollBy({

        left:cardWidth,

        behavior:"smooth"

    });

});

prev.addEventListener("click", ()=>{

    slider.scrollBy({

        left:-cardWidth,

        behavior:"smooth"

    });

});


/*=========================================
=           DRAG CON EL MOUSE             =
=========================================*/

let isDown = false;

let startX;

let scrollLeft;

slider.addEventListener("mousedown",(e)=>{

    isDown=true;

    startX=e.pageX-slider.offsetLeft;

    scrollLeft=slider.scrollLeft;

});

slider.addEventListener("mouseleave",()=>{

    isDown=false;

});

slider.addEventListener("mouseup",()=>{

    isDown=false;

});

slider.addEventListener("mousemove",(e)=>{

    if(!isDown) return;

    e.preventDefault();

    const x=e.pageX-slider.offsetLeft;

    const walk=(x-startX)*2;

    slider.scrollLeft=scrollLeft-walk;

});