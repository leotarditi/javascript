// Product Constructor
export class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

    addProduct(element) {
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${this.name} -
                    <strong>Price</strong>: ${this.price} - 
                    <strong>Year</strong>: ${this.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    }
}