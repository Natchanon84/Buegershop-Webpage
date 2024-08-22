import CheesyBurger from "../Multifilter/image/Cheesy-Burger.jpg"
import burger2 from "../Multifilter/image/burger2.jpg"
import burger3 from "../Multifilter/image/burger3.jpg"
import pizza1 from "../Multifilter/image/pizza1.jpg"
import pizza2 from "../Multifilter/image/pizza2.jpg"
import pizza3 from "../Multifilter/image/pizza3.jpg"
import salad1 from "../Multifilter/image/salad1.jpg"
import salad2 from "../Multifilter/image/salad2.jpg"
import salad3 from "../Multifilter/image/salad3.jpg"
import sweet1 from "../Multifilter/image/sweet1.jpg"
import sweet2 from "../Multifilter/image/sweet2.jpg"
import sweet3 from "../Multifilter/image/sweet3.jpg"
import cd1 from "../Multifilter/image/cd1.jpg"
import cd2 from "../Multifilter/image/cd2.jpg"
import cd3 from "../Multifilter/image/cd3.jpg"

const items = [
    {
        name: "Juicy Beefy Cheesy Burger",
        category: "BURGER",
        img: CheesyBurger,
        pirce: "$30"
    },
    {
        name: "Crispy Chicken Bacon Cheese Burger",
        category: "BURGER",
        img: burger2,
        pirce: "$25"
    },
    {
        name: "Juicy Beef Burger",
        category: "BURGER",
        img: burger3,
        pirce: "$25"
    },
    {
        name: "Pepperoni Pizza",
        category: "PIZZA",
        img: pizza1,
        pirce: "$50"
    },
    {
        name: "Hawaiian Pizza",
        category: "PIZZA",
        img: pizza2,
        pirce: "$45"
    },
    {
        name: "Four Cheese Pizza",
        category: "PIZZA",
        img: pizza3,
        pirce: "$45"
    },

    {
        name: "Grilled Chicken Salad",
        category: "SALAD",
        img: salad1,
        pirce: "$25"
    },
    {
        name: "Tuna Sandwich",
        category: "SALAD",
        img: salad2,
        pirce: "$20"
    },

    {
        name: "Chocolate Lava Cake",
        category: "SWEETS",
        img: sweet1,
        pirce: "$15"
    },
    {
        name: "Cheesecake Delight Dessert",
        category: "SWEETS",
        img: sweet2,
        pirce: "$20"
    },

    {
        name: "Chocolate Milkshake Delight",
        category: "COLD DRINK",
        img: cd1,
        pirce: "$15"
    }
    ,
    {
        name: "Mango Smoothie Delight",
        category: "COLD DRINK",
        img: cd2,
        pirce: "$20"
    }
    ,
    {
        name: "Cocktails",
        category: "COLD DRINK",
        img: cd3,
        pirce: "$25"
    }
];
//  {
//      name: "Fruit Salad",
//      category: "SALAD",
//      img: salad3,
//      pirce: "$25"
//  },
//  {
//      name: "Blueberry Pancake Stack",
//      category: "SWEETS",
//      img: sweet3,
//      pirce: "$20"
//  },
//  ,

const itemList =[
    {
        name: "Juicy Beefy Cheesy Burger",
        category: "BURGER",
        img: CheesyBurger,
        pirce: "$30"
    }
]

export { items, itemList };