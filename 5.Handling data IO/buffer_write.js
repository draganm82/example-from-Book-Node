buf256 = new Buffer.alloc(256);
buf256.fill(15);
buf256.write("add some text");
console.log(buf256.toString());
buf256.write("more text", 9,9);
console.log(buf256.toString());
buf256[18] =43;
console.log(buf256.toString());
