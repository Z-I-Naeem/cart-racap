
let count = null

let addToCart = id => {
    // console.log('item added' , id);
    const item = localStorage.getItem(id)
    // if(item){
    //     console.log(true);
    //     console.log(count++);
    // }else{
    //     count = 1
    // }
    item?count++:count = 1
    // console.log(count);
    localStorage.setItem(id,JSON.stringify(count))
}
export default addToCart