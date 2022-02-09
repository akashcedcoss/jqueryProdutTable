var product=[];
flag = 1;
$(document).ready(function(){
    $('#Button').click(function(){
       var id = $('#pID').val();
       var name1 = $('#pName').val();
       var price = $('#pPrice').val();
       var quantity = $('#pQuantity').val();
       console.log(id);
       console.log(name1);
       console.log(price);
       console.log(quantity);
       var productDetails = getArray(id, name1, price, quantity);
       if(flag == 1){
       product.push(productDetails);
       }
       
       display(product);
    });
    $('body').on("click", "#editForm", function(){
       var pro_id = $(this).data("id");
        pro = getProducts(pro_id);
    // We can also access by passing all data id of products separetely
    
    // ---------------------------------------------------------------------
    //    $('#pName').val($(this).data("name1"));
    //    $('#pPrice').val($(this).data("price"));
    //    $('#pQuantity').val($(this).data("quantity"));

    //-----------------------------------------------------------------------------

       $('#pID').val(pro.pID);
       $('#pName').val(pro.pName);
       $('#pPrice').val(pro.pPrice);
       $('#pQuantity').val(pro.pQuantity);

        console.log(p_id);
    });

    $('#Button1').click(function(){
        var update_sku = $('#pID').val();
        var update_name = $('#pName').val();
        var update_price = $('#pPrice').val();
        var update_quantity = $('#pQuantity').val();
        var temp = getProducts(update_sku);
        temp.pName = update_name;
        temp.pPrice = update_price;
        temp.pQuantity = update_quantity;
        display(product);
    })

});



function getProducts(pr_id){
    for(var i = 0; i < product.length; i++){
        if(pr_id == product[i].pID){
            return product[i];
        }
    }
}


function getArray(id, name1, price, quantity){
    if(id == "" || name1 == "" || price == "" || quantity == ""){
        flag = 0;
        alert("Wrong Input");
        return;
    }else{
        flag = 1;
    return{
        'pID' : id,
        'pName' : name1,
        'pPrice' : price,
        'pQuantity' : quantity
    };
}
}

function display(product){
    var text = "<tr>\
    <td>SKU</td>\
    <td>Product Name</td>\
    <td>Product Price</td>\
    <td>Product Quantity</td>\
    <td>Action</td>\
   </tr>";

    
        for(var i =0; i<product.length;i++){
            text +='<tr>\
             <td>' + product[i].pID + '</td>\
             <td>' + product[i].pName + '</td>\
             <td>' + product[i].pPrice + '</td>\
             <td>' + product[i].pQuantity + '</td>\
             <td> <a href="#" id = "editForm" data-id='+product[i].pID +' >Edit</a></td>\
         </tr>';
        }
        $('#table1').html(text);
        
    }

    // $(document).ready(function(){
    //     $("#editForm").click(function(){
    //       $("pID").val(product);
    //     });

    // })
    // return;

    
;
                
        
            
        



    

