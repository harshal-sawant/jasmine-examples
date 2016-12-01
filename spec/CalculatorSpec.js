describe('Calculator', function(){

var calc;
beforeEach(function(){
    calc = new Calculator($('.container'));

  })

  it('should add two numbers', function(){
    expect(calc.add(1,1)).toBe(2);
//expect(calc.add(1,'1')).toBe(2);
//    expect(calc.add(1,2,3)).toBe(6);
  });

  it('should substract two numbers', function(){
    expect(calc.substract(5,2)).toBe(3);

   // expect(5).toBeBetween(1, 10);
  });


//disabled the test by prefixing it with x
  xit('should multiply two numbers', function(){
   expect(calc.multiply(6,2)).toBe(12);
  });

/*
  it('should divide two numbers', function(){
    //write tests
  });*/

  describe('View', function(){
    it('should store view element reference', function(){
      expect(calc.$el).toBeDefined();
    })
  })


  describe('Async test', function(){

    it('should fetch name from service', function(done) {
      var name = '';
      setTimeout(function(){
        name= 'vinayak';
        expect(name).toBe('vinayak');
        done();
      }, 3000)

      
    });
  });

  describe('Spy example', function(){
    it('should call outputResult on add', function(){
        spyOn(calc,'outputResult');
        calc.add(1,1);
        expect(calc.outputResult).toHaveBeenCalled();
    });

    it('should call outputResult on add outputResult', function(){
       /*
        spyOn(calc,'outputResult');
        calc.add(5,5, function() {});
        expect(calc.outputResult).toHaveBeenCalled();
        */        

        
        var spyCallback = jasmine.createSpy('test1');
        spyOn(calc, 'outputResult');

        calc.add(1,1,spyCallback);

        expect(calc.outputResult).not.toHaveBeenCalled();
        expect(spyCallback).toHaveBeenCalled();
        

    });

  });

});