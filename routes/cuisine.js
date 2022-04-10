const CuisineModel = require('../model/cuisine')

const cuisine = [
    { 
        key: '10346',
        items: 
        {
            indian1 : 
            {   
                id: "indian1",
                description:"Best Pav Bhaji ever",
                name:"Pav Bhaji",
                price:"199",
                src: "https://o.remove.bg/downloads/966f5115-f27a-48e7-9f0b-d5b35681ad94/pav-bhaji-removebg-preview.png"
            },
            indian2: 
            {
                id: "indian2",
                description:"Best Sev puri ever",
                name:"Sev puri",
                price:"49",
                src: "https://o.remove.bg/downloads/46623a63-e7aa-40ad-adc3-05da46bdd9e4/sev-puri-removebg-preview.png"
            },
        }
        ,
        name: 'Indian'

    },
    { 
        key: '10653',
        items: 
        {
            m1: {
                id: "m1",
                description:"Finest fish and veggie",
                name:"Sushi",
                price:"720.99",
                src: "./assets/compress-images/sushi-min.png"
            },
        }
        ,
        name: 'Sushi'

    },
    { 
        key: '10665',
        items: 
        {
            indian1 : 
            {   id: "indian1",
                description:"Best Pav Bhaji ever",
                name:"Pav Bhaji",
                price:"199",
                src: "https://o.remove.bg/downloads/966f5115-f27a-48e7-9f0b-d5b35681ad94/pav-bhaji-removebg-preview.png"
            },
            indian2: 
            {   
                id: "indian2",
                description:"Best Sev puri ever",
                name:"Sev puri",
                price:"49",
                src: "https://o.remove.bg/downloads/46623a63-e7aa-40ad-adc3-05da46bdd9e4/sev-puri-removebg-preview.png"
            },
            veg1: 
            {
                description:"Delicious Hakka Noodles",
                name:"Veg Hakka Noodles",
                price:"249",
                src: "https://o.remove.bg/downloads/e50b78b6-1449-4a26-9724-103fbefb5b1f/Veg-Hakka-Noodles-removebg-preview.png"
            },
        
        }
        ,
        name: 'Vegetarian Friendly'

    },
    { 
        key: '10992',
        items: 
        {
            m1: {
                id: "m1",
                description:"Oats Meal",
                name:"Tasty Gluteen free Oats",
                price:"109.49",
                src: "https://o.remove.bg/downloads/0aea6727-cb20-4825-9371-3037b1ce3848/oats-removebg-preview.png"
            },
        }
        ,
        name: 'Gluten free'

    },
    { 
        key: '10697',
        items: 
        {
            indian2: 
            {   
                id: "indian2",
                description:"Best Sev puri ever",
                name:"Sev puri",
                price:"49",
                src: "https://o.remove.bg/downloads/46623a63-e7aa-40ad-adc3-05da46bdd9e4/sev-puri-removebg-preview.png"
            },
        }
        ,
        name: 'Vegan'

    }
]

// module.exports = cuisine;

module.exports = (app) => {
    app.get('/api/cuisine', async (req, res) => {
        const result = await CuisineModel.find({});
        if(result)
            res.json(result[0].cuisine);
        else
            res.statusCode(505);
    });

}

