function checkString(strLength: number) {
  return function(target, key, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      if (args[0].length > strLength) {
        throw new Error('The string should be under 10 characters');
      }

      return originalMethod.apply(this, args);
    }

  }

}

class CheckString {
  @checkString(10)
  greet(str: string) {
    console.log(str);
  }
}

const check = new CheckString();
check.greet('hellovdvsfesfse');