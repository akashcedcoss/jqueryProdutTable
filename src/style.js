var product=[];
function addProduct(){
    var id = document.getElementById('pID').value;
    var name1 = document.getElementById('pName').value;
    var price = document.getElementById('pPrice').value;
    var quantity = document.getElementById('pQuantity').value;
    checkValue(id, name1, price, quantity);
    display(product);
}
function checkValue(id , name1 , price, quantity){
    for(var i = 0;i<product.length;i++){
        console.log(product[i]);
        if (product[i].pID == id)
            {
                     alert("Product ID already exists or Invalid Input");
                 return false;
            }
    }
    obj= {};
    obj['pID'] = id;
    obj['pName'] = name1;
    obj['pPrice'] = price;
    obj['pQuantity'] = quantity;
    product.push(obj);
}
function display(result){
var text = document.getElementById('table1');
text.innerHTML = "<tr>\
     <td>SKU</td>\
     <td>Product Name</td>\
     <td>Product Price</td>\
     <td>Product Quantity</td>\
     <td>Action</td>\
    </tr>";
    for(let i =0; i<result.length;i++){
        text.innerHTML+='<tr>\
         <td>' + result[i].pID + '</td>\
         <td>' + result[i].pName + '</td>\
         <td>' + result[i].pPrice + '</td>\
         <td>' + result[i].pQuantity + '</td>\
         <td> <a href="#" onclick = editForm('+ pID +')>Edit</a><a href="#" onclick = deleteForm('+ pID +')>Delete</a></td>\
     </tr>';
    }
    
}

function editForm(pId){
    $(document).ready(function(){
        $("#pID").click(function(){
          $(".text-field").val(pId);
        });

    })
    return;
    
};