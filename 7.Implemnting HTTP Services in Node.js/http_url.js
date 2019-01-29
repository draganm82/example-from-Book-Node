var url = require ('url');
var urlSTR = 'http://user:pass@host.com:80/resource/path?query=strin'
var urlObj = url.parse(urlSTR, true, false);
urlString = url.format(urlObj);
