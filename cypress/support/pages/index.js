class indexPage{
    constructor(){
        this.searchInput = '#search_query_top';
        this.searchButton = '#searchbox > .btn';
        this.contains = '.lighter';
    }

    search = (element) =>{
        cy.get(this.searchInput).type(element);
        cy.get(this.searchButton).click();
        cy.get(this.contains).contains(element);
    }
}

export default new indexPage(); 