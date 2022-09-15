// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise #1
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    })
})

//Exercise #2
describe('sayHello', function (){
    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    })
})

//Exercise #3
describe('sayHello', function (){
    it('should return "Hello, Jane!" when called with sayHello("Jane");', function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
})

//Exercise #4
describe('sayHello', function (){
    it('should return "Hello, Alex!" when called with sayHello("Alex");', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
})

//Exercise #5
describe('sayHello', function(){
    it('should return "Hello, Pat!" when called with sayHello("Pat");', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
})






