fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".discounted").textContent = product.discount;

  if (product.soldout) {
    //produktet er udsolgt
    // copy.querySelector("main").appendChild(copy);
    console.log("hello");
    //append
  }
  document.querySelector("main").appendChild(copy);
}
/* <template id="smallProductTemplate">
  <article class="product">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="shirt" />

    <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
    <h3 class="subtle">Tshirts | Nike</h3>
    <h2 class="price">
      {" "}
      <span>Prev</span> DKK 895,-
    </h2>
    <div class="discounted">
      <p>Now DKK 1569,-</p>
      <p>-34%</p>
    </div>
    <a href="product.html">Read More</a>
  </article>
</template>; */

// id	1165
// gender	"Men"
// category	"Apparel"
// subcategory	"Topwear"
// articletype	"Tshirts"
// season	"Summer"
// productionyear	2013
// usagetype	"Sports"
// productdisplayname	"Mean Team India Cricket Jersey"
// price	2495
// discount	45
// brandname	"Nike"
// soldout	0
