var firebase = require('./firebase');
var cheerio = require('cheerio');
// This file handles checking if all items in firebase have images,
// if they do not have an image, it searches google images and fill it with the first one.


async function VerifyFirebaseItemImageContent() {
    let items = await firebase.GetFirebaseItemList();
    for (const [i, item] of items.entries()) {
        if (!("images" in item[1])) {
            console.log(' --------------------------- \n images not found in ' + item[1].name);
            let itemID = item[0];
            let itemName = item[1].name.replace(' ' , '+');
            let headers = new Headers({
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
            });
            let searchUrl = `https://www.google.com/search?q=${itemName}&biw=884&bih=978&tbm=isch&source=lnt&tbs=isz:ex,iszw:800,iszh:800`
            let searchResponse = await fetch(searchUrl, {
                method: 'GET',
                headers: headers
            });
            let data = await searchResponse.text();
            let $ = cheerio.load(data);
            let imgUrl = JSON.parse($('.rg_meta').first().text()).ou;
            let extension = imgUrl.split(/\#|\?/)[0].split('.').pop().trim();
            let imgResponse;
            try {
                imgResponse = await fetch(imgUrl);
            }
            catch (err) {
                if (err) continue;
            }
            
            let imgBuffer = await imgResponse.buffer();
            firebase.StoreImageFromUInt8Arr(item[1].name, itemID, imgBuffer);
            
            
        }
        else {
            console.log(`${item [0] + ' ' + item[1].name} has images; skipping`);
        }
    }
    
    
}

module.exports.VerifyFirebaseItemImageContent = VerifyFirebaseItemImageContent;