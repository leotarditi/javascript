import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document.getElementById("product-form")
        .addEventListener("submit", function (e) {
            // Override the default Form behaviour
            e.preventDefault();

            // Getting and Validation Form Values
            const name = document.getElementById("name").value;
            if(name === "") {
                ui.showMessage("Please Insert data in name field", "danger");
            }

            const price = document.getElementById("price").value;
            if(price === "") {
                ui.showMessage("Please Insert data in price field", "danger");
            }

            const year = document.getElementById("year").value;;
            if(year === "") {
                ui.showMessage("Please Insert data in year field", "danger");
            }

            // Create a new Oject Product
            const product = new Product(name, price, year);

            // Create a new UI instance
            const ui = new UI();

            // Save Product
            ui.addProduct(product);
            ui.showMessage("Product Added Successfully", "success");
            ui.resetForm();
        });

document.getElementById("product-list")
        .addEventListener("click", (e) => {
            const ui = new UI();
            ui.deleteProduct(e.target);
            e.preventDefault();
        });
