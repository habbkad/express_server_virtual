exports.get_services = (req, res) => {
  res.send("<h2> About car services<h2>");
};

exports.get_about = (req, res) => {
  res.send("<h1>About</h1>");
};
exports.get_aboutMe = (req, res) => {
  res.send("<h1>About me and my people</h1>");
};

exports.get_home = (req, res) => {
  res.send("<h1> Hello world</h1>");
};
