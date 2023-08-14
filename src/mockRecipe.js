export const MOCK_RECIPE = {
    title: 'Cherry Balsamic Chicken',
    subtitle: 'with Almond Couscous and Roasted Carrots in a Cherry Balsamic Sauce',
    ingredients: ['Chicken Breast', 'Israeli Coucous' ],
    extraInfo: {
        prepTime: '15 min',
        totalTime: '35 min',
        calories: '800'
    },
    image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_30,w_2600/hellofresh_s3/image/60eeee4c1afbf376a85e7a86-6a9f8caa.jpg',
    materials: ['Peeler', 'Small Pot', 'Large Skillet', 'Baking Sheet'],
    nutritionFacts: ['Calories', 'Fat', 'Carbohydrate'],
    notes: ['SUPER yum result'],
    // add steps either as total or individual!
}

// const handlePrepTimeChange = (e) => {
//     setRecipe({
//         ...recipe,
//         extraInfo: {
//             prepTime: e.target.value;
//         }
//     })
// }

// <li>{recipe.extraInfo.prepTime}</li>