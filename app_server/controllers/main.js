const request = require('request');

const apiOptions = { 
  server: 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = process.env.RENDER_EXTERNAL_URL || 'https://diytechsolutions.onrender.com';
}

const home = function(req, res){
  // In production on first load, use direct model access to avoid circular dependency
  if (process.env.NODE_ENV === 'production' && !apiOptions.serverReady) {
    const Part = require('../../app_api/models/parts');
    Part.find().lean()
      .then(items => {
        apiOptions.serverReady = true;
        res.render('index', {
          title: 'DIY Tech Solutions',
          items: items
        });
      })
      .catch(err => {
        console.error('Error fetching parts:', err);
        res.render('index', {
          title: 'DIY Tech Solutions',
          items: []
        });
      });
    return;
  }

  const path = '/api/Main';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {},
    timeout: 5000
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = [];
      if (err) {
        console.error('API request error:', err.message);
      } else if (response && response.statusCode === 200 && body) {
        data = body;
      } else if (response) {
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


