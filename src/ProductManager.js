import utils from "./utils.js";

export class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  async getProducts() {
    try {
      let data = await utils.readFile(this.path);
      this.products = data;
      return data?.length > 0 ? this.products : "aun no hay registros";
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
      let data = await utils.readFile(this.path);
      this.products = data?.length > 0 ? data : [];
      let product = this.products.find((dato) => dato.id === id);
      return product;
      // if (product !== undefined) {
      //   return product;
      // } else {
      //   return "no existe el producto solicitado";
      // }
    } catch (error) {
      console.log(error);
    }
  }
}

export default {
  ProductManager,
};
