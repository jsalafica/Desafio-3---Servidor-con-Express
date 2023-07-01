import utils from "./utils.js";

export class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  async getProducts() {
    try {
      let data = await utils.readFile(this.path);
      return data?.length > 0 ? data : [];
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
      let data = await this.getProducts();
      let product = data.find((dato) => dato.id === id);
      return product;
    } catch (error) {
      console.log(error);
    }
  }
}

export default {
  ProductManager,
};
