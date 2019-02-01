var express = require('express');
var router = express.Router();


router.get('/menu/:date', (req, res) => {
    strDate = req.params.date
    intMenutype = req.query.type
    if (!intMenutype) {
        res.status(400).send('400 Bad Request Menu Type Not Specified');
        return;
    }
    var strMenuType;
    if (intMenutype === 0) {
        strMenuType = 'Dinner';
    }
    else {
        strMenuType = 'Breakfast/Lunch'
    }
    res.status(200).send(`${strMenuType} Menu For ${strDate}`);
})










module.exports = router;