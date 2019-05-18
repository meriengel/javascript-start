// Sample of creating, instantiating, and using an object

//sample object Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// sample instantiation of two objects
var obj1 = new Book("one", "Ollie", 234);
var obj2 = new Book("two", "Nessie", 300);

//sample of accessing individual parameters of object
// demo of dot notation
document.getElementById("sample1").innerHTML = obj1.title + "\n" + obj1.author + "\n" + obj1.pages;
// demo of bracket notation
document.getElementById("sample2").innerHTML = obj2['title'] + "\n" + obj2['author'] + "\n" + obj2['pages'];


/*
    Create an object to describe movies or video games or something similar.
    Include a constructor for the object
    Have at least 4 parameters to pass into your object

    Instantiate your obect four times using the variables
    obj1, obj2, obj3, and obj4

    Display the contents of your object using .notation for two
    and bracket notation for the other two
    use the sample above as a guide, use the object1 - object4
    paragraphs for the display

*/






// Create an example of a closure
// pass in 3 variables, assign the variables
// use a function inside your function (closure) to add the variables together
// call the inner function from inside the outer function
// display the total
