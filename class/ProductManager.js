const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  
  async #readFile() {
    try {
      const content = await fs.promises.readFile(this.path, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts() {
    const fileContent = await this.#readFile();

    try {
      if (fileContent.length === 0) throw new Error(`Error: No hay productos.`);
      else return fileContent;
    } catch (error) {
      console.log(`Error: No hay productos.`);
    }
  }

  
  async getProductById(id) {
    try {
      const fileContent = await this.#readFile();

      if (!fileContent.find((obj) => obj.id === id)) throw new Error(`Error: No existen productos con ese ID ${id}.`);
      else return fileContent.find((obj) => obj.id === id);
    } catch (error) {
      console.log(`Error: No existen productos con ese ID ${id}.`);
    }
  }
}

module.exports = ProductManager;