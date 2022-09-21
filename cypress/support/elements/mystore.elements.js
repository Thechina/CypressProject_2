class MyStoreElements {
    
    inputSearch() {
        return cy.get('input[class="search_query form-control ac_input"]');
    }

    btnSearch() {
        return cy.get('button[name="submit_search"]');
    }

    btnSinginn() {
        return cy.get('a[class="login"]');
    }

    imputEmail() {
        return cy.get('#email');
    }

    imputPassword() {
        return cy.get('#passwd');
    }

    btnEnter() {
        return cy.get('i[class="icon-lock left"]');
    }
   
}
export default MyStoreElements