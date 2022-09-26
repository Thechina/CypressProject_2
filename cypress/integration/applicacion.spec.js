/// <reference types= "cypress" />
import MyStorePageObjects from '../support/pages/myStore.po'

const myStorePageObjects = new MyStorePageObjects  

let url = 'http://automationpractice.com/index.php'

it('Access application', () => {
   cy.visit(url);
})

it('Singinn', () => {
   myStorePageObjects.clickSinginn();
  })
 
it('Email', () => {
   myStorePageObjects.typeEmail('suguiomarcelo@gmail.com');
  })
 
it('Password', () => {
   myStorePageObjects.typePassword('Brad050977');
  })
 
it('Entrar', () => {
   myStorePageObjects.clickEnter();
  })

it('Seach', () => {
    myStorePageObjects.typeSearch('Printed');
 })

it('clickSearch', () => {
   myStorePageObjects.clickSeach();
 })

it('clickImg', () => {
   myStorePageObjects.clickImg();
 })

it('clickCart', () => {
   myStorePageObjects.clickCart();
})

it('returnPage', () => {
   myStorePageObjects.returnPage();
})

it('clicktMenu', () => {
   myStorePageObjects.clickMenu('Dresses');
})

it('inputColor', () => {
   myStorePageObjects.clickColor();
})