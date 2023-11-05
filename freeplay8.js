  
  
  
  
  
  
  // JavaScript ile sepetin kontrolü
  let cartItems = [];

  function addToCart(product) {
    if (cartItems.includes(product)) {
      console.log("Bu ürün zaten sepete eklenmiş.");
    } else {
      cartItems.push(product);
      console.log("Ürün sepete başarıyla eklendi.");
      updateCart();
    }
  }

  function updateCart() {
    let cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    for (let i = 0; i < cartItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = cartItems[i];
      cartList.appendChild(listItem);
    }
  }

  // Olay dinleyicisi ekleme
  let addToCartButtons = document.getElementsByClassName("addToCartButton");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
      let productName = this.parentNode.querySelector("h2").textContent;
      addToCart(productName);
    });
  }
 
 
 
 
 
 
 
 
 /*
 // JavaScript ile sepetin kontrolü
 let cartItems = [];

 function addToCart(product) {
   if (cartItems.includes(product)) {
     console.log("Bu ürün zaten sepete eklenmiş.");
   } else {
     cartItems.push(product);
     console.log("Ürün sepete başarıyla eklendi.");
     updateCart();
   }
 }

 function updateCart() {
   let cartList = document.getElementById("cartItems");
   cartList.innerHTML = "";
   for (let i = 0; i < cartItems.length; i++) {
     let listItem = document.createElement("li");
     listItem.textContent = cartItems[i];
     cartList.appendChild(listItem);
   }
 }
 */