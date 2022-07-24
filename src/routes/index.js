const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "GET - API",
        
    });
});

router.post('/', function (req, res, next) {
    res.status(200).send({
        title: "POST",
        
    });
});

router.put('/', function (req, res, next) {
    res.status(200).send({
        title: "PUT",
        
    });
});

router.delete('/', function (req, res, next) {
    res.status(200).send({
        title: "DELETE",
        
    });
});



module.exports = router;