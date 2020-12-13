(() => {
  const IMAGE = document.getElementById('image');
  const NAME = document.getElementById('name');
  const PRICE = document.getElementById('price');

  const MAGURO = document.getElementById('maguro');
  MAGURO.addEventListener('click', () => {
    IMAGE.setAttribute('src', 'IMG_8781.JPG');
    NAME.textContent = 'マグロ';
    PRICE.textContent = '100円';
    IMAGE.className = 'size';
  });

  const MAKIMONO = document.getElementById('makimono');
  MAKIMONO.addEventListener('click', () => {
    IMAGE.setAttribute('src', 'IMG_8784.JPG');
    NAME.textContent = '巻物';
    PRICE.textContent = '100円';
    IMAGE.className = 'size';
  });

  const IKURA = document.getElementById('ikura');
  IKURA.addEventListener('click', () => {
    IMAGE.setAttribute('src', 'IMG_8783.JPG');
    NAME.textContent = 'いくら';
    PRICE.textContent = '100円';
    IMAGE.className = 'size';
  });

  const TAMAGO = document.getElementById('tamago');
  TAMAGO.addEventListener('click', () => {
    IMAGE.setAttribute('src', 'IMG_8782.JPG');
    NAME.textContent = 'たまご';
    PRICE.textContent = '100円';
    IMAGE.className = 'size';
  });


  const CART = document.getElementById('cart');

  const CARTLIST = document.getElementById('cartlist');

  const CANCEL = document.getElementById('cancel');

  const KINGAKU = document.getElementById('kingaku');


  CART.addEventListener('click', () => {
    const Li = `<li>${NAME.textContent}</li>`;
    CARTLIST.insertAdjacentHTML('beforeend', Li);
  });

  CANCEL.addEventListener('click', () => {
    CARTLIST.removeChild(CARTLIST.lastChild);
  });


})();
