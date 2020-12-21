module.exports = {
  index,
  new: newOne
}

function index(req, res) {
  res.render('mesocycles/index', {title: 'All Mesocycles', id: req.body.id});
}

function newOne(req, res) {
  res.render('mesocycles/new', {title: 'New Mesocycle'});
}