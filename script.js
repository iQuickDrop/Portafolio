// ===============================
// PARTICULAS ROJAS OPTIMIZADAS
// ===============================

const canvas = document.getElementById("particles");

if (canvas) {

const ctx = canvas.getContext("2d");

let particulas = [];

function ajustarCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

ajustarCanvas();


class Particula{

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speed = Math.random() * 0.5 + 0.2;

        this.opacity = Math.random() * 0.7 + 0.2;

    }


    update(){

        this.y -= this.speed;


        if(this.y < -10){

            this.y = canvas.height + 10;
            this.x = Math.random() * canvas.width;

        }

    }


    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
        `rgba(255,0,0,${this.opacity})`;


        ctx.fill();

    }

}



for(let i = 0; i < 45; i++){

    particulas.push(
        new Particula()
    );

}



function animarParticulas(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particulas.forEach(p=>{

        p.update();
        p.draw();

    });


    requestAnimationFrame(
        animarParticulas
    );

}


animarParticulas();



window.addEventListener(
"resize",
ajustarCanvas
);


}



// ===============================
// ANIMACIONES SCROLL
// ===============================


const elementos =
document.querySelectorAll(
".card, .box, .skills span"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}


});


},
{
threshold:.15
}
);



elementos.forEach((elemento,index)=>{


elemento.style.transitionDelay =
`${index * 0.08}s`;


observer.observe(elemento);


});




// ===============================
// SCROLL SUAVE
// ===============================


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener(
"click",
e=>{


e.preventDefault();


const destino =
document.querySelector(
link.getAttribute("href")
);



if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}


});


});




// ===============================
// ESCRITURA DEL TITULO FIX
// ===============================


const titulo =
document.querySelector(".hero h1");



if(titulo){


const texto =
"Hola, soy ";



const nombre =
"iQuickDrop_";



titulo.innerHTML="";



let i=0;



function escribirTitulo(){


if(i < texto.length){


titulo.innerHTML +=
texto.charAt(i);


i++;

setTimeout(
escribirTitulo,
70
);


}else{


titulo.innerHTML +=
`<span>${nombre}</span>`;


}


}



escribirTitulo();


}




// ===============================
// GLOW DEL MOUSE OPTIMIZADO
// ===============================


const glow =
document.querySelector(
".cursor-glow"
);



if(glow){


document.addEventListener(
"mousemove",
(e)=>{


glow.style.transform =
`translate(
${e.clientX - 150}px,
${e.clientY - 150}px
)`;


});


}




// ===============================
// EFECTO 3D CARDS SIN BUG
// ===============================


document.querySelectorAll(".card")
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;


const rotateY =
((x / rect.width)-0.5)*10;


const rotateX =
((y / rect.height)-0.5)*-10;



card.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});




// ===============================
// AÑO AUTOMATICO
// ===============================


const footer =
document.querySelector(
"#contact p:last-child"
);



if(footer){

footer.textContent =
"© " +
new Date().getFullYear() +
" iQuickDrop_";

}
