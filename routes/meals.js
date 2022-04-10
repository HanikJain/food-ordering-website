module.exports = (app) => {   
    app.get('/api/meals', async (req, res) => {

        const meals = {
            m1: {
                description:"Finest fish and veggie",
                name:"Sushi",
                price:"720.99",
                src: "./assets/compress-images/sushi-min.png"
            },
            m3: {
                description:"American, raw, meaty",
                name:"Barbecue Burger",
                price:"159.99",
                src: "./assets/compress-images/Barbecue-Burger.png"
            },
            m4:{
                description:"Healthy...and green...",
                name:"Green Bowl",
                price:"200",
                src: "./assets/compress-images/Green-Bowl.png"
            },
            m5: {
                description:"Best Pav Bhaji ever",
                name:"Pav Bhaji",
                price:"199",
                src: "https://www.secondrecipe.com/wp-content/uploads/2020/12/pav-bhaji-2020.jpg"
            },
        }

        res.json(meals);
    });
}    