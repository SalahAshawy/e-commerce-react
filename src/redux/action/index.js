//Adding item into my cart
export const addCart=(product)=>{
    return{
    type: "ADDITEM",
    payload: product   
   }
  // console.log(product.id);
}
//REMOVING item into my cart
export const delCart=(product)=>{
    return{
    type: "DELITEM",
    payload: product   
   }
}
