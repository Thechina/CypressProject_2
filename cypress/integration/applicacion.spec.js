/// <reference types= "cypress" />
import MyStorePageObjects from '../support/pages/myStore.po'

const myStorePageObjects = new MyStorePageObjects  

let url = 'http://automationpractice.com/index.php'

it('Access application', () => {
   cy.visit(url);
})

// it('Login', () => {
//    myStorePageObjects.clickSingin();
//    myStorePageObjects.typeEmail('suguiomarcelo@gmail.com');
//    myStorePageObjects.typePassword('Brad050977');
//    myStorePageObjects.clickEnter();
//   })

it('Search For Product', () => {
    myStorePageObjects.typeSearch('Printed');
    myStorePageObjects.clickSearch();
    myStorePageObjects.clickImg();
 })

it('Add Product to cart', () => {
   myStorePageObjects.clickCart();
})

it('search for new product', () => {
   myStorePageObjects.returnPage();
   myStorePageObjects.clickMenu();
   myStorePageObjects.clickColor();
})

it('Add Product to Cart', () => {
   myStorePageObjects.clickAddToCart();
})