var alphabet = new Buffer.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ');
console.log(alphabet.toString());
  // copy full buffer
var blank = new Buffer(52);
blank.fill();
console.log("Blank: " + blank.toString());
alphabet.copy(blank);
console.log("Blank: " + blank.toString());
// copy part of buffer
var dashes = new Buffer(10);
dashes.fill('1234567890');
console.log("Dashes: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);
console.log("Dashes: " + dashes.toString());
// copy to and from direct indexes of buffers
var dots = new Buffer('-------------------------');
dots.fill('.');
console.log("dots: " + dots.toString());
for (var i=0; i < alphabet.length; i++){
if (i % 53) { dots[i] = alphabet[i]; }
 }
 console.log("dots: " + dots.toString());
