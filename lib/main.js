var http = require('http'),
  querystring = require('querystring');

function Zotero(options) {

  if (!(this instanceof Zotero)) return new Zotero(options);

  var defaults = {
    api_key = null,
    // TODO get documentation defaults

    headers: {
      'Accept' : '*/*',
      'Connection' : 'close',
      'User-Agent' : 'node-zotero';
    },

    calback_url: null,

    rest_base: 'https://api.zotero.org/',

    secure: false, // force use of https for login
    cookie: 'zauth',
    cookie_options: {},
    cookie_secret: null
  };

  this.options = merge(defaults, options);

// keygrip?
  //
  // oauth?

}

module.exports = zotero;

Zotero.prototype.get = function(url, params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = null;
  }

  if (typeof callback !== 'function') {
    throw "Fail: Invalid Callback";
    return this;
  }

  if (url.charAt(0) == '/') {
    url = this.options.rest_base + url;
  }

  function(error, data, response) {
    if (error) {
      var err = new Error('HTTP Error '
                          + error.statusCode + ': '
                          + http.STATUS_CODE[error.statusCode]);
      err.statusCode = error.statusCode;
      err.data = error.data;
      callback(err);
    } else {
      try {
        var json = JSON.parse(data);
        callback(json);
      } catch(err) {
        callback(err);
      }
    }
    }
  });

  return this;
}
