class Product {
    // Propiedades del producto
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    // Metodos
}
class UserInterface {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>Year</strong>: ${product.year}
                </div>
            </div> 
        `;
        productList.append(element);
    }
    deleteProduct(){

    }
    showMessage(){

    }
}

//Eventos DOM
document.getElementById('product-form')
    .addEventListener('submit', (e)=>{
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        console.log(name,price,year);
        
        const product = new Product(name,price,year)

        const ui = new UserInterface();
        ui.addProduct(product);


        e.preventDefault();
})