$(function(){

    let ProductName=$('#ProductName')
    let ProductManufacturer=$('#ProductManufacturer')
    let ProductPrice=$('#ProductPrice')
    
    $('#btnAdd').click(function(){

        addProducts(
            ProductName.val(),
            ProductManufacturer.val(),
            ProductPrice.val(),
            function(addedProduct){
                   window.alert("Added"+addedProduct.name+"to database")
            }
        )
    })
})