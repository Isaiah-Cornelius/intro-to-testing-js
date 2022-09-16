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

    it('should return "Hello, World!" when called with a number string argument', function (){
        expect(sayHello("5")).toBe("Hello, World!");
        expect(sayHello("-1")).toBe("Hello, World!");
    })
})

//Exercise #10
// Ensure that isFive returns a boolean no matter what the input
// Ensure that isFive returns true when passed 5
// What about if we pass in the string "5"? Do you want isFive to return true for that?
// If so, write the test, ensure that the test is failing, and then write the implementation
describe('isFive', function (){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    })
    it('should always return a boolean value', function (){
        expect(isFive(4)).toBe(false);
        expect(isFive("5")).toBe(false);
    })
})

//Exercise #11 isEven function
//     returns a boolean no matter the input
//     returns true when executed with isEven(2)
//     returns true when executed with isEven(-4)
//     returns false when executed with isEven(3)
//     returns false when called with isEven("banana")
//     returns true when called with isEven("8")
//     returns false when called with isEven(Infinity)
//     return false when called with a boolean input like isEven(true) or isEven(false)
//     returns false when called without an argument like isEven()
describe('isEven', function (){
    it('should be a defined fundtion', function (){
        expect(typeof isEven).toBe('function');
    })
    it('should always return a boolean value', function (){
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven('banana')).toBe(false);
        expect(isEven("8")).toBe(true);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
        expect(isEven()).toBe(false);

    })
})

//Exercise #12 isVowel function
// isVowel should be a defined function
// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false
describe('isVowel', function (){
    it('should be a defined function', function (){
        expect(typeof isVowel).toBe('function');
    })
    it('isVowel("a") returns true', function (){
        expect(isVowel("a")).toBe(true);
    })
    it('isVowel("A") returns true', function (){
        expect(isVowel("A")).toBe(true);
    })
    it('isVowel("y") returns false', function (){
        expect(isVowel("y")).toBe(false);
    })
    it('isVowel(4) returns false', function (){
        expect(isVowel(4)).toBe(false);
    })
    it('isVowel(true) returns false', function (){
        expect(isVowel(true)).toBe(false);
    })
    it('isVowel(false) returns false', function (){
        expect(isVowel(false)).toBe(false);
    })
    it('isVowel(\'banana\') returns false', function (){
        expect(isVowel(false)).toBe(false);
    })
    it('isVowel() returns false', function (){
        expect(isVowel()).toBe(false);
    })
})





