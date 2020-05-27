describe('Formas de encontrar un elemento', function(){
    it('Buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('hola'); 
        //Si la clase tiene espacios, los reemplazamos por un punto. (search_query form-control ac_input)
        cy.get('[name="search_query"]').type(' como va'); // Busca por otra propiedad distinta de class
        cy.get('[placeholder="Search"]').clear(); // Borra lo q esta escrito.
    });
})