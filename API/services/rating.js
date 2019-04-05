//This file handles rating of items. 
//It takes in a rating and averages them against all the other ratings in the database, then returns the average. It also takes in a user ID and if it exists in the ratings, returns that rating. If there are no rating

var firebase = require('./firebase');

async function RateItem(itemID, userID, rating) {
    await firebase.SetRating(itemID, userID, rating);
    let returnRating = await GetRating(itemID, userID);
    return returnRating;
}
async function GetRating(itemID, userID) {
    let item = await firebase.GetFirebaseitem(itemID);
    if (typeof userID === 'number') {
         let userRating = await firebase.GetUserRating(itemID, userID);
         return userRating;
    }
    else {
        let ratings = item.ratings;
        let averageRating = AverageNumbers(ratings);
        return averageRating;
    }

}

function AverageNumbers(numbers) {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

module.exports.GetRating = GetRating;
module.exports.RateItem = RateItem;