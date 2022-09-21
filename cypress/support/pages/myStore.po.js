import MyStoreElements from '../elements/mystore.elements'

const myStoreElements = new MyStoreElements

class MyStorePageObjects {
    
    typeSearch(Printed) {
      myStoreElements.inputSearch().type(Printed);
    }

    clickSeach() {
      myStoreElements.btnSearch().click();
    }

    clickSinginn() {
      myStoreElements.btnSinginn().click();
    }

    typeEmail(Email) {
      myStoreElements.imputEmail().type(Email);
    }

    typePassword(Password) {
      myStoreElements.imputPassword().type(Password);
    }

    clickEnter() {
      myStoreElements.btnEnter().click();
    }

    }
  
export default MyStorePageObjects 