let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "obj1"); // works fine (object key)

// can't use a string as the key
weakMap.set("k1", "value1"); // Error, because "k1" is not an object