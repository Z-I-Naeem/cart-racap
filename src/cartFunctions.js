
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

// let reduceToCart = id => {
//     console.log('button pressed');

//     const purchaseObj = localStorage.getItem('stored-cart')
    
//     if(purchaseObj){
//         shoppingCart = JSON.parse(purchaseObj)
//         console.log('entered function');
//         console.log(shoppingCart);
//     }
//     let reduceItem = shoppingCart[id]
//         console.log(reduceItem);
//         // reduceitem < 1? removeCart(id): reduceitem--
//         if(reduceItem < 1){
//             console.log('function called');
//             removeCart(id)
//         }else{
//             console.log('item reduced');
//             reduceItem--
//             console.log('last value',reduceItem);
//             localStorage.setItem("stored-cart",JSON.stringify(shoppingCart))
//         }
//         console.log(shoppingCart);



// }



let reduceToCart = id => {

    // Get the cart object
    
        const purchaseObj = localStorage.getItem('stored-cart')
        purchaseObj? shoppingCart = JSON.parse(purchaseObj) : shoppingCart = {}
    
    
        const item = shoppingCart[id]
        item?shoppingCart[id]--:shoppingCart[id] = 0
        if(shoppingCart[id] === 0){
            removeCart(id)
        }
    
    
        localStorage.setItem("stored-cart",JSON.stringify(shoppingCart))
    }








export {addToCart, removeCart, reduceToCart} 