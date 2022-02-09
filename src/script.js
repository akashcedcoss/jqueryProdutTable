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
       display(product);
        $('#addSuccess').css('display', 'block');
        $('#message').html('Added');
        $('#addError').css('display', 'none');
       }
       else{
        $('#addError').css('display', 'block');
        $('#addSuccess').css('display', 'none');
    }
       
    //    display(product);
    });
    $('body').on("click", "#editForm", function(){
        $('#Button1').css('display', 'inline');
        $('#Button').css('display', 'none');
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

       
    });
    $('body').on("click", "#deleteForm", function(){
        var pro_id = $(this).data("id");
        alert("Are you sure you want to delete this row with SKU = "+pro_id);
        pro = getProducts(pro_id);
        product.splice(product.indexOf(pro),1);
        display(product);
        $('#addSuccess').css('display', 'block');
        $('#addError').html('deleted')


        

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
    });

    $('.close').click(function(){
        $('#addSuccess').css('display', 'none');
        $('#addError').css('display', 'none');
    });    

    

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
             <td> <a href="#" id = "editForm" data-id='+product[i].pID +' >Edit</a>/ <a href="#" id = "deleteForm" data-id='+product[i].pID +' >Delete</a></td>\
         </tr>';
        }
        $('#table1').html(text);
        
    };

    // $(document).ready(function(){
    //     $("#editForm").click(function(){
    //       $("pID").val(product);
    //     });

    // })
    // return;

    function idValidate(id, product){
        for (var i = 0; i<product.length; i++){
            if (p_sku == product[i].id){
                return false;
            }
        }
        return true;
    }
    
    function checkValues(id, name1, price, quantity){
        if (id == "" || isNaN(id)){
            $('#pID').css('border', 'red 3px solid');
            return false;
        }
        else if(name1 == "" ){
            $('#pName').css('border', 'red 3px solid');
            return false;
        }
        else if(price == "" || isNaN(price)){
            $('#pPrice').css('border', 'red 3px solid');
            return false;
        }
        else if(quantity == "" || isNaN(quantity)){
            $('#pQuantity').css('border', 'red 3px solid');
            return false;
        }
        else{
            return true;
        }
    }

                
        
            
        



    

