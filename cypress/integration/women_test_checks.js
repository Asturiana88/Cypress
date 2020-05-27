describe('Pruebas en el sitio women', function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    });
    it('Large top Search', function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();    
        //cy.get('#layered_id_attribute_group_3').uncheck();  
    });
    it('Order by Highest price', function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    });
    it('Order by Stock', function(){
        cy.get('#selectProductSort').select('In stock');
    });
})