import indexPages from '../support/pages/index';
import articlePages from '../support/pages/articles';

describe('Search test cases', function(){
    before(function(){
        cy.log('Esto se ejecuta antes que nada! :o')
    })
    after(function(){
        cy.log('Esto se ejecuta despues de todo :O')
    })

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function(){
        cy.log('Poniendo datos en su estado original (?')
    })

    it('Search with results dress', function(){ 
        indexPages.search('dress');
/*      cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click(); */
        //cy.get('.lighter').contains('"dress"');
        articlePages.verifyArticle('dress');
    });

    it('Search with results hat ', function(){
        indexPages.search('hat')
        articlePages.verifyArticle('hat');
    });


})