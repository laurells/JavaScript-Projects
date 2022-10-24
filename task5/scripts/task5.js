/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const newDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let today;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
today = newDate.getDay() ;

// Step 4: Declare a variable to hold a message that will be displayed
let message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

if (today >= 0 && today <= 5) {
    message = "Hang in there!";
} else {
    message = "Woohoo! It is the weekend";
};
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let messageOne;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (today) {
    case 0:
        messageOne = "Sunday";
        break;
    case 1:
        messageOne = "Monday";
        break;
    case 2:
        messageOne = "Tuesday";
        break;
    case 3:
        messageOne = "Wednesday";
        break;
    case 4:
        messageOne = "Thursday";
        break;
    case 5:
        messageOne = "Friday";
        break;
    case 6:
        messageOne = "Saturday";
        break;
    default:
        messageOne = "Unknown - " + today;
        break;
};
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = messageOne;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
    templeList = temples;
    temples.forEach((temple) => {
        // - Creates an HTML <article> element
        let article = document.createElement("article");
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        article.appendChild(templeName);
        // - Creates an HTML <h4> element and add the temple's location property to it
        let location = document.createElement("h4");
        location.textContent = temple.location;
        article.appendChild(location);
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        let dedicated = document.createElement("h4");
        dedicated.textContent = temple.dedicated;
        article.appendChild(dedicated);
        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        article.appendChild(image);
        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        // - Appends the <article> element to the HTML element with an ID of temples
        document.querySelector("#temples").appendChild(article);
    });
};

// Step 3: Create another function called getTemples. Make it an async function.
const getTemples = async () => {
    // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
    templeArray = await response.json();
    output(templeArray);
};
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly
getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };
  
// Step 8: Declare a function named sortBy that does the following:
const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "templeNameAscending":
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 < templeName2) return -1;
            else if (templeName1 > templeName2) return 1;
            else return 0;
          })
        );
        break;
      case "templeNameDescending":
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
      default:
        // using ternary operators
        output(
          templeList.sort((temple1, temple2) =>
            temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
              ? 1
              : temple2.templeName.toLowerCase() >
                temple1.templeName.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
  };
  

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function 

document.querySelector("#sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples?
// This will require changes to both the HTML and the JavaScript files
