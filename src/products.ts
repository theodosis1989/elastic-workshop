
const dataset: any = [
  {
    "id": 101,
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "price": 28.1,
    "rating": 4,
    "country": "UK",
    "store": "ICA",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 102,
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "price": 29.45,
    "rating": 4,
    "country": "France",
    "store": "ICA",
    "expDate": "2020-10-01",
    "status": "in stock",
    "vegan": true,
  },
  {
    "id": 103,
    "title": "Tomatoes from Greece",
    "type": "Veggies",
    "description": "Sweet fresh stawberry on the wooden table",
    "price": 29.45,
    "rating": 4,
    "country": "Greece",
    "store": "ICA",
    "expDate": "2020-10-05",
    "status": "unavailable",
    "vegan": true,
  },
  {
    "id": 104,
    "title": "Asparagus from Italy",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "price": 18.95,
    "rating": 3,
    "country": "Italy",
    "store": "ICA",
    "expDate": "2020-06-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 105,
    "title": "Green smoothie with berries from France",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "price": 17.68,
    "rating": 4,
    "country": "Italy",
    "store": "ICA",
    "expDate": "2020-07-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 106,
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "price": 17.11,
    "rating": 2,
    "country": "Italy",
    "store": "COOP",
    "expDate": "2020-08-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 107,
    "title": "Baking cake with flour from Sweden",
    "type": "dairy",
    "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    "price": 11.14,
    "rating": 4,
    "country": "Finland",
    "store": "COOP",
    "expDate": "2020-08-01",
    "status": "in stock",
    "vegan": false,
  },
  {
    "id": 108,
    "title": "Pesto with basil",
    "type": "vegetable",
    "description": "Italian traditional pesto with basil, chesse and oil",
    "price": 18.19,
    "rating": 2,
    "country": "Italy",
    "store": "COOP",
    "expDate": "2020-12-01",
    "status": "unavailable",
    "vegan": false,
  },
  {
    "id": 109,
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "price": 27.35,
    "rating": 3,
    "country": "Spain",
    "store": "COOP",
    "expDate": "2020-02-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 110,
    "title": "Fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry from Finland on the wooden table",
    "price": 28.59,
    "rating": 4,
    "country": "Sweden",
    "store": "COOP",
    "expDate": "2020-03-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 111,
    "title": "Lemon and salt",
    "type": "fruit",
    "description": "Rosemary, lemon and salt on the table",
    "price": 15.79,
    "rating": 5,
    "country": "Spain",
    "store": "My Market",
    "expDate": "2020-04-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 112,
    "title": "Homemade bread",
    "type": "bakery",
    "description": "Homemade bread from Greece",
    "price": 17.48,
    "rating": 3,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-04-01",
    "status": "in stock",
    "vegan": true,
  },
  {
    "id": 113,
    "title": "Legums",
    "type": "vegetable",
    "description": "Cooked legums on the wooden table",
    "price": 14.77,
    "rating": 0,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-04-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 114,
    "title": "Fresh tomato",
    "type": "vegetable",
    "description": "Fresh tomato juice with basil",
    "price": 16.3,
    "rating": 2,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-04-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 115,
    "title": "Healthy breakfast",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    "price": 13.02,
    "rating": 2,
    "country": "UK",
    "store": "Hemköp",
    "expDate": "2020-08-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 116,
    "title": "Green beans",
    "type": "vegetable",
    "description": "Raw organic green beans ready to eat",
    "price": 28.79,
    "rating": 1,
    "country": "France",
    "store": "My Market",
    "expDate": "2020-02-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 117,
    "title": "Baked stuffed portabello mushrooms",
    "type": "bakery",
    "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    "price": 20.31,
    "rating": 1,
    "country": "UK",
    "store": "LIDL",
    "expDate": "2020-02-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 118,
    "title": "Strawberry jelly",
    "type": "fruit",
    "description": "Homemade organic strawberry jelly in a jar",
    "price": 14.18,
    "rating": 1,
    "country": "Spain",
    "store": "LIDL",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 119,
    "title": "Pears juice",
    "type": "fruit",
    "description": "Fresh pears juice on the wooden table",
    "price": 19.49,
    "rating": 4,
    "country": "Spain",
    "store": "LIDL",
    "expDate": "2020-10-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 120,
    "title": "Fresh pears",
    "type": "fruit",
    "description": "Sweet fresh pears on the wooden table",
    "price": 15.12,
    "rating": 5,
    "country": "Spain",
    "store": "LIDL",
    "expDate": "2020-10-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 121,
    "title": "Caprese salad",
    "type": "vegetable",
    "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
    "price": 16.76,
    "rating": 5,
    "country": "Italy",
    "store": "ICA",
    "expDate": "2020-10-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 122,
    "title": "Oranges",
    "type": "fruit",
    "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    "price": 21.48,
    "rating": 4,
    "country": "Spain",
    "store": "ICA",
    "expDate": "2020-10-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 123,
    "title": "Vegan food",
    "type": "vegetable",
    "description": "Concept of vegan food",
    "price": 29.66,
    "rating": 4,
    "country": "Sweden",
    "store": "ICA",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 124,
    "title": "Breakfast with muesli and milk",
    "type": "dairy",
    "description": "Concept of healthy breakfast with muesli and milk",
    "price": 22.7,
    "rating": 2,
    "country": "Sweden",
    "store": "ICA",
    "expDate": "2020-11-01",
    "status": "in stock",
    "vegan": false,
  },
  {
    "id": 125,
    "title": "Honey",
    "type": "bakery",
    "description": "Honey and honeycell on the table",
    "price": 17.01,
    "rating": 2,
    "country": "Greece",
    "store": "ICA",
    "expDate": "2020-11-01",
    "status": "in stock",
    "vegan": false,
  },
  {
    "id": 126,
    "title": "Breakfast with cottage",
    "type": "fruit",
    "description": "Healthy breakfast with cottage cheese and strawberry",
    "price": 14.05,
    "rating": 1,
    "country": "Finland",
    "store": "COOP",
    "expDate": "2020-03-01",
    "status": "unavailable",
    "vegan": false,
  },
  {
    "id": 127,
    "title": "Strawberry smoothie",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    "price": 28.86,
    "rating": 2,
    "country": "Finland",
    "store": "COOP",
    "expDate": "2020-04-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 128,
    "title": "Strawberry and mint",
    "type": "fruit",
    "description": "Homemade muesli with strawberry and mint",
    "price": 26.21,
    "rating": 4,
    "country": "Finland",
    "store": "COOP",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 129,
    "title": "Ricotta",
    "type": "dairy",
    "description": "Ricotta with berry and mint",
    "price": 27.81,
    "rating": 5,
    "country": "Italy",
    "store": "COOP",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 130,
    "title": "Cuban sandwiche",
    "type": "bakery",
    "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
    "price": 18.5,
    "rating": 4,
    "country": "Spain",
    "store": "COOP",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 131,
    "title": "Granola",
    "type": "dairy",
    "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    "price": 29.97,
    "rating": 3,
    "country": "Spain",
    "store": "Hemköp",
    "expDate": "2020-06-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 132,
    "title": "Smoothie with chia seeds",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    "price": 25.26,
    "rating": 5,
    "country": "Spain",
    "store": "Hemköp",
    "expDate": "2020-09-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 133,
    "title": "Yogurt",
    "type": "dairy",
    "description": "Homemade yogurt with raspberry and mint",
    "price": 27.61,
    "rating": 4,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 134,
    "title": "Sandwich with salad",
    "type": "vegetable",
    "description": "Vegan sandwich with salad, tomato and radish",
    "price": 22.48,
    "rating": 5,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-01-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 135,
    "title": "Cherry",
    "type": "fruit",
    "description": "Cherry with sugar on old table",
    "price": 14.35,
    "rating": 5,
    "country": "Greece",
    "store": "Hemköp",
    "expDate": "2020-05-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 136,
    "title": "Raw asparagus",
    "type": "vegetable",
    "description": "Raw fresh asparagus salad with cheese and dressing",
    "price": 22.97,
    "rating": 4,
    "country": "Greece",
    "store": "LIDL",
    "expDate": "2020-08-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 137,
    "title": "Corn",
    "type": "vegetable",
    "description": "Grilled corn on the cob with salt and butter",
    "price": 13.55,
    "rating": 2,
    "country": "Italy",
    "store": "LIDL",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 138,
    "title": "Vegan snack",
    "type": "vegan",
    "description": "Concept of healthy vegan eating",
    "price": 28.96,
    "rating": 5,
    "country": "Sweden",
    "store": "LIDL",
    "expDate": "2020-09-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 139,
    "title": "Fresh blueberries",
    "type": "fruit",
    "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    "price": 21.01,
    "rating": 4,
    "country": "Sweden",
    "store": "LIDL",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 140,
    "title": "Smashed avocado",
    "type": "fruit",
    "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    "price": 25.88,
    "rating": 0,
    "country": "Sweden",
    "store": "LIDL",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 141,
    "title": "Italian ciabatta",
    "type": "bakery",
    "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    "price": 15.18,
    "rating": 1,
    "country": "Italy",
    "store": "My Market",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 142,
    "title": "Rustic breakfast",
    "type": "dairy",
    "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    "price": 21.32,
    "rating": 0,
    "country": "Finland",
    "store": "ICA",
    "expDate": "2020-10-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 143,
    "title": "Sliced lemons",
    "type": "fruit",
    "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    "price": 27.14,
    "rating": 2,
    "country": "Finland",
    "store": "ICA",
    "expDate": "2020-02-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 144,
    "title": "Plums",
    "type": "fruit",
    "description": "Yellow and red sweet plums",
    "price": 19.18,
    "rating": 1,
    "country": "France",
    "store": "ICA",
    "expDate": "2020-03-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 145,
    "title": "French fries",
    "type": "bakery",
    "description": "Homemade oven baked french fries with ketchup",
    "price": 18.32,
    "rating": 3,
    "country": "France",
    "store": "ICA",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 146,
    "title": "Strawberries",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view",
    "price": 15.13,
    "rating": 3,
    "country": "France",
    "store": "COOP",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": true,
  },
  {
    "id": 147,
    "title": "Ground beef meat burger",
    "type": "meat",
    "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    "price": 11.73,
    "rating": 5,
    "country": "France",
    "store": "COOP",
    "expDate": "2020-11-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 148,
    "title": "Tomatoes",
    "type": "fruit",
    "description": "Organic tomatoes made with love",
    "price": 26.03,
    "rating": 4,
    "country": "France",
    "store": "Hemköp",
    "expDate": "2020-11-01",
    "status": "in stock",
    "vegan": true,
  },
  {
    "id": 149,
    "title": "Basil",
    "type": "vegetable",
    "description": "Concept of vegan food with basil",
    "price": 15.19,
    "rating": 4,
    "country": "France",
    "store": "Hemköp",
    "expDate": "2020-11-01",
    "status": "unavailable",
    "vegan": true,
  },
  {
    "id": 150,
    "title": "Fruits bouquet",
    "type": "fruit",
    "description": "Abstract citrus fruits bouquet on blue background",
    "price": 18.18,
    "rating": 1,
    "country": "France",
    "store": "LIDL",
    "expDate": "2020-11-01",
    "status": "unavailable",
    "vegan": true,
  },
  {
    "id": 151,
    "title": "Peaches on branch",
    "type": "fruit",
    "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    "price": 25.62,
    "rating": 3,
    "country": "France",
    "store": "LIDL",
    "expDate": "2020-11-01",
    "status": "in stock",
    "vegan": true,
  },
  {
    "id": 152,
    "title": "Köttbullar",
    "type": "meat",
    "description": "Meatballs are a traditional swedish food",
    "price": 55.62,
    "rating": 5,
    "country": "Sweden",
    "store": "ICA",
    "expDate": "2020-12-01",
    "status": "available",
    "vegan": false,
  },
  {
    "id": 153,
    "title": "Janssons",
    "type": "dairy",
    "description": "Janssons is a traditional swedish christmas dish",
    "price": 55.62,
    "rating": 5,
    "country": "Sweden",
    "store": "ICA",
    "expDate": "2020-12-01",
    "status": "available",
    "vegan": false,
  }
]

export default dataset