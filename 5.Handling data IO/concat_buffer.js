var af = new Buffer ("African Swallow");
var eu = new Buffer("European Swalow:");
var question = new Buffer("Air Speed Velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());
