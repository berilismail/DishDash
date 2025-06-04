// import { displayMenuItems } from './displayMenu.js'; 
const menuWithIngredients = [
    {
      "id": 1,
      "title": "Pancakes with Maple Syrup",
      "img": "../media/pancakeswithmaplesyrup.png",
      "ingredients": ["Flour", "Eggs", "Milk", "Butter", "Maple Syrup"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 350,
        "protein": "8g",
        "carbs": "50g",
        "fat": "12g"
      },
      "cuisine": "American"
    },
    {
      "id": 2,
      "title": "Avocado Toast",
      "img": "../media/Avocadotoast.png",
      "ingredients": ["Sourdough Bread", "Avocado", "Chili Flakes"],
      "allergens": ["Gluten"],
      "nutrition": {
        "calories": 280,
        "protein": "6g",
        "carbs": "30g",
        "fat": "18g"
      },
      "cuisine": "American"
    },
    {
      "id": 3,
      "title": "Breakfast Burrito",
      "img": "../media/breakfastburrito.png",
      "ingredients": ["Tortilla", "Eggs", "Sausage", "Cheese", "Salsa"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 450,
        "protein": "20g",
        "carbs": "40g",
        "fat": "22g"
      },
      "cuisine": "Mexican"
    },
    {
      "id": 4,
      "title": "French Toast",
      "img": "../media/Frenchtoast.png",
      "ingredients": ["Bread", "Eggs", "Milk", "Powdered Sugar", "Berries"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 320,
        "protein": "10g",
        "carbs": "45g",
        "fat": "10g"
      },
      "cuisine": "French"
    },
    {
      "id": 5,
      "title": "Greek Yogurt Parfait",
      "img": "../media/GreekYogurtParfait.png",
      "ingredients": ["Greek Yogurt", "Granola", "Fresh Fruit"],
      "allergens": ["Dairy", "Gluten (in granola)"],
      "nutrition": {
        "calories": 200,
        "protein": "8g",
        "carbs": "25g",
        "fat": "6g"
      },
      "cuisine": "Greek"
    },
    {
      "id": 6,
      "title": "Eggs Benedict",
      "img": "../media/EggsBenedict.png",
      "ingredients": ["Eggs", "Canadian Bacon", "English Muffin", "Hollandaise Sauce"],
      "allergens": ["Gluten", "Dairy", "Eggs"],
      "nutrition": {
        "calories": 400,
        "protein": "18g",
        "carbs": "30g",
        "fat": "24g"
      },
      "cuisine": "British"
    },
    {
      "id": 7,
      "title": "Chicken Caesar Wrap",
      "img": "../media/ChickenCaesarWrap.png",
      "ingredients": ["Tortilla", "Grilled Chicken", "Romaine Lettuce", "Caesar Dressing"],
      "allergens": ["Gluten", "Dairy", "Fish (in dressing)"],
      "nutrition": {
        "calories": 350,
        "protein": "25g",
        "carbs": "30g",
        "fat": "12g"
      },
      "cuisine": "American"
    },
    {
      "id": 8,
      "title": "Caprese Sandwich",
      "img": "../media/CapreseSandwich.png",
      "ingredients": ["Ciabatta Bread", "Mozzarella", "Tomatoes", "Basil", "Balsamic Glaze"],
      "allergens": ["Gluten", "Dairy"],
      "nutrition": {
        "calories": 300,
        "protein": "12g",
        "carbs": "35g",
        "fat": "10g"
      },
      "cuisine": "Italian"
    },
    {
      "id": 9,
      "title": "Turkey Club",
      "img": "../media/TurkeyClub.png",
      "ingredients": ["Bread", "Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise"],
      "allergens": ["Gluten", "Eggs (in mayo)"],
      "nutrition": {
        "calories": 400,
        "protein": "22g",
        "carbs": "30g",
        "fat": "18g"
      },
      "cuisine": "American"
    },
    {
      "id": 10,
      "title": "Quinoa Salad",
      "img": "../media/QuinoaSalad.png",
      "ingredients": ["Quinoa", "Mixed Greens", "Cherry Tomatoes", "Lemon Vinaigrette"],
      "allergens": [],
      "nutrition": {
        "calories": 250,
        "protein": "8g",
        "carbs": "30g",
        "fat": "10g"
      },
      "cuisine": "Mediterranean"
    },
    {
        "id": 11,
        "title": "Grilled Cheese & Tomato Soup",
        "img": "../media/GrilledCheeseTomatoSoup.png",
        "ingredients": ["Bread", "Cheese", "Tomatoes", "Cream"],
        "allergens": ["Gluten", "Dairy"],
        "nutrition": {
          "calories": 450,
          "protein": "12g",
          "carbs": "40g",
          "fat": "22g"
        },
        "cuisine": "American"
      },
      {
        "id": 12,
        "title": "Fish Tacos",
        "img": "../media/FishTaco.png",
        "ingredients": ["Tortilla", "Fish Fillets", "Slaw", "Lime Crema"],
        "allergens": ["Gluten", "Fish", "Dairy"],
        "nutrition": {
          "calories": 300,
          "protein": "18g",
          "carbs": "25g",
          "fat": "12g"
        },
        "cuisine": "Mexican"
      },
      {
        "id": 13,
        "title": "Beef Steak",
        "img": "../media/BeefSteak.png",
        "ingredients": ["Beef", "Garlic Butter", "Roasted Vegetables"],
        "allergens": ["Dairy"],
        "nutrition": {
          "calories": 500,
          "protein": "45g",
          "carbs": "10g",
          "fat": "30g"
        },
        "cuisine": "American"
      },
      {
        "id": 14,
        "title": "Chicken Alfredo",
        "img": "../media/ChickenAlfredo.png",
        "ingredients": ["Pasta", "Grilled Chicken", "Alfredo Sauce", "Parmesan Cheese"],
        "allergens": ["Gluten", "Dairy"],
        "nutrition": {
          "calories": 600,
          "protein": "30g",
          "carbs": "50g",
          "fat": "25g"
        },
        "cuisine": "Italian"
      },
      {
        "id": 15,
        "title": "Shrimp Scampi",
        "img": "../media/ShrimpScampi.png",
        "ingredients": ["Shrimp", "Garlic Butter", "Linguine", "Lemon"],
        "allergens": ["Shellfish", "Gluten", "Dairy"],
        "nutrition": {
          "calories": 400,
          "protein": "25g",
          "carbs": "35g",
          "fat": "15g"
        },
        "cuisine": "Italian"
      },
      {
        "id": 16,
        "title": "Vegetable Stir Fry",
        "img": "../media/VegetableStirFry.png",
        "ingredients": ["Vegetables", "Soy-Ginger Sauce", "Rice"],
        "allergens": ["Soy"],
        "nutrition": {
          "calories": 300,
          "protein": "6g",
          "carbs": "45g",
          "fat": "8g"
        },
        "cuisine": "Asian"
      },
      {
        "id": 17,
        "title": "BBQ Ribs",
        "img": "../media/BBQRibs.png",
        "ingredients": ["Pork Ribs", "BBQ Sauce", "Coleslaw"],
        "allergens": [],
        "nutrition": {
          "calories": 700,
          "protein": "50g",
          "carbs": "20g",
          "fat": "45g"
        },
        "cuisine": "American"
      },
      {
        "id": 18,
        "title": "Lobster Bisque",
        "img": "../media/LobsterBisque.png",
        "ingredients": ["Lobster", "Cream", "Sherry", "Herbs"],
        "allergens": ["Shellfish", "Dairy"],
        "nutrition": {
          "calories": 350,
          "protein": "15g",
          "carbs": "20g",
          "fat": "25g"
        },
        "cuisine": "French"
      },

        {
          "id": 19,
          "title": "Coffee",
          "category": "HotDrinks",
          "price": 2.99,
          "img": "../media/coffee.png",
          "desc": "A steaming cup of freshly brewed hot coffee, rich in aroma and full of bold, comforting flavors.",
          "ingredients": ["Coffee Beans", "Water"],
          "allergens": [],
          "nutrition": {
            "calories": 2,
            "protein": "0g",
            "carbs": "0g",
            "fat": "0g"
          }
        },
        {
          "id": 20,
          "title": "Pumpkin Spice Latte (Autumn Special)",
          "category": "HotDrinks",
          "price": 4.99,
          "img": "../media/pumpkin.png",
          "desc": "A seasonal favorite with espresso, steamed milk, pumpkin spice syrup, and whipped cream.",
          "ingredients": ["Espresso", "Milk", "Pumpkin Spice Syrup", "Whipped Cream", "Cinnamon"],
          "allergens": ["Dairy"],
          "nutrition": {
            "calories": 380,
            "protein": "9g",
            "carbs": "52g",
            "fat": "14g"
          }
        },
        {
          "id": 21,
          "title": "Salep (Turkish Special)",
          "category": "HotDrinks",
          "price": 5.49,
          "img": "../media/salep.png",
          "desc": "A traditional Turkish hot drink made from orchid root powder, milk, and cinnamon.",
          "ingredients": ["Milk", "Salep Powder", "Sugar", "Cinnamon"],
          "allergens": ["Dairy"],
          "nutrition": {
            "calories": 250,
            "protein": "6g",
            "carbs": "35g",
            "fat": "9g"
          }
        },
        {
          "id": 22,
          "title": "Turkish Coffee",
          "category": "HotDrinks",
          "price": 3.99,
          "img": "../media/turkishcoffee.png",
          "desc": "Authentic Turkish coffee, strong and aromatic, served in a small cup.",
          "ingredients": ["Finely Ground Coffee", "Water", "Sugar (Optional)"],
          "allergens": [],
          "nutrition": {
            "calories": 10,
            "protein": "0g",
            "carbs": "2g",
            "fat": "0g"
          }
        },
        {
          "id": 23,
          "title": "Tea",
          "category": "HotDrinks",
          "price": 2.49,
          "img": "../media/tea.png",
          "desc": "A soothing cup of hot tea, available in black, green, and herbal varieties.",
          "ingredients": ["Tea Leaves", "Water"],
          "allergens": [],
          "nutrition": {
            "calories": 0,
            "protein": "0g",
            "carbs": "0g",
            "fat": "0g"
          }
        },
        {
          "id": 24,
          "title": "Pinkidy Drinkidy (Pink Refresher)",
          "category": "ColdDrinks",
          "price": 4.49,
          "img": "../media/pinkidy.png",
          "desc": "A refreshing pink-colored drink with fruity flavors and coconut milk.",
          "ingredients": ["Coconut Milk", "Strawberry Acai Base", "Ice"],
          "allergens": ["Coconut"],
          "nutrition": {
            "calories": 140,
            "protein": "1g",
            "carbs": "27g",
            "fat": "3.5g"
          }
        },
        {
          "id": 25,
          "title": "Caramel Frappuccino",
          "category": "ColdDrinks",
          "price": 5.99,
          "img": "../media/caramelfrappuccino.png",
          "desc": "A blended ice coffee drink with caramel syrup, whipped cream, and caramel drizzle.",
          "ingredients": ["Coffee", "Milk", "Caramel Syrup", "Ice", "Whipped Cream"],
          "allergens": ["Dairy"],
          "nutrition": {
            "calories": 420,
            "protein": "6g",
            "carbs": "70g",
            "fat": "14g"
          }
        },
        {
          "id": 26,
          "title": "Orange Juice",
          "category": "ColdDrinks",
          "price": 3.49,
          "img": "../media/orangejuice.png",
          "desc": "A tall glass of refreshing, fresh-squeezed orange juice, bursting with natural sweetness and citrusy goodness.",
          "ingredients": ["Fresh Oranges"],
          "allergens": [],
          "nutrition": {
            "calories": 112,
            "protein": "2g",
            "carbs": "26g",
            "fat": "0g"
          }
        },
        {
          "id": 27,
          "title": "Iced Tea",
          "category": "ColdDrinks",
          "price": 2.99,
          "img": "../media/icedtea.png",
          "desc": "A refreshing glass of chilled iced tea, perfectly brewed and served with a slice of zesty lemon for a crisp, invigorating taste.",
          "ingredients": ["Tea Leaves", "Water", "Ice", "Lemon"],
          "allergens": [],
          "nutrition": {
            "calories": 5,
            "protein": "0g",
            "carbs": "1g",
            "fat": "0g"
          }
        },
        {
          "id": 28,
          "title": "Lemonade",
          "category": "ColdDrinks",
          "price": 3.49,
          "img": "../media/lemonade.png",
          "desc": "Fresh homemade lemonade with a refreshing citrus taste.",
          "ingredients": ["Water", "Fresh Lemon Juice", "Sugar"],
          "allergens": [],
          "nutrition": {
            "calories": 120,
            "protein": "0g",
            "carbs": "30g",
            "fat": "0g"
          }
        },
        {
          "id": 29,
          "title": "Milkshake",
          "category": "ColdDrinks",
          "price": 4.99,
          "img": "../media/milkshake.png",
          "desc": "Thick and creamy milkshake available in vanilla, chocolate, or strawberry.",
          "ingredients": ["Milk", "Ice Cream", "Flavoring (Vanilla, Chocolate, or Strawberry)", "Whipped Cream (optional)"],
          "allergens": ["Dairy"],
          "nutrition": {
            "calories": 380,
            "protein": "8g",
            "carbs": "60g",
            "fat": "12g"
          } 
        },
        {
          "id": 30,
          "title": "EriHan Special Drink",
          "category": "ColdDrinks",
          "price": 9.49,
          "img": "../media/erihan.png",
          "desc": "A unique house-special cold beverage with a secret blend of flavors.",
          "ingredients": ["Secret Blend of Flavors"],
          "allergens": ["Unknown (Ask Staff)"],
          "nutrition": {
            "calories": "Varies",
            "protein": "Varies",
            "carbs": "Varies",
            "fat": "Varies"
          }
        }

      
    ];  
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const showMenuDetails = document.getElementById("item-details");
const menuItems = menuWithIngredients.find((item) => item.id === id );

showMenuDetails.innerHTML = `
  <h1>
    <img src="${menuItems.img}" style="width: 10%;"/>
    ${menuItems.title}
  </h1>
  <hr>
  <p><b>Ingredients: </b> ${menuItems.ingredients.join(", ")}</p>
  <p><b>Allergens:</b> ${menuItems.allergens.join(", ")}</p>
   <p><b>Nutrition:</b><br> ${Object.entries(menuItems.nutrition)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", <br>")}</p>
  <p><b>Cuisine:</b> ${menuItems.cuisine}</p>
`;