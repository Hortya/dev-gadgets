document.querySelectorAll('.js-thumbs-img').forEach(img => {
    img.addEventListener('pointerenter', event => {
        document.getElementById('big-picture').src = event.target.src.replace('-s.png', '-l.png');
    })
})

document.getElementById('pictures').addEventListener('click', event => {
    if (!(event.target.classList.contains('js-prev') || event.target.classList.contains('js-next'))) return;
    const src = document.getElementById('big-picture').src
    const strNum = src.search(/-[0-9]-l/gm);
    let i = Math.abs(parseInt(src[strNum + 1]));
    if (event.target.classList.contains('js-prev')) {
        i--;
        if (i <= 0) i = document.getElementById('thumbs').childElementCount;
    }
    else {
        i++;
        if (i > document.getElementById('thumbs').childElementCount) i = 1;
    }
    document.getElementById('big-picture').src = document.getElementById('big-picture').src.replace(/-[0-9]-l/, `-${i}-l`);
})




document.getElementById('cta-btn').addEventListener('click', cta)


function cta(event) {
    let cart = parseInt(document.getElementById('cart-nb').textContent) + parseInt(document.getElementById('nbrAdd').value);
    if (cart > 99) cart = '99+'
    document.getElementById('cart-nb').textContent = cart;
    event.target.textContent = "Déjà au panier";
    event.target.style.backgroundColor = '#000';
    event.target.removeEventListener('click', cta);
}

document.getElementById('accordeon').addEventListener('click', event => {
    if (!event.target.classList.contains('js-accordeon-ttl')) return;
    event.target.classList.toggle('closed');
    event.target.parentNode.lastElementChild.classList.toggle('hide');
})

