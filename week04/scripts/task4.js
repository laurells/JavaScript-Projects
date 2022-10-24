/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myName = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Laurels Echichinwo",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/rsz_img_e2500.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Rice", "Beans"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["Playing game", "Coding", "Reading"],
// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
       place = "Nigeria",
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
        "Lagos", "Port Harcourt"
    ],
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = myName.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myName.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myName.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let myFoods = myName.favoriteFoods;
myFoods.forEach((food) => {
    let foodListItem = document.createElement('li');
    foodListItem.textContent = food;
    document.getElementById('favorite-foods').appendChild(foodListItem);
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let myHobbies = myName.hobbies;
myHobbies.forEach(hobbies => {
    let hobbyListItem = document.createElement('ul');
    hobbyListItem.textContent = hobbies;
    document.getElementById('hobbies').appendChild(hobbyListItem);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
let myPlace = myName.placesLived;
myPlace.forEach(place => {
    let placeListItem = document.createElement('dt');
    placeListItem.textContent = place;
    document.getElementById('places-lived').appendChild(placeListItem);
});
// - Create an HTML <dd> element and put its length property in the <dd> element
let myPlaces = myName.morePlacesLived;
myPlaces.forEach(places => {
    let placesListItem = document.createElement('dd');
    placesListItem.textContent = places;
    document.getElementById('places-lived').appendChild(placesListItem);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
