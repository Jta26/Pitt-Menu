var express = require('express');
var router = express.Router();
var sqlservice = require('../services/sqlservice');
var firebase = require('../services/firebase');
var googleWebhook = require('../services/google');
var InvokePython = require('../services/invoke');

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
        strMenuType = 'Breakfast/Lunch';
    }

    sqlservice.GetMenuItems(strDate, intMenutype).then((items) => {
        var json = {
            "date": strDate,
            "type": strMenuType,
            "items": []
        }
        items.forEach((item, i, arr) => {
            sqlservice.GetItemDataByItemName(item).then((data) => {
                json.items.push(data)
                if (i == arr.length -1) {
                    res.status(200).json(json);
                }
            });

        });
         
    });
    
});
router.get('/item/:id', (req, res) => {
    var intID = req.params.id;
    if (typeof parseInt(intID) !== 'number') {
        res.status(400).send('400, Bad Request ID not valid');
    }
    else {
        sqlservice.GetItemByItemID(intID).then((result) => {
            sqlservice.GetMenusThatContainItemName(result[0].ItemName).then((result) => {
                res.status(200).json(result);
            })
        })
    }
    
})
router.post('/google', (req, res) => {
    googleWebhook(req, res);
});
router.get('/invoke', (req, res) => {
    InvokePython()
    .then((data) => {
        console.log(data.toString());
        firebase.updateFirebase();
        res.json({
            "response": 1,
            "message": "Menu Retrieved; Firebase Updated"
        })
    })
    .catch((err) => {
        console.log(err.toString());
        res.json({
            "response": 1,
            "message": "Could Not Retireve Menu"
        });
    });
});







module.exports = router;