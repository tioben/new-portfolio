document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Função para animar a entrada dos ícones
    function animateIcons() {
        const icons = document.querySelectorAll('.social-icons a i');

        icons.forEach((icon, index) => {
            anime({
                targets: icon,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 2000, // Aumente a duração para 2 segundos
                easing: 'easeOutExpo',
                delay: index * 200 // Atraso para animar cada ícone separadamente
            });
        });
    }

    // Função para animar a entrada dos textos (h1, h2, p)
    function animateTexts() {
        const texts = document.querySelectorAll('.intro-message h1, .intro-message h2, .intro-message p');

        texts.forEach((text, index) => {
            anime({
                targets: text,
                opacity: [0, 1],
                translateX: [-300, 0], // De -300px para a esquerda para 0px
                duration: 2000, // Aumente a duração para 2 segundos
                easing: 'easeOutExpo',
                delay: index * 200 // Atraso para animar cada texto separadamente
            });
        });
    }

    // Função para animar a entrada da foto
    function animatePhoto() {
        const photo = document.querySelector('.intro-image img');

        anime({
            targets: photo,
            opacity: [0, 1],
            translateX: [300, 0], // De 300px para a direita para 0px
            duration: 2000, // Aumente a duração para 2 segundos
            easing: 'easeOutExpo'
        });
    }

    // Chame as funções de animação quando a página é carregada
    window.addEventListener('load', animateIcons);
    window.addEventListener('load', animateTexts);
    window.addEventListener('load', animatePhoto);
});

// Função para simular a digitação do texto no elemento h2 em um loop infinito
function typeText() {
    const h2 = document.getElementById("typing-text");
    const text = "DESENVOLVEDOR FRONT-END";

    function type() {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                h2.textContent = text.slice(0, currentIndex) + '|';
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(erase, 1000);
            }
        }, 100);
    }

    function erase() {
        let currentIndex = text.length;
        const erasingInterval = setInterval(() => {
            if (currentIndex >= 0) {
                h2.textContent = text.slice(0, currentIndex) + '|';
                currentIndex--;
            } else {
                clearInterval(erasingInterval);
                setTimeout(type, 1000);
            }
        }, 100);
    }

    type();
}

// Chame a função de digitação quando a página estiver totalmente carregada
window.addEventListener('load', typeText);

const secaoOculta = document.getElementById('secaoOculta');

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let opacity = 0;
    const interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function fadeOut(element) {
    let opacity = 1;

    const interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            element.style.display = 'none';
            clearInterval(interval);
        }
    }, 50);
}

const btnSaibaMais = document.getElementById('btnSaibaMais');

btnSaibaMais.addEventListener('click', function(event) {
    event.preventDefault();

    if (secaoOculta.style.display === 'none' || !secaoOculta.style.display) {
        fadeIn(secaoOculta);
        btnSaibaMais.textContent = 'Fechar';
    } else {
        fadeOut(secaoOculta);
        btnSaibaMais.textContent = 'Leia mais';
    }
});

const imagens = [
    "img/COR-1.png",
    "img/COR-2.png",
    "img/COR-3.png",
    "img/COR-4.png",
    "img/COR-5.png",
    "img/COR-6.png"
  ];
  
  let indice = 0;
  
  const imagem = document.getElementById("imagem");
  
  imagem.addEventListener("click", function () {
    indice = (indice + 1) % imagens.length;
    imagem.src = imagens[indice];
  });
  