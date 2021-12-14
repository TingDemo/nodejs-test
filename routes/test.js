var express = require('express');
const { EmptyResultError } = require('sequelize/dist');
const app = require('../app');
var router = express.Router();
var testController = require('../app/controllers/testController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test_Express' });
});

const testControllerObj = new testController();

router.get('/user/:id', testControllerObj.getUser);
router.post('/user', testControllerObj.createUser);
router.put('/user', testControllerObj.updateUser);
router.delete('/user/:id', testControllerObj.deleteUser);

module.exports = router;