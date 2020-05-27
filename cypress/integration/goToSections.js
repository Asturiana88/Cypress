describe('Go to differents sections', function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    it('Go to Women section', function(){
        cy.get('[class=sf-with-ul]').first().click();
        // Selecciona el 1er elemento de una lista
    })
    it('Go to Dresses section',function(){
        cy.get('[class=sf-with-ul]').eq(3).click(); 
        // Selecciona el 4to elemento de una Lista
    });
})