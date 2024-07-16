// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


            
async function get() {
    let response = await fetch('https://fakestoreapi.com/products');
    let jsonData = await response.json();
        
    console.log(jsonData);
}




get()