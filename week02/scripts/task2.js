/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Laurels Echichinwo Jr.";


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = "2022";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPicture = "images/rsz_img_e2500.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", myPicture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ["Rice", "Beans", "Yam"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = favoriteFoods.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
const favoriteFood = ["Noodles"];

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(...favoriteFood);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = favoriteFoods.join(", ");

// Step 6: remove the first element in the favorite foods array
favoriteFoods.splice(0, 1);

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favoriteFoods.join(", ");

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favoriteFoods.join(", ");


