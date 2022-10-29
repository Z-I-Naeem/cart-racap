
// let count 

let addToCart = id => {
    let shoppingCart;

// Get the cart object

    const purchaseObj = localStorage.getItem('stored-cart')
    purchaseObj? shoppingCart = JSON.parse(purchaseObj) : shoppingCart = {}


    const item = shoppingCart[id]
    item?shoppingCart[id]++:shoppingCart[id] = 1


    localStorage.setItem("stored-cart",JSON.stringify(shoppingCart))
}
export default addToCart