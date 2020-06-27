
$(function() {
    let ProductList=$('#product-list')
    fetchProducts(function (products){
         ProductList.empty()
         for(product of products){
            ProductList.append(createProductCard(product))
         }
    })
})