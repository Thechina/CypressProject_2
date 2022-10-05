import MyStoreElements from '../elements/mystore.elements'

const myStoreElements = new MyStoreElements

class MyStorePageObjects {

  clickSinginn() {
    myStoreElements.btnSinginn().click();
  }

  typeEmail(Email) {
    myStoreElements.inputEmail().type(Email);
  }

  typePassword(Password) {
    myStoreElements.inputPassword().type(Password);
  }

  clickEnter() {
    myStoreElements.btnEnter().click();
  }

  typeSearch(Printed) {
      myStoreElements.inputSearch().type(Printed);
    }

  clickSeach() {
      myStoreElements.btnSearch().click();
    }

  clickImg() {
    myStoreElements.imgPrinted().click();
  }

  clickCart() {
    myStoreElements.btnCart().click();
    cy.wait(5000);
  }

  clickProceedToCheckout() {
    myStoreElements.btnProceedToCheckout().click();
  }

  returnPage() {
    myStoreElements.returnPage().click();
  }

  clickMenu() {
    myStoreElements.clickMenu().click();
  }

  clickColor() {
    myStoreElements.inputColor().click();
  }

  clickAddToCart() {
    myStoreElements.btnAddToCart().click();
  }
 
}
  
export default MyStorePageObjects 