let json = [];
fetch('./data/products.json').then(response => {
    return json = response.json();
}).then(products => {
    let same = [];
    let sameNumber = [];
    for (let index = 0; index < 4; index++) {
        const rando = Math.floor(Math.random() * products.length)
        if (sameNumber.forEach(number => {
            if (number = rando) {
                return false;
            }
        }) != false){
            same.push(products[rando])
            sameNumber.push(rando)
        }else{
            index--;
        }
};
})

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



// cta

document.getElementById('cta-btn').addEventListener('click', cta)

/**
 * When Call To Action is clicked, add to card and remove event listener
 * @param {event} event the click event
 */
function cta(event) {
    let cart = parseInt(document.getElementById('cart-nb').textContent) + parseInt(document.getElementById('nbrAdd').value);
    if (cart > 99) cart = '99+'
    document.getElementById('cart-nb').textContent = cart;
    event.target.textContent = "Déjà au panier";
    event.target.classList.add('add-cta-clicked');
    event.target.removeEventListener('click', cta);
}



// accordeon

if (localStorage.getItem('avHiden') == 'true') {
    document.getElementById('ava').classList.add('closed');
    document.getElementById('ava-acc').classList.add('hide');
}
if (localStorage.getItem('carHiden') == 'true') {
    document.getElementById('cara').classList.add('closed');
    document.getElementById('cara-acc').classList.add('hide');

}
document.getElementById('accordeon').addEventListener('click', event => {
    if (!event.target.classList.contains('js-accordeon-ttl')) return;
    event.target.classList.toggle('closed');
    event.target.parentNode.lastElementChild.classList.toggle('hide');
    if (event.target.classList.contains('js-av')) {
        if (event.target.parentNode.lastElementChild.classList.contains('hide')) {
            localStorage.setItem("avHiden", true);
        }
        else localStorage.setItem("avHiden", false);
    }
    else if (event.target.parentNode.lastElementChild.classList.contains('hide')) {
        localStorage.setItem("carHiden", true);
    }
    else localStorage.setItem("carHiden", false);
})


// similar product
let similarLi = 1;
document.getElementById('similar').addEventListener('click', event => {
    if (!(event.target.classList.contains('js-prev') || event.target.classList.contains('js-next'))) return;
    if (event.target.classList.contains('js-prev')) {
        document.getElementById(`similar-${similarLi}`).classList.toggle('mob-hidden');
        similarLi--;
        document.getElementById(`similar-${similarLi}`).classList.toggle('mob-hidden');
    } else {
        document.getElementById(`similar-${similarLi}`).classList.toggle('mob-hidden');
        similarLi++;
        document.getElementById(`similar-${similarLi}`).classList.toggle('mob-hidden');
    }
    hideOrNotHide(similarLi);
    ;
})


/**
 * Play Hide and Seek with the beautifull button : if 2 or 3 show, else hide one
 * @param {number} similarLi 
 */
function hideOrNotHide(similarLi) {
    if (similarLi > 1) {
        document.querySelector('#similar .js-prev').classList.remove('hide');
    }
    else {
        document.querySelector('#similar .js-prev').classList.add('hide');
    }
    if (similarLi < 4) {
        document.querySelector('#similar .js-next').classList.remove('hide');
    }
    else {
        document.querySelector('#similar .js-next').classList.add('hide');
    }
}
