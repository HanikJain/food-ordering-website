const axios = require("axios");


module.exports = (app) => {   
    app.get('/api/restaurants', async (req, res) => {

        const options = {
            method: "GET",
            url:"https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US",
            headers: {
            "x-rapidapi-host": process.env.RESTAURANT_HOST,
            "x-rapidapi-key": process.env.RESTAURANT_API
            }
        }

        const response = await axios.request(options);
        const results = await response.data;
        res.json(results);

      
    })

}



