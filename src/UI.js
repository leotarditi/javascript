// UI Constructor
export class UI {
  // Add a new Product
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    product.addProduct(element);
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
