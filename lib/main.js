var http = require('http'),
  querystring = require('querystring'),
  MethodTable = (JSON.parse(require('fs').readFileSync(__dirname + 'methods.json'))).results;

function Zotero(api_key) {

  if (typeof api_key == 'string') {
    this.api_key = api_key;
  } else {
    this.api_key = null;
  }

}

module.exports = zotero;
