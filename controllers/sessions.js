module.exports = {
  index,
  new: newOne,
  create,
  show
}

function index(req, res) {

}

function newOne(req, res) {
  res.render('sessions/new', {
    title: 'New Session',
    user: req.user
  });
}

function create(req, res) {

}

function show(req, res) {
  
}