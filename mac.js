//Declare memory variable
const extraMemory8gb = document.getElementById('memory-8gb');
const extraMemory16gb = document.getElementById('memory-16gb');

//Declare storage variable
const extraStorage256gb = document.getElementById('storage-256gb');
const extraStorage512gb = document.getElementById('storage-512gb');
const extraStorage1tb = document.getElementById('storage-1tb');

//Declare delivery charge variable
const freeDelivery = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('charge-delivery');

//Declare extra variable
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const extraDeliveryCharge = document.getElementById('extra-charge');
const bestPrice = document.getElementById('best-price');

//Declare total variable
const totalPrice = document.getElementById('total-price');
const allTotalPrice = document.getElementById('all-total-price');

//memory add event listener
extraMemory8gb.addEventListener('click',function(){
    extraMemory.innerText = "0";
    updateTotal()
})
extraMemory16gb.addEventListener('click',function(){
    extraMemory.innerText = "180";
    updateTotal()
})

//storage add event listener
extraStorage256gb.addEventListener('click',function(){
    extraStorage.innerText = "0";
    updateTotal()
})
extraStorage512gb.addEventListener('click',function(){
    extraStorage.innerText = "100";
    updateTotal()
})
extraStorage1tb.addEventListener('click',function(){
    extraStorage.innerText = "180";
    updateTotal()
})

//delivery add event listener
freeDelivery.addEventListener('click',function(){
    extraDeliveryCharge.innerText = "0";
    updateTotal()
})
deliveryCharge.addEventListener('click',function(){
    extraDeliveryCharge.innerText = "20";
    updateTotal()
})

// update total function
function updateTotal(){
    // total price
    totalPrice.innerText = 1299+parseInt(extraMemory.innerText)+parseInt(extraStorage.innerText)+
    parseInt(extraDeliveryCharge.innerText);

    //all total price
    allTotalPrice.innerText=totalPrice.innerText;
    
    
}

// promo code section

document.getElementById('promo-code-submit').addEventListener('click', function () {
    
    // promo Code Input
    const promoCode = document.getElementById('promo-code').value;
    
    // promo code div
    const promoCodeDiv = document.getElementById('promo-code-div')

    //all total price
    const allTotal = allTotalPrice.innerText;

    if (promoCode == 'stevekaku') {
        discountTotal = (allTotal*20)/100;
        discount = allTotal-discountTotal;
        allTotalPrice.innerText = discount;
        promoCodeDiv.style.display= 'none';
    }
    else {
        alert('Please Enter correct Promo code');
    }
})

