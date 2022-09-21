/// <reference types= "cypress" />
import MyStorePageObjects from '../support/pages/myStore.po'

const myStorePageObjects = new MyStorePageObjects  

let url = 'http://automationpractice.com/index.php'

it('Access application', () => {
   cy.visit(url);
})

it('Seach', () => {
    myStorePageObjects.typeSearch('Printed');
 })

 it('clickSearch', () => {
   myStorePageObjects.clickSeach();
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