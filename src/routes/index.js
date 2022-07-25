const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "GET - API",
        
    });
});

router.post('/user', function (req, res, next) {
    res.status(200).send({
        title: "POST",
        
    });
});

router.put('/user', function (req, res, next) {
    res.status(200).send({
        title: "PUT",
        
    });
});

router.delete('/user', function (req, res, next) {
    res.status(200).send({
        title: "DELETE",
        
    });
});



module.exports = router;