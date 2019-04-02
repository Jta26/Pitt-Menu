var express = require('express');
var router = express.Router();
var sqlservice = require('../services/sqlservice');
var firebase = require('../services/firebase');
var googleWebhook = require('../services/google');
var InvokePython = require('../services/invoke');
var ImageSearch = require('../services/imagesearch');

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
    if (intMenutype == 0) {
        strMenuType = 'Dinner';
    }
    else if (intMenutype == 1) {
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
    }, (err) => {
        if (err === 0) {
            res.status(200).json({"message": "No Menu"});
        }
    })
    
});
router.get('/item/:id', (req, res) => {
    var intID = req.params.id;
    if (typeof parseInt(intID) !== 'number') {
        res.status(400).send('400, Bad Request ID not valid');
    }
    else {
        sqlservice.GetItemByItemID(intID).then((result1) => {
            sqlservice.GetMenuDatesThatContainItemName(result1[0].ItemName).then((result2) => {
                responseJSON = {
                    "itemID": intID,
                    "itemName": result1[0].itemName,
                    "itemDates": result2
                }
                res.status(200).json(responseJSON);
            });
        });
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
        ImageSearch.VerifyFirebaseItemImageContent();
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