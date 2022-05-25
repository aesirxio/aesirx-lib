class BaseMasterDataModel {
    items = [];
    unTransformedItems = [];
    pureEntities = null;
    constructor(entities) {
      this.pureEntities = entities;
    }
  
    getPureEntities = () => this.pureEntities;
  
    getItems = () => {
      return this.items;
    };
  
    getUntransformedItems = () => {
      return this.unTransformedItems;
    };
  
    totalItems = () => this.items.length;
  
    toJSON = () => {
      if (!this.items) return null;
      return this.items.map((element) => {
        return element ? element.toJSON() : null;
      });
    };
  }
  
  export default BaseMasterDataModel;
  