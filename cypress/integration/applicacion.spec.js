/// <reference types= "cypress" />
import MyStorePageObjects from '../support/pages/myStore.po'

const myStorePageObjects = new MyStorePageObjects  

let url = 'http://automationpractice.com/index.php'

it('Access application', () => {
   cy.visit(url);
})

it('Seach', () => {
    myStorePageObjects.typeSearch('woman');
 })

 it('clickSearch', () => {
   myStorePageObjects.clickSeach();
 })

 it('selectMenu', () => {
   myStorePageObjects.selectMenu().select(T-shirt);
 })

