import { IProduct } from "../interface/product";

class ProductManager {
  products: IProduct[];

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }


  checkProduct(product: Iproduct) {
    return !!product.title && !!product.description && !!product.price  && !!product.code && !!product.stock; 
  }

  addProduct(product: Iproduct) {
    if (this.checkProduct(product) && !this.products.find(p => p.code === product.code)) {
      this.products.push({ ...product, id: this.products.length + 1 });
      return console.log(`Product added: ${product.title}`)
    } else {
      return console.log(`Product not added: ${product.title}`)
    }
  }

  getProductById(id: number) {
    const findById = this.products.find(p => p.id === id);

    if (findById) return findById;
    else return console.log(`Product not found with id: ${id}`);
  }

}

export { ProductManager }