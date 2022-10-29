
// let count 
let shoppingCart;

let addToCart = id => {

// Get the cart object

    const purchaseObj = localStorage.getItem('stored-cart')
    purchaseObj? shoppingCart = JSON.parse(purchaseObj) : shoppingCart = {}


    const item = shoppingCart[id]
    item?shoppingCart[id]++:shoppingCart[id] = 1


    localStorage.setItem("stored-cart",JSON.stringify(shoppingCart))
}


let removeCart = id =>{
    // console.log('button pressed', id);
    const purchaseObj = localStorage.getItem('stored-cart')
    if(purchaseObj){
        shoppingCart = JSON.parse(purchaseObj)
        if (id in shoppingCart){
            // console.log('inside');
            delete shoppingCart[id]
            localStorage.setItem("stored-cart",JSON.stringify(shoppingCart))

        }
    }


}









export {addToCart, removeCart} 