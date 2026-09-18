
var products = document.querySelectorAll(".card");

products.forEach((prod) => {
  let plusBtn = prod.querySelector(".fa-plus-circle");
  let minusBtn = prod.querySelector(".fa-minus-circle");
  let trashBtn = prod.querySelector(".fa-trash-alt");
  let likeBtn = prod.querySelector(".fa-heart");
  let quantity = prod.querySelector(".quantity");

  plusBtn.addEventListener("click", function () {
    let q = parseInt(quantity.textContent);
    q++;
    quantity.innerHTML = q;
    priceUpdate();
  });

  minusBtn.addEventListener("click", function () {
    let q = parseInt(quantity.textContent);
    if (q > 0) {
      q--;
    }
    quantity.innerHTML = q;
    priceUpdate();
  });

  trashBtn.addEventListener("click", function () {
    prod.parentElement.removeChild(prod);
    priceUpdate();
  });

  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("liked");
  });
});

function priceUpdate() {
  let total = 0;
  let prods = document.querySelectorAll(".card");
  for (let i = 0; i < prods.length; i++) {
    let unitPrice = parseInt(
      prods[i].querySelector(".unit-price").textContent.replace("$", "")
    );
    let quantity = parseInt(prods[i].querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  }
  document.querySelector(".total").innerHTML = total + " $";
}