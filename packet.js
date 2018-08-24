// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n) {
    return n < 1 ? undefined : [1, 2].includes(n) ? 1 : fib(n - 1) + fib(n - 2);
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    let doneSorting = true;
    let maxIndex = numArray.length - 1;
    numArray.forEach((each, idx, arr) => {
        if (idx < maxIndex && each > arr[idx + 1]) {
            doneSorting = false;
            arr[idx] = arr[idx + 1];
            arr[idx + 1] = each;
        } else if (idx > 0 && each < arr[idx - 1]) {
            doneSorting = false;
            arr[idx] = arr[idx - 1];
            arr[idx - 1] = each;
        }
    });
    return doneSorting ? numArray : bubbleSort(numArray);
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let newStr = "";
    for (let char of someStr) {
        newStr = char + newStr;
    }
    return newStr;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    return someNum < 0 ? undefined : [0, 1].includes(someNum) ? 1 : someNum * factorial(someNum - 1);
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (typeof (someStr) != "string") {
        alert('ERROR: First argument must be a string');
        return undefined;
    }
    if (typeof (length) != "number" || isNaN(length)) {
        alert('ERROR: Second argument must be a number');
        return undefined;
    }
    if (typeof (offset) != "number" || isNaN(offset)) {
        alert('ERROR: Third argument must be a number');
        return undefined;
    }
    let strLength = someStr.length
    let maxStrIndex = strLength - 1;
    if (offset > maxStrIndex) {
        window.alert('ERROR: Offset index is greater than the index of the last character of the string.');
    } else if (offset + length > strLength) {
        window.alert('ERROR: The last index of the substring is greater than the last index of the original string.');
    } else if (length < 0) {
        window.alert("ERROR: The length of the substring can't be less than 0.");
    } else {
        return someStr.substr(offset, length);
    }
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (someNum.toString().indexOf('.') != -1) {
        return undefined;
    }
    return ['0', '2', '4', '6', '8'].includes(someNum.toString().split('').pop());
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let palindrome = true;
    let strLength = someStr.length;
    for (let i = 0; i < strLength / 2; i++) {
        if (someStr.charAt(i) !== someStr.charAt(strLength - i - 1)) {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character) {
    if (shape === "Square") {
        for (let i = 0; i < height; i++) {
            console.log(character.repeat(height));
        }
    } else if (shape === "Triangle") {
        for (let i = 1; i <= height; i++) {
            console.log(character.repeat(i));
        }
    } else if (shape === "Diamond") {
        for (let i = 1; i <= height; i += 2) {
            let spaceString = ' '.repeat((height - i) / 2);
            console.log(spaceString + character.repeat(i));
        }
        for (let i = height - 2; i > 0; i -= 2) {
            let spaceString = ' '.repeat((height - i) / 2);
            console.log(spaceString + character.repeat(i));
        }
    } else {
        console.log("Invalid shape");
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    Object.entries(someObj).forEach(each => {
        console.log(`${each[0]}: ${each[1]}`);
    });
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log('Original Length: ' + someArr.length);
    let newArr = someArr.slice(0);
    newArr.splice(2, 1);
    console.log('New Length: ' + someArr.length);
    return newArr;
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log('Original Length: ' + someArr.length);
    let splicedElt = someArr.splice(2, 1);
    console.log('New Length: ' + someArr.length);
    return splicedElt;
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age) {
    return {
        name: name,
        age: age
    }
}


// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let eltContainsUSA = document.querySelector('[data-customAttr="USA"] + span');
    console.log(eltContainsUSA.innerText);
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let people = document.querySelectorAll('.empName');
    people.forEach(each => {
        if (each.nextElementSibling.innerText === "Sales") {
            console.log(each.innerText);
        }
    });
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let anchorElts = document.querySelectorAll('a > span');
    anchorElts.forEach(each => {
        console.log(each.innerText);
    });
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    let checkedOptions = document.querySelectorAll('select[name="skills"] option:checked');
    checkedOptions.forEach(each => {
        let test = `Value: ${each.getAttribute("value")}\n` +
            `Contents: ${each.innerText}`
        console.log(test);
    });
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    let elts = document.querySelectorAll('[data-customAttr]');
    elts.forEach(each => {
        console.log(`Value: ${each.getAttribute("data-customAttr")}\n` +
            `Element: ${each.nodeName}`);
    });
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
input1.addEventListener("change", sumInputs);
input2.addEventListener("change", sumInputs);

function sumInputs() {
    let sumElt = document.querySelector('#sum');
    let float1 = parseFloat(input1.value);
    let float2 = parseFloat(input2.value);
    let output = '';
    if (isNaN(float1) || isNaN(float2)) {
        output = 'Cannot add';
    } else {
        output = float1 + float2;
    }
    sumElt.innerText = output;
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
const skills = document.querySelector('select[name="skills"]');
skills.addEventListener("change", confirmSkill);

function confirmSkill() {
    let skill = document.querySelector('select[name="skills"] option:checked');
    alert(`Are you sure ${skill.innerText} is one of your skills?`);
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
const colorInputs = document.querySelectorAll('[name="favoriteColor"]');
colorInputs.forEach(each => {
    each.addEventListener("change", newFavoriteColor);
});

function newFavoriteColor() {
    let selectedColor = document.querySelector('input[name="favoriteColor"]:checked');
    let previousColor = selectedColor.getAttribute('previous-color');
    if (previousColor) {
        alert(`So you like ${selectedColor.value} more than ${previousColor} now?`);
    }
    colorInputs.forEach(each => {
        let nextElt = each.nextSibling;
        each.setAttribute('previous-color', selectedColor.value);
        if (each.parentNode.nodeName === "SPAN") {
            each.parentNode.style.backgroundColor = selectedColor.value;
        } else {
            let span = document.createElement('span');
            span.style.backgroundColor = selectedColor.value;
            each.parentNode.replaceChild(span, each);
            span.appendChild(each);
        }
    });
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
const employees = document.querySelectorAll('.empName');
employees.forEach(each => {
    each.addEventListener("mouseover", hideName);
});

function hideName() {
    if (this.style.opacity === "0") {
        this.style.opacity = 1;
    } else {
        this.style.opacity = 0;
    }
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
displayCurrentTime();

function displayCurrentTime() {
    let today = new Date();
    let h = today.getHours();
    let amPm = h < 12 ? 'AM' : 'PM';
    h = h > 12 ? h - 12 : h;
    h = h === 0 ? 12 : h;
    let m = today.getMinutes();
    m = m < 10 ? `0${m}` : m;
    let s = today.getSeconds();
    s = s < 10 ? `0${s}` : s;
    let currentTime = document.querySelector('#currentTime');
    currentTime.innerText = `${h}:${m}:${s} ${amPm}`;
    setTimeout(displayCurrentTime, 500);
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
const helloWorld = document.querySelector('#helloWorld');
helloWorld.addEventListener("click", () => {
    setTimeout(() => {
        helloWorld.style.color = getRandomColor();
    }, 3000)
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
    if (node) {
        func(node);
        node.childNodes.forEach(each => {
            walkTheDOM(each, func);
        });
    }
}