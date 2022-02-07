const orderBtn = document.querySelector(".order-btn");
const year = document.querySelector("#year");
const buyBtn = document.querySelector(".ecwid-btn");

const styleBtn = function(){
  buyBtn.classList.add("myBtnStyle");
}

styleBtn();


const getYear = function (){
  const date = new Date();
  const currentYear = date.getFullYear();
  year.innerHTML = currentYear;
}

window.onload = getYear();


orderBtn.addEventListener("click", function(){
  window.location.href="store.html";
})












// const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch('https://app.ecwid.com/api/v3/storeId/carts/cartId', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



// const getCart = async function(){
//     const response = await fetch (`https://app.ecwid.com/api/v3/storeId/carts/cartId`);
//     const cartData = await response.json();
//     console.log(cartData)
// }

// getCart();


// const storeId = 63586878;

// const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch(`https://app.ecwid.com/api/v3/${storeId}/profile?token=${languages}`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// const getStoreProfile = async function(){
//     const res = await fetch(`https://app.ecwid.com/api/v3/${storeId}/profile?token=${languages}`);
//     const storeData = await res.json();
//     console.log(storeData);
// }