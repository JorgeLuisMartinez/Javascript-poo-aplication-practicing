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
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div> 
        `;
        productList.append(element);
        this.resetForm();
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if (element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado satisfactoriamente', 'info')
        }

    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Mostrando en el DOM
        const container = document.querySelector('.container'); 
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        // quitar la alerta
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 3000)
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
        if (name === '' || price === '' || year === ''){
            return ui.showMessage('Completa los campos', 'danger')
        }
        ui.addProduct(product);
        ui.showMessage('Producto agregado satisfactoriamente', 'success')
        e.preventDefault();
})
document.getElementById('product-list').addEventListener('click', (e)=>{
    const ui = new UserInterface();
    ui.deleteProduct(e.target);
})