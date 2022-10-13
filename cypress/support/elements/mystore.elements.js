class MyStoreElements {

    btnSingin() {
        return cy.get('a[class="login"]');
    }

    inputEmail() {
        return cy.get('#email');
    }

    inputPassword() {
        return cy.get('#passwd');
    }

    btnEnter() {
        return cy.get('i[class="icon-lock left"]');
    }
    
    inputSearch() {
        return cy.get('input[class="search_query form-control ac_input"]');
    }

    btnSearch() {
        return cy.get('button[name="submit_search"]');
    }

    imgPrinted() {
        return cy.get('.last-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x');
    }

    btnCart() {
        //return cy.get('#add_to_cart > .exclusive');
        return cy.get('p[id="add_to_cart"]');
    }

    btnProceedToCheckout() {
        return cy.get('a[title="Proceed to checkout"]');
    }

    returnPage() {
        return cy.get('a[name="back"]');
    }

    clickMenu() {
        return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul');
    }

    inputColor() {
        return cy.get('input[id="layered_id_attribute_group_16"]');
    }

    btnAddToCart() {
        return cy.get('a').contains('span', 'Add to cart');
    }
   
}
export default MyStoreElements