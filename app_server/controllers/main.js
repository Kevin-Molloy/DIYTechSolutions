const request = require('request');

const apiOptions = { 
  server: 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://diytechsolutions.onrender.com';
}

const home = function(req, res){
  const path = '/api/Main';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = [];
      if (response.statusCode === 200 && body) {
        data = body;
      } else if (response.statusCode !== 200) {
        console.error('Error from API:', response.statusCode);
      }
      res.render('index', {
        title: 'DIY Tech Solutions',
        items: data
      });
    }
  );
};

const login = function(req, res){
  res.render('login', { title: 'Login - DIY Tech Solutions' });
};

const register = function(req, res){
  res.render('register', { title: 'Register - DIY Tech Solutions' });
};

module.exports = {
  home,
  login,
  register
};


