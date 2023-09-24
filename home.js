document.addEventListener('DOMContentLoaded', () => {
    // Obtém a referência para o container de gaming
    const gamingContainer = document.querySelector('.header'); // Alterado para .header

    // Obtém a referência para a lista de notícias
    const newsList = document.querySelector('.news-list');

    // Adiciona um event listener para o evento de hover no container
    gamingContainer.addEventListener('mouseenter', () => {
        newsList.style.display = 'block';
    });

    // Adiciona um event listener para o evento de sair do hover no container
    gamingContainer.addEventListener('mouseleave', () => {
        newsList.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const myButton1 = document.querySelector("#myButton1");
    myButton1.addEventListener("click", () => window.open("https://www.amazon.es/Logitech-SUPERLIGHT-Inal%C3%A1mbrico-Ultraligero-Programables/dp/B07W5JKPJX/ref=sr_1_1?keywords=logitech+g+pro+x+superlight&sr=8-1"));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const myButton1 = document.querySelector("#myButton2");
    myButton1.addEventListener("click", () => window.open("https://www.amazon.es/-/pt/dp/B07W6JNQ82/ref=sr_1_1?keywords=Logitech+G+Pro+X+Keyboard&sr=8-1"));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const myButton1 = document.querySelector("#myButton2");
    myButton1.addEventListener("click", () => window.open(" https://www.amazon.es/-/pt/dp/B0C3BV19Q3/ref=sr_1_17?keywords=hyperx+cloudx+3&sr=8-17"));
  });





