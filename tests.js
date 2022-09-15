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


//Exercise #2

    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    })

//Exercise #3

    it('should return "Hello, Jane!" when called with sayHello("Jane");', function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })


//Exercise #4

    it('should return "Hello, Alex!" when called with sayHello("Alex");', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })


//Exercise #5

    it('should return "Hello, Pat!" when called with sayHello("Pat");', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })


//Exercise #8

    it('should return "Hello, World" when called without an argument sayHello();', function(){
        expect(sayHello()).toBe("Hello, World!");
    })

    it('should return "Hello, World!" when called with sayHello(true)', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    })

    it('should return "Hello, World!" when called with sayHello(false)', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    })

    it('returns "Hello, World!" when called with a number string argument', function (){
        expect(sayHello("5")).toBe("Hello, World!");
        expect(sayHello("-1")).toBe("Hello, World!");
    })
})
