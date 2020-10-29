// Remove `cors` if you want to allow every origins
var express = require('express'),
    request = require('request'),
    cors = require('cors'),
    app = express();
    
// START ; Part to remove if you don't use `cors`
var whitelist = ['https://example.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// END

// Remove `cors(corsOptions),` if you don't use `cors`
app.get('/', cors(corsOptions), function (req, res, next) {
    var url = req.query["url"];
    if (!url) {
        res.send(500, { error: 'No target in ?url=' });
        return;
    }
    else{
        request(url).pipe(res);
    }
});

// Change port if there's no "PORT" environnement variable
app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
    console.log('express-cors-proxy running on port ' app.get('port'));
});
