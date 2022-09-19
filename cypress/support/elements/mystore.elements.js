class MyStoreElements {
    
    inputSearch() {
        return cy.get('input[class="search_query form-control ac_input"]');
    }

    btnSearch() {
        return cy.get('button[name="submit_search"]');
    }

    SelectMenu() {
        cy.get('a[class="sf-with-ul"]');  
    }
  
   
}
export default MyStoreElements