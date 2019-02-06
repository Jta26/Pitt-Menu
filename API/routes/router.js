var express = require('express');
var router = express.Router();
var sqlservice = require('../services/sqlservice');

router.get('/menu/:date', (req, res) => {
    strDate = req.params.date
    intMenutype = req.query.type
    if (!intMenutype) {
        res.status(400).send('400 Bad Request Menu Type Not Specified');
        return;
    }
    if (0 > intMenutype || intMenutype > 1) {
        res.status(400).send('400 Bad Request Menu Type Not Valid');
        return;
    }
    var strMenuType;
    if (intMenutype === 0) {
        strMenuType = 'Dinner';
    }
    else {
        strMenuType = 'Breakfast/Lunch'
    }
    sqlservice(strDate, intMenutype, function(result) {
        res.status(200).json(result[0]);
    });
    
}); 










module.exports = router;