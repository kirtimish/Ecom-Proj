if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', run)
} else {
    run();
}

function run() {
    addtoCartBtn();
    removeCartItemBtn();
}

const opneCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');
var removeFromcartBtn = document.getElementsByClassName('removefromCart');
var addtocartBtn = document.getElementsByClassName('addtoCart');

const cartContainer = document.getElementById('cartContainer');

opneCart.addEventListener('click', () => {
    cartContainer.classList.add("active");
});

closeCart.addEventListener('click', () => {
    cartContainer.classList.remove("active");
});

function removeCartItemBtn() {
    for(var i=0;i<removeFromcartBtn.length;i++){
        var button = removeFromcartBtn[i];
        button.addEventListener('click',(e) => {
            const removingitemTarget = e.target;
            removingitemTarget.parentElement.remove();
            updateCartTotal();
        })
    }
}

function addtoCartBtn() {
    var addtocartbtn = document.getElementsByClassName('addtoCart');
    for(var i=0;i<addtocartbtn.length;i++){
        var btn = addtocartbtn[i];
        btn.addEventListener('click',(event) => {
            var button = event.target;
            var prodItem = button.parentElement;
            var title = prodItem.getElementsByClassName('prod_name')[0].innerText;
            var imgSrc = prodItem.getElementsByClassName('prod_img')[0].src;
            var price = prodItem.getElementsByClassName('prod_price')[0].innerText;
            addtoCart(title,price,imgSrc);
        })
    }
}

function addtoCart(title,price,imgSrc){
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    console.log(cartItems)
    var cartItemcontents = `
    <img id="prod_img" src="${imgSrc}" alt="">
    <h2 id="prod_name">${title}</h2>
    <h3 class="cart-price" class="price">${price}</h3>
    <input type="text" class="cart-quantity-input" name="quantity" id="quantity" value="1">
    <button class="removefromCart">Remove</button> `
cartItem.innerHTML = cartItemcontents;
cartItems.append(cartItem);
cartItem.getElementsByClassName('removefromCart')[0].addEventListener('click', removeCartItemBtn);
cartToastNotification();
}

function updateCartTotal(){
    var cartItemsContainer = document.getElementsByClassName('cart-items');
    var  total = 0;
    for(var i=0;i<cartItemsContainer.length;i++){
        var cartRow = cartItemsContainer[i];
        // console.log(cartRow);
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = quantityElement.value;
        // console.log(price,quantity);
        total = total + (price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = `$` + total;
}

function cartToastNotification() {
    const container = document.getElementById('container');
    const notify = document.createElement('div');
    notify.classList.add("toast");
    notify.innerText = 'Your item has been added to Cart successfully';
    container.appendChild(notify);
    setTimeout(()=> {
        notify.remove();
    },3000)
}
