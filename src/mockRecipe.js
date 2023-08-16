export const MOCK_RECIPE = {
  title: "Cherry Balsamic Chicken",
  subtitle:
    "with Almond Couscous and Roasted Carrots in a Cherry Balsamic Sauce",
  ingredients: ["Chicken Breast", "Israeli Coucous"],
  extraInfo: {
    prepTime: "15 min",
    totalTime: "35 min",
    calories: "800",
  },
  image:
    "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_30,w_2600/hellofresh_s3/image/60eeee4c1afbf376a85e7a86-6a9f8caa.jpg",
  materials: ["Peeler", "Small Pot", "Large Skillet", "Baking Sheet"],
  nutritionFacts: {
    calories: 6280,
    fat: 28,
  },
  notes: ["SUPER yum result"],
  steps: [
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-a3bf2468.jpg",
      instruction: "Preheat oven to 425 degrees...",
    },
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-0b1385f7.jpg",
      instruction: "Combine ingredients in saucepan...",
    },
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-7c4b9c94.jpg",
      instruction: "Roast carrots on sheet pan...",
    },
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-ef547c85.jpg",
      instruction: "Cook meat in oiled skillet...",
    },
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-b901f1c6.jpg",
      instruction: "Reduce sauce to thicken...",
    },
    {
      image:
        "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/60eeee4c1afbf376a85e7a86/step-f5408061.jpg",
      instruction: "Plate for a delish homemade dinner...",
    },
  ],

  // add steps either as total or individual!
};

// const handlePrepTimeChange = (e) => {
//     setRecipe({
//         ...recipe,
//         extraInfo: {
//             prepTime: e.target.value;
//         }
//     })
// }

// <li>{recipe.extraInfo.prepTime}</li>
