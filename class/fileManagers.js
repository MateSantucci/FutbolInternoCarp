const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

class FileManager {
  constructor(filePath) {
    this.path = filePath;
  }

  async #readFile() {
    try {

      const readFile = await fs.promises.readFile(this.path, "utf-8");

      if (readFile.length === 0) res.status(200).json([{ message: "No data found." }]);
      else return JSON.parse(readFile);
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

 
  async getData() {
    const fileContent = await this.#readFile();

    try {
      if (fileContent.length === 0) throw new Error(`Error: Not data found.`);
      else return fileContent;
    } catch (error) {
      throw new Error(`Error: Not data found.`);
    }
  }

  
  async getDataById(id) {
    const fileContent = await this.#readFile();

    try {
      const data = fileContent.some((obj) => obj.id === id);

      if (data) {
        const dataById = fileContent.find((obj) => obj.id === id);
        return dataById;
      } else {
        throw new Error(`Error: Not data found with id ${id}.`);
      }
    } catch (error) {
      throw new Error(`Error: Not data found with id ${id}.`);
    }
  }

  
  async postData(data) {
    
    const fileContent = await this.#readFile();

    try {
      
      const newItem = { id: uuidv4(), ...data };

      
      await fs.promises.writeFile(this.path, JSON.stringify([...fileContent, newItem], null, 2));
      
      
      return newItem;
    } catch (error) {
      throw new Error(`Error saving data: ${error.message}`);
    }

  }

  
  async updateDataById(id, data) {
    
    const fileContent = await this.#readFile();

    try {
     
      const dataById = await this.getDataById(id);

      if (dataById) {
        
        await fs.promises.writeFile(this.path, JSON.stringify(fileContent.map((obj) => obj.id === id ? { ...obj, ...data } : obj), null, 2));

      
        return { id, ...data };
      } else {
        throw new Error(`Error: Not data found with id ${id}.`);
      }
    } catch (error) {
      throw new Error(`Error: Not data found with id ${id}.`);
    }
  }

  
  async deleteDataById(id) {

    const fileContent = await this.#readFile();

    try {

      const dataById = await this.getDataById(id);

      if (dataById) { 

        fs.promises.writeFile(this.path, JSON.stringify(fileContent.filter((obj) => obj.id !== id), null, 2));

       
        return { id, ...dataById, status: false };
      } else {
        return { error: `Not data found with id ${id}.` };
      }
    } catch (error) {
      throw new Error(`Error deleting data: ${error.message}`);
    }
  }
}

module.exports = FileManager;