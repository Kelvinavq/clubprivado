const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();



// categorias

let = tabs = document.querySelectorAll(".tabs_toggle"),
contents = document.querySelectorAll(".tabs_content");

tabs.forEach((tab, index) => {

    tab.addEventListener('click', () =>{
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });

        tabs.forEach((tab) =>{
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');

    });
});





// categorias carrusel

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}


// carrusel instagram 1

const carrusel_dos = document.querySelector(".carrusel-items-dos");

let maxScrollLeft2 = carrusel_dos.scrollWidth - carrusel_dos.clientWidth;
let intervalo2 = null;
let step2 = 1;
const start2 = () => {
  intervalo2 = setInterval(function () {
    carrusel_dos.scrollLeft = carrusel_dos.scrollLeft + step2;
    if (carrusel_dos.scrollLeft === maxScrollLeft2) {
      step2 = step2 * -1;
    } else if (carrusel_dos.scrollLeft === 0) {
      step2 = step2 * -1;
    }
  }, 10);
};

const stop2 = () => {
  clearInterval(intervalo2);
};

carrusel_dos.addEventListener("mouseover", () => {
  stop2();
});

carrusel_dos.addEventListener("mouseout", () => {
  start2();
});

start2();

// carrusel instagram 2

const carrusel_tres = document.querySelector(".carrusel-items-tres");

let maxScrollLeft3 = carrusel_tres.scrollWidth - carrusel_tres.clientWidth;
let intervalo3 = null;
let step3 = 1;
const start3 = () => {

  intervalo3 = setInterval(function () {
    // carrusel_tres.scrollLeft = carrusel_tres.scrollLeft + step3;

    carrusel_tres.scrollLeft += step3;


    if (carrusel_tres.scrollLeft === maxScrollLeft3) {
      step3 = step3 * -1;
    } else if (carrusel_tres.scrollLeft === 0) {
      step3 = step3 * -1;
    }
    
  }, 10);
};

const stop3 = () => {
  clearInterval(intervalo3);
};

carrusel_tres.addEventListener("mouseover", () => {
  stop3();
});

carrusel_tres.addEventListener("mouseout", () => {
  start3();
});

start3();