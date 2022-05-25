class BaseMasterDataItemModel {
  id = 0;
  title = '';
 
  constructor(entity) {
    if (entity) {
      this.id = entity.id ?? 0;
      this.title = entity.title ?? '';
    }
  }

  getId = () => {
    return this.id;
  };

  getTitle = () => {
    return this.title;
  };
}

export default BaseMasterDataItemModel;
