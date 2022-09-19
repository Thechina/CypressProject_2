import MyStoreElements from '../elements/mystore.elements'

const myStoreElements = new MyStoreElements

class MyStorePageObjects {
    
    typeSearch(Woman) {
      myStoreElements.inputSearch().type(Woman);
    }

    clickSeach() {
      myStoreElements.btnSearch().click();
    }

    selectMenu() {
      myStoreElements.selectMenu().select(T-shirt);
    }

    }
  
export default MyStorePageObjects 