const express = require('express');
const app = express();
const oauth = require('oauth');

var myOauth = new oauth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'AHgDiLQRKUkWaV5tVmHWueHuO',
  'JDcmmA00BSuLvb3BDbvIxb5Q8K3kfgfa65rYDEXZbJKCHaf8EB',
  '1.0',
  'http://127.0.0.1:3000/twitter/callback',
  'HMAC-SHA1',
  null
);

app.get('/',(req , res) => {
  myOauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        '88395371-5g4YHhiLsUOdxMz8EkE99CxtcVxGXOO40UmgrXSLG', //test user token
        'tvOIvXXxTyyVFJJ4nPg64OHzeEUmxgCW0sQugF3TFt2Lf', //test user secret
        function(e, data) {
          if (e) console.error(e);
          res.send(data);
          // console.log(require('util').inspect(data));
          // done();

        }
  )
})

app.get('/user',(req , res) => {
  myOauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        '88395371-5g4YHhiLsUOdxMz8EkE99CxtcVxGXOO40UmgrXSLG', //test user token
        'tvOIvXXxTyyVFJJ4nPg64OHzeEUmxgCW0sQugF3TFt2Lf', //test user secret
        function(e, data) {
          if (e) console.error(e);
          res.send(data);
          // console.log(require('util').inspect(data));
          // done();

        }
  )
})

app.listen(3000);