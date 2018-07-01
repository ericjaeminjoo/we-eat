const cartObject =  [
                        {
                        id: 10,
                        name: "Chicken Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "13.00",
                        qty: 3,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 11,
                        name: "Beef Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "11.00",
                        qty: 1,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 12,
                        name: "Shrimp Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "2.00",
                        qty: 2,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 13,
                        name: "Salmon Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "4.00",
                        qty: 1,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 14,
                        name: "Tofu Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "5.00",
                        qty: 1,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 15,
                        name: "Pineapple Chicken Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "13.00",
                        qty: 4,
                        image_url: "http://lorempixel.com/640/480/food"
                        },
                        {
                        id: 16,
                        name: "Vegetarian Teriyaki",
                        description: "With steamed rice and vegetables.",
                        price: "6.00",
                        qty: 1,
                        image_url: "http://lorempixel.com/640/480/food"
                        }
                    ];

// Create a function to subtotal each item

let cartTotalFunc = () => {
    let subtotal = 0;
    let total = 0;
    const taxe = 1.15;
    for (let elementItem of cartObject) {
        console.log(elementItem.name)
        console.log(`price------ ${elementItem.price}`)
        console.log(`qty-------- ${elementItem.qty}`)
        subtotal += (elementItem.price * elementItem.qty)
    }
console.log(`Subtotal: $${subtotal}`);
total = Math.round(subtotal * taxe * 100) / 100;
console.log(`Total: $${total}`);
};

cartTotalFunc();
