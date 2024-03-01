const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



function iniciarAnimacao(elemento) {
    elemento.querySelector(".product-thumb").classList.add("animação");
  }
  
  function pararAnimacao(elemento) {
    elemento.querySelector(".product-thumb").classList.remove("animação");
  }


  function aumentarImagem(elemento) {
    elemento.querySelector(".product-thumb").style.transform = "scale(1.2)";
  }
  
  function restaurarImagem(elemento) {
    elemento.querySelector(".product-thumb").style.transform = "scale(1)";
  }