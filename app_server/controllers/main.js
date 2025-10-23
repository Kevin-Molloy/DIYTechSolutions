
const home = function(req, res){
  res.render('index', {
    title: 'DIY Tech Solutions',
    items: [
  { name: 'Intel I9', price: '€120', desc: 'High Quality Processor' },
  { name: 'Nvdia Shield XC90 Fan', price: '€80', desc: 'High Quality Fan' },
  { name: 'Cisco 100xh Oled Screem', price: '€20', desc: 'High Quality Screen' },
  { name: 'Gigabyte RTX 4070 GPU', price: '€650', desc: 'High Performance Graphics Card' },
  { name: 'Kingston Fury 32GB DDR5 RAM', price: '€140', desc: 'Fast Dual-Channel Memory Kit' },
  { name: 'Seagate Barracuda 2TB HDD', price: '€70', desc: 'Reliable High-Capacity Storage Drive' },
  { name: 'Samsung 980 Pro SSD 1TB', price: '€150', desc: 'Ultra-fast NVMe Solid State Drive' },
  { name: 'ASUS ROG Strix B550-F Motherboard', price: '€180', desc: 'Premium Gaming Motherboard' },
  { name: 'Cooler Master Hyper 212 RGB', price: '€45', desc: 'Efficient CPU Air Cooler' }
  ]
  }
  )
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


