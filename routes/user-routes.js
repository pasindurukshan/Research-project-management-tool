const express = require('express');
const router = express.Router();

const authorize = require('../_helpers/authorize')
const Role = require('../_helpers/role');

const { saveUser, authenticate } = require('../controllers/user-controller');

const auth = (req, res, next) => {
    authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'E-mail or password is incorrect' }))
        .catch(err => next(err));
}

router.post('/auth', [], auth);
router.post('/signup', [], saveUser);



module.exports = router;