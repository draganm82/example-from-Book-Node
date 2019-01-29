var url = require ('url');
var originalUrl = 'http://user:pass@host.com:80/resource/path?query='
var newResource = '/another/path?querynew';
console.log(url.resolve(originalUrl, newResource));
