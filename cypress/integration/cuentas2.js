describe('Cuentas', function(){
    var a =1 ;
    it('Vamos a ver una igualdad', function(){
        expect(1==1, "Ambos terminos tienen que ser iguales y no lo son").to.equal(true);
        // El segundo parametro del expect es lo q se va a ver si falla el caso.
        // Expect (assertts) de chai
        // Describes de mocha
        
    });
    it('Vamos a ver que no sea una igualdad', function(){
        expect(1==2).to.equal(false);
    });
    it('Vamos a ver que una resta este bien', function(){
        expect(1-1, "Aqui se espera un 0").to.equal(0);
    });

    it('Vamos a ver que una resta NO este bien', function(){
        expect(1-1).to.not.equal(2);
    });

    it('Tiene que ser verdadero', function(){
        expect(2==2).to.be.true;
    });

    it('La variable existe', function(){
        expect(a).to.exist;
    });

    it('Es menor a 10', function(){
        expect(a).to.be.lessThan(10);
    });

    it('Es mayor a 10', function(){
        expect(25).to.be.greaterThan(10);
    });
})