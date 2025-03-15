"use strict";

// * Data Types
/*
    ? Primitive
        - Number       
        - String       
        - Boolean      
        - Undefined
            Represents the absence of value unintentionally like (uninitialized variable || missing property).

            ! Important
                Number(undefined) => NaN

        - Null
            Represents the absence of value intentionally.
            ! Important
                Number(null) => 0
                typeof null => object
            
        After ES6
            - BigInt       
            - Symbol      

    ? Non-Primitive
        - All are Objects
        - Object  
            - Function
                type of function => function    

            - Array      
                type of array => object
            - Date         
            - Set          
            - Map
*/

// * Primitive VS Reference
/*
    Memory Management in JavaScript:
        Stack:
            The stack is used for static memory allocation.
            It stores:
                Primitive values (e.g., number, boolean, null, undefined).
                References (pointers) to objects and strings in the heap.

        Heap:
            The heap is used for dynamic memory allocation.
            It stores objects and complex data types, including strings because they can vary in size.


    * Primitive Types
        Primitive values are copied by value, not by reference.
            let x = 10;
            let y = x;
                When you assign x to y, JS takes a copy of the value of x and assigns it to y..

            x = 20;
                This change only affects x.
        
        - String is special type of primitive, it's immutable (can't be changed)
        Any change to the string will result into creating new string.

            ? Example:
                let name = "Nael";
                    (name) is an reference to a chunk of memory in the heap where the string "Nael" is stored.

                const nameCopy = name;
                    (nameCopy) is also a Reference to the same chunk of memory where the string "Nael" is stored.

                name = "Max";
                    Because strings are immutable in JavaScript, reassigning (name) does not modify the existing string.
                    Instead, (name) now points to a new chunk of memory where the string "Max" is stored.

                console.log(name); // Max
                console.log(nameCopy); // Nael


    * Reference Types
        ? Example
            const nael = {
                firstName: "Nael",
                lastName: "Muhamed",
                age: 27,
            };
                (nael) is a variable that lives on the stack, and it holds a reference/pointer to a chunk of memory in the heap where the actual object is stored.

            const me = nael; (Shallow Copy)
                (me) is another variable that also lives on the stack. It holds the same reference as (nael), pointing to the same chunk of memory in the heap where the object is stored.

            me.firstName = "Max";
                When you modify (me.firstName), you are accessing the object in the heap via the reference.
                Since both (nael) and (me) are pointing to the same memory address, the change affects the same single object they both reference.

            console.log(nael);
                { firstName: "Max", lastName: "Muhamed", age: 27 }

            console.log(me); 
                { firstName: "Max", lastName: "Muhamed", age: 27 }

*/

// * Type Coercion
/*
    Is a process where JS converts values from one data type to another.

    * Examples

        ? Number to string
            (+) operator (Concatenation)
                5 + "5"
                    10 => 5 is implicitly converted to String

                undefined + "5"
                    "undefined5"
                
                null + "5"
                    "null5"

        ? String to Number
            (- / * % **)
                5 * "5"
                    25 => "5" is implicitly converted to Number

            (==) || (!=) Abstract/Loose Equality
                5 == "5"
                    True => "5" is implicitly converted to number.

        ? Boolean to Number
            true * 5
                5 => true is implicitly converted to 1.

        ! Special
            undefined == null
                True => Both represents the absence of value, But (undefined) is unintentionally (unassigned of a variable || missing property), On the other hand (null) is intentionally.

                We can consider it as Boolean(undefined) == Boolean(null)
*/

// * Short Circuiting (&& ||)
/*
    * Logical operators (&& , ||)
        ? Falsy Values In JS
            1. False
            2. 0
            3. Empty string ""
            4. Null
            5. Undefined
            6. NAN (Not A Number)
                type of NaN => Number
            ! Anything else is truthy value.
        
        - Use any data type
        - Return any data type
        - short circuiting
            ||
                ? The || (logical OR) operator will return the first truthy value it encounters. If all operands are falsy, it'll return the last operand.

                ? If the first operand is truthy, No evaluation of the other operands.

                * Example 1
                    console.log(3 || "Nael"); // 3
                    console.log("" || "Nael"); // Nael
                    console.log(true || 0); // true
                    console.log(undefined || null); // null
                    console.log(undefined || 0 || "" || "Hello" || 13 || null); // Hello

                * Example 2 (Setting Default value)
                    const restaurant = {
                        // mainCourse: "Stick",
                    };

                    const mainCourse = restaurant.mainCourse ? restaurant.mainCourse : "";
                        INSTEAD
                    const mainCourse = restaurant.mainCourse || "";

            
                && 
                    ? The && (logical AND) operator will return the first falsy value it encounters. If all operands are truthy, it'll return the last operand.

                    ? If the first operand is falsy, No evaluation of the other operands.

                    * Example 1
                        console.log(13 && "Hello" && true); // true
                        console.log(13 && "Hello" && true && null && undefined); // null

                    * Example 2 (Executing code of the second operand if the first one is true)
                        const restaurant = {
                            orderPizza: function () {
                                console.log("Ordering pizza!");
                            },
                        };

                        if (restaurant.orderPizza) {
                            restaurant.orderPizza();
                        }
                            INSTEAD
                        restaurant.orderPizza && restaurant.orderPizza();
*/

// * Post & Pre Increment
/*
    Post Increment (a++)
        - Use the value of (a) first, then increment it.
        * Example
            let a = 5;
            let b = a++; // b is assigned the value 5, then a becomes 6.

    Pre Increment (++a)
        - Increment a first, then use the value.
        * Example
            let a = 5;
            let b = ++a; // a becomes 6, then b is assigned the value 6.

*/

// * Switch
/*
    switch (expression) {
        case valueOne:
            ? Code that will be executed
            break;

        case valueTwo:
            // Code
            break;
        default:
            break;
    }
    - Is useful when checking a single expression against multiple values.
    - switch uses strict equality (===) for comparisons (expression === valueOne).

    ? Understanding “Fall-Through” Behavior
        - If you don’t use break, the code will executes the next cases even if they don’t match.
        - It is useful for cases where multiple values need to trigger the same behavior.

        * Example
        switch (char) {
            case "A":
                    ? If this case met the criteria (char === "A")
                        Any code here will be executed.
                        Since there is no break, the next case will be executed
            case "E":
            case "I":
            case "O":
            case "U":
                console.log("Vowel");
                break;

            default:
                console.log("Consonant");
                break;
        }
*/

// * Immediately Invoked Function Expressions (IIFE)
/*
    * Example 1
    (function () {
	    console.log("This function will never be called again");
    })();

    * Example 2
    (() => console.log("This function will never be called again"))();

    * Benefits
        ? Encapsulation & Privacy
            - we need to protect our variables from accidentally being overwritten by other parts of the program.

                * Case 1
                    (function(){
                        const privateInfo = "Private Info"; // PRIVATE
                        let privateInfo = "Private Info"; // PRIVATE
                            ? Functions are block-scoped in "strict" mode.
                            ? let and const variables are block-scoped.

                        var privateInfo = "Private Info"; // PRIVATE
                            ? Ends up in the closest function scope.
                    })();
                
                * Case 2 (If/For/While)
                    {
                        const privateInfo = "Private Info"; // PRIVATE
                        let privateInfo = "Private Info"; // PRIVATE
                            ? let and const variables are block-scoped.

                        var notPrivate = "NOT Private Info" // Accessible
                            ? Ends up in the closest function scope.
                            ? If there is no function scope, it ends up in the global scope and a property at 'window' object is created for var variable.
                    }

*/

// * Scoping
/*
    - There are 3 types of scope in JavaScript:
        1. Global Scope
        2. Function Scope
        3. Block Scope (If statement & For loop);

        (let, const, var)
            [1] (let & const) variables are block-scoped.
                ? Notes
                    let and const inside a function are scoped to that function.
                    let and const inside a block (even within a function), they are further scoped to that block only.

            [2] Variables declared with (var)
                1. Inside function
                    - End up in the closest function scope.

                2. Inside block-scope 
                    - Escapes to the closest function scope.
                    - If there is no function scope
                        Ends up in the global scope and a property at 'window' object is created for var variable.

                2. Global scope
                    - A property at 'window' object is created for var variable.

    - Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
    - When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called variable lookup.
*/

// * Hoisting
/*
    Makes some types of variables/function declaration accessible/usable before they actually declared
    Hoisting is limited to the scope in which the variable or function is declared.
    All declarations are HOISTED but 

    * Behind The Scene:
        ? Before Execution, code is scanned for variables declarations, and for each variable, a new property is created in the variable environment object

        ? Function declaration
            - Initial value: actual function

        ? var variables
            - Initial value: undefined

        ? let & const variables
            - Initial value: uninitialized
            
            * Example:
                if (myName === "Na'el") {
                    TDZ (Temporal Dead Zone) begins for `job`
                    console.log(job); ReferenceError: "Can't access job before initialization" => Means it's HOISTED.
                    const job = "Back-End Developer"; TDZ ends
                }

        ? Function expression & Arrow
            - Depends on (var, let, const)

        ? Class Declarations
            - Initial value: uninitialized
*/

// * Comparing (let, const, var)
/*
    let & const
        Scope: block-scoped.
        Hoisted: Initial value => uninitialized
        Redeclaration: No
        
        (+) const
            Must be initialized
            Reinitialization: Can't be reinitialized using (=) operator 
        
    var
        Scope: function-scoped.
            Ends up in the closest function scope.
            If there is no function scope
                It ends up in the global scope and a property at 'window' object is created for var variable.
        Hoisted: Initial value => undefined
        Redeclaration: Yes
        Reinitialization: Yes
*/

// * Local Storage & Session Storage
/*
    - Both are part of the Web Storage API and store data in key-value pairs, with all values stored as strings.

    ? Local Storage
        - Data persists even if the user closes the browser or reopens a new tab.
        - Ideal for long-term storage, such as user preferences, settings.
        - 5 : 10 mb

    ? Session Storage
        - Data is cleared when the tab or window is closed.
        - Best for temporary storage needs, like form data.

    * Methods & Properties
        - setItem(key, value)
        - getItem(key)
        - removeItem(key)
        - clear()
        - length

    JSON.stringify()
        - Converts a JS value to JSON.
        - Params:
            [1] JS value, usually an object or array, to be converted.

    JSON.parse()
        - Converts a JSON into an object.
        - Params:
            A valid JSON string.
*/

// * DOM
/*
    ? DOM (Document Object Model):
        - Structured representation of HTML (tree), allows JS to access (HTML elements & CSS) to manipulate them.
        - As soon as HTML loads, DOM is created by the browser.
        - DOM methods and properties are NOT part of JS BUT WEB APIS (Libraries written in JS) and JS can interact with them.

    - document : Special object that is the entry point to the DOM.

    - In DOM every part of an HTML document is represented as a node.
    - Each node is represented by JS object

    Types Of nodes:
        [1] Element Nodes
            - <div> <p> <span>
            - They have properties and attributes and can contain other nodes as children.

        [2] Text Nodes
            - <p> Lorem </p>
            - Represent the text inside an HTML element.
            - They can't have children

        [3] Comment Nodes
            <!-- Comment -->

        [4] Document Node
            - The root node of an HTML document
                document.documentElement <html>
                    document.head <head>
                    document.body <body>

            
        [5] DocumentType Nodes
            - Represent the <!DOCTYPE ...> declaration.
            - It’s accessed by document.doctype.


    * Selecting
        - document.doctype <!DOCTYPE html>
        - document.documentElement <html>
        - document.head <head>
        - document.body <body>
        - document.title <title>
        - document.links
            All <a> elements in a document with a value for the href attribute.
        - document.forms
            All <form> elements in a document
        - document.images
            All <img> elements in a document


        - document.querySelectorAll(Same Selector as in CSS)
            - Returns STATIC NodeList
                STATIC : Doesn't update automatically with DOM changes.
                NodeList: Iterable object (can be looped over).
                    ? We can convert an iterable object into an array using spread operator [...iterable] OR Array.from(iterable)

        - document.querySelector()
            - Returns STATIC Element.

            ! NOTE
                Actually we can use querySelector()/querySelectorAll() on elements as well.
                    const h1 = document.querySelector("h1");
                    h1.querySelectorAll("span"); // This returns all <span> elements that are descendants of the <h1> element, no matter how deep they are.

        - document.getElementById("id");
            - Returns STATIC Element.


        - document.getElementsByTagName("div");
            - Returns LIVE HTMLCollection 

        - document.getElementsByClassName("class-name")
            - Returns LIVE HTMLCollection.
            
        - document.getElementsByName("nameAttribute")
            - Returns LIVE nodeList.


        ? Key differences between NodeList/HTMLCollection
            HTMLCollection:
                - Returns Only Element Nodes
                - Always LIVE (Any change in the DOM "adding or removing HTML elements" will automatically update the collection.)

            NodeList:
                - Returns All Nodes (ElementNode/TextNode/CommentNode)
                - STATIC (Doesn't update automatically with DOM changes) OR LIVE

            BOTH:
                Can access any element inside using index.
                Convert to Array using spread operator [...] OR Array.From()
                
        


    * Creating & Inserting & Deleting
        [1] Creating
            - document.createElement("tagName")

        [2] Inserting
            - document.insertadjacentHTML(
                - 1st Param [Position]:
                    "beforebegin"
                        Before the element. Only valid if the element is in the DOM tree and has a parent element.

                    "afterbegin"
                        Just inside the element, before its first child.

                    "beforeend"
                        Just inside the element, after its last child.

                    "afterend"
                        After the element. Only valid if the element is in the DOM tree and has a parent element.

                - 2nd Param [HTML]:
                    The HTML content as a string.
            )

            - document.insertAdjacentElement(position, element)

            - prepend(...nodes)
                Inserts nodes before the first child of node.
                ? Example:
                    const paragraph = document.createElement("p");
                    paragraph.classList.add("bg-info", "text-center");
                    paragraph.innerHTML = `Lorem <button class="btn btn-primary"> Click </button>`;
                    document.querySelector(".test").prepend(paragraph);

            - append(...nodes)
                Inserts nodes after the last child of node.
                ? NOTE
                    Using append() & prepend() on the same element, results into relocating the element rather than duplicating it.

            - before(...nodes)
                Inserts nodes just before node [sibling].

            - after(...nodes)
                Inserts nodes just after node [sibling].

        [3] Deleting
            - remove()
                Removes node
                    childNode.remove();
                The old way:
                    childNode.parentNode.removeChild(childNode);

    * Styles (Inline style)
        ? Setting Inline style
            [1] element.style.backgroundColor = "#09c" 
            
            [2] element.style.cssText = "background-color: #09c !important";

            [3] element.style.setProperty("background-color", "#09c", "important"); 

            - Changing CSS variables
                document.documentElement.style.setProperty("--variableName", "value");

        
        ? Getting The Style of the Element
            getComputedStyle(element) 

    * Attributes
        - element.(src/alt/className/id)
            These are standard attributes for an <img> element, unlike custom attributes like data="My Data" results into undefined.
        - element.alt = "Value";

        - element.getAttribute("attributeName")
        - element.setAttribute("attributeName", "Value")

        ? Note
            element.src/href => absolute path.
            element.getAttribute("src/href") => relative path.

        * Special attributes (data-) stored at dataset.
            <img src="img/logo.png"
            alt="Bankist logo"
            class="nav__logo"
            id="logo"
            designer="Jonas"
            data-version-number="3.0"/>
            document.querySelector(".nav__logo").dataset.versionNumber;

    * Classes
        classList property
            [1] remove("className without '.'")
            [2] add("class1", "class2")"
            [3] contains()
            [4] toggle("className")
                if (className) exists, it removes it, and if NOT it adds it.
            [5] replace()


    
    * Events
        ? How to listen to events ?
            [1] element/document(In case of a global event)
                .addEventListener("event", callbackFunction(e){
                    // LOGIC
                })

            [2] "OLD School" element/document
                .onclick/onmouseenter = callbackFunction(e){
                    // LOGIC
                }

            [3] "NOT Recommended" <h1 onclick="alert(`You're reading the heading XD`)"> </h1>

        ? How to remove event listener ?
            element.removeEventListener("sameEvent", sameCallbackFunction)

            * Example 1 (Listening to an event ONCE):
                const h1 = document.querySelector('h1');
                const alertH1 = function (e) {
                    alert("You're reading the heading XD");
                    h1.removeEventListener('mouseenter', alertH1);
                };
                h1.addEventListener('mouseenter', alertH1);

            * Example 2 (Listening to an event then removing it after 5 seconds):
                const h1 = document.querySelector('h1');
                const alertH1 = function (e) {
                    alert("You're reading the heading XD");
                };
                h1.addEventListener('mouseenter', alertH1);
                
                setTimeout(() => {
                    h1.removeEventListener('mouseenter', alertH1);
                }, 5000);

        ? Event Object
            We can capture the event by making the event handler to take a param, this param will be the event object.
                element/document.addEventListener("event", function (event) {})

            event.target:
                Refers to the actual element that fired the event, it could be NOT the element that the event listener is attached to.

            this (inside event listener):
                Refers to the element the event listener is attached to.

            event.currentTarget:
                Refers to the element that the event listener is currently attached to.
                (currentTarget === this) => TRUE

        ? Event Propagation Stages
            Capturing Phase:
                The event starts at the root of the DOM tree and works its way down toward the target element.

            Target Phase: 
                When the event reaches the target element itself, the event handler (callBackFunction) for that element is triggered.

            Bubbling Phase:
                After reaching the target, the event bubbles back up to the root, triggering all event handlers of the parents target elements up to the document's root [Default Behavior].

            ? Note
                By passing { capture: true } or simply true as the third argument in addEventListener, the event handler will be triggered as the event propagates down the DOM during the capturing phase, before it reaches the target element.

                So In a nutshell
                    - When multiple elements listen for the same event (like a click), each element can choose to handle the event during the capturing phase or the bubbling phase.

                    - If you want an element’s event handler to run during the capturing phase, pass { capture: true } (or just true) as the third parameter in addEventListener. (cases where you want parent elements to react before the target element.)

                    If you don’t pass { capture: true }, the default behavior is that the handler will be triggered during the bubbling phase.

            - We can stop the propagation of an event using:
                - Stopping Propagation isn't a good idea in general.
                e.stopPropagation()
                    Prevents the event from propagation in either the capturing or bubbling phase.


        ? Event Delegation
            1. Add an event listener to common parent element
            2. Determine what element triggered the event (e.target)

            - Example:
                const navLinks = document.querySelector('.nav__links');
                navLinks.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (e.target.classList.contains('nav__link')) {
                        const id = e.target.getAttribute('href');
                        if (id === '#') return;
                        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
                    }
                });

                ? Notes
                    Target Element Handling:
                        The e.target refers to the specific element where the click occurred. When this click bubbles up to the parent "nav__links", the parent’s event handler is triggered.

                    Delegation Efficiency:
                        No Direct Event on .nav__link:
                            Despite not attaching an event handler directly to "nav__link" elements, the parent "nav__links" effectively handles their clicks.

                        Dynamic Content Support:
                            Any new "nav__link" added dynamically to "nav__links" will automatically have this functionality, as the event is bound to the parent.
                    

        ? Event Notes
            ? With inputs what to use keyup/keydown/keypress or input ?
                keydown: Fired when a key is pressed down.
                keyup: Fired when a key is released.
                keypress: Fired when a key is pressed and produces a character.
                input: Fired when the value of the input changes.

                The problem with keyup OR keydown
                    - It fires when the user releases/presses a key like (ENTER, CTRL, ALT, ESC, DELETE, etc.), these keys are not related to the input value, but still fire keyup/keydown event which costs performance.

                The problem with keypress
                    - Using mouse copy&paste won't trigger the keyup/keydown/keypress event DESPITE the change of the input value.
            So with inputs "input" is the way to go

        
            ? What is the difference between submit & click ?
                Submit:
                    - Triggered when the entire form is submitted.
                    - Can be initiated by:
                        [1] Clicking a button with type="submit".
                        [2] Pressing the "Enter" key in a form input field.

                    - Associated with the <form> element, not a specific button.

                    - Used to handle form submission logic.

                Click:
                    - Triggered only when a specific button (or clickable element) is clicked.

                    - Associated with the <button> or clickable element itself.

                ? Notes
                    - When a form is submitted, the page will reload, to prevent this, we use event.preventDefault()

                    [1] When you press the "Enter" key on an input or textarea within a form that contains a submit button, this will fire a click event on that button.

                    [2] When you press the "Enter" key on focused button, this will fire a click event on that button.

            ? What is the difference between mouseenter/mouseleave & mouseover/mouseout ?
                The difference is how they handle event propagation, mouseenter/mouseleave don't bubble up, unlike mouseover/mouseout.

            ? Important Events
                (hashchange) event
                    Fires when the fragment identifier (hash) of the URL changes.
                    It does not reload the page.
                    The event object contains:
                        event.oldURL → The previous URL before the hash changed.
                        event.newURL → The updated URL after the hash changed.

                    When to Use hashchange?
                        Implementing simple client-side routing.
                        Detecting and responding to URL changes without reloading.

                    We can also access the hash using (location.hash)



    * Dom Traversing
        Selecting elements relative to another element
        
        ? Going downwards [child]
            [1] childNodes
                Returns a LIVE NodeList of all child nodes (elementNode, textNode, commentNode)

            [2] children
                Returns HTMLCollection of the DIRECT children.

            [3] firstElementChild
                Returns the first child element (Only of type ElementNode) or null.

            [4] lastElementChild
                Returns the last child element (Only of type ElementNode) or null.

        ? Going upwards [parent]
            [1] parentNode
                Returns the parent node.

            [2] parentElement
                Returns the parent element (Only of type ElementNode). or null (document.documentElement.parentElement === null).

            [3] closest("CSS selector")
                Returns the closest ancestor (including itself) that matches the selector, or null if no match is found.

        ? Going sideways [sibling]
            [1] nextElementSibling
                Returns the next sibling element (Only of type ElementNode) or null.

            [2] previousElementSibling
                Returns the previous sibling element (Only of type ElementNode) or null.

            [3] nextSibling
                Returns the next sibling Node (textNode, commentNode, elementNode) or null.

            [4] previousSibling
                Returns the previous sibling Node (textNode, commentNode, elementNode) or null.


    * Intersection Observer API
        Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or viewport.
        const observer = IntersectionObserver(
            [1] Callback(entries, observer) {
                This function will be called when the target element intersects with the root element at the specified threshold value.
                
                This function will be called with two arguments:
                    entries: An array of IntersectionObserverEntry objects, each representing the intersection of a target element with a root element.
                    observer: The IntersectionObserver object itself.
            }

            [2] options : {
                root: The ancestor element that we want the observer object to observe when intersecting with the target element, defaults to the viewport.,

                threshold: A value (or array of values) defining when the callback is triggered based on the intersection ratio of the target element. (how much of the target element is visible)
                    threshold: 0 => Trigger the observerCallback immediately once the target element intersects with the root element.
                    threshold: 0.5 => Trigger the observerCallback when 50% of the target element is visible.
                    threshold: 1 => Trigger the observerCallback when the target element is fully visible.
                
            }

            [3] rootMargin : 
                (Extending or Shrinking) the observation area around the root element (px/%).
        );

        observer.observe(targetElement);

        observer.unobserve(targetElement);
        observer.disconnect()

        ? NOTE
            When you create an observer and observe an element, the callback is IMMEDIATELY invoked even without intersecting with the root element providing the initial state of the observed target.

    *  Lifecycle Dom events
        [1] DOMContentLoaded: (document)
            Triggered when the HTML has been fully parsed, and the DOM tree is complete. This does not wait for external resources like images or stylesheets to load.


        [2] load: (window)
            Triggered when the entire page (including images, styles, and other resources) has finished loading.

        [3] beforeunload: (window)
            Triggered when the user is about to leave the page, giving an opportunity to show a confirmation dialog.
            Example:
                window.addEventListener('beforeunload', function (event) {
                    event.preventDefault();
                    event.returnValue = '';
                });


    * Script Loading
        [1] At the end of the <body>
            - Scripts are fetched and executed after the HTML has been completely parsed.
            - Usage:
                if you need to support older browsers, (Async & Defer) modern features.

        [2] Async Script in the <head>
            - Scripts are fetched Asynchronously and executed Immediately once it's fetched (Interpreting the parsing of the HTML).
            - Usually DomContentLoaded event is waiting for all scripts to execute. EXCEPT for async scripts.
                If the script is big, it can take a long time to download, in this time maybe the whole HTML is parsed, so the DomContentLoaded event will fire before executing the script.
            - Scripts are not guaranteed to be executed in order.
            - Usage:
                for 3rd party libraries (when order doesn't matter).

        [3] Defer Script in the <head>
            - Scripts are fetched Asynchronously and executed after the HTML has been completely parsed.
            - In this way we are sure that DomContentLoaded event will fire after executing the script.
            - Scripts are executed in order.
            - This is overall the best way to load scripts (When order matters)

    * Simulating Virtual DOM
        1. document.createRange()
            -> Creates a Range object, which is a portion of the DOM that can hold nodes and text.
            -> Useful for selecting, inserting, or modifying DOM elements dynamically.

        2. createContextualFragment(markupAsString)
            -> Called on a Range object.
            -> Converts a string of HTML markup into a DocumentFragment, which is a lightweight, in-memory DOM structure.
            -> A DocumentFragment is detached from the main DOM, making it faster for batch modifications before inserting into the actual DOM.

    * DOM Useful (Methods & Properties)
        node.isEqualNode(anotherNode)
            -> Returns true if the nodes are the same in terms of their type, attributes, and child nodes, or false otherwise.

        nodeValue
            Property gets or sets the value of a text node, comment node, or attribute node.
            For element nodes, it returns null.

        firstChild
            Property that returns the first child node of a specified parent node, including text nodes, comment nodes, and element nodes.
*/

// * Modern JIT Compilation Of JS
/*
    * Compilation
        ? Source code is converted to machine code (0,1) at once, and written in a binary file that can be executed
            SourceCode => Compilation => (Portable Machine Code) => Execution

    * Interpretation
        ? Interpreter runs source code and executes it line by line
            SourceCode => Execution (line by line)

    * Just-In-Time (JIT Compiler)
        ? Source code is converted to machine code at once, then executed immediately
            SourceCode => Compilation => (Machine code (not a portable file)) => Execution (immediately)


    * Modern JIT Compilation Of JS
        ? 1. Source Code:
            The JavaScript code you write.

        ? 2. Parsing
            - The source code is parsed by the JavaScript engine into a more manageable format.
            - The source code is converted into tokens.
            - Tokens are organized into an Abstract Syntax Tree (AST).

        ? 3. AST (Abstract Syntax Tree)
            The AST is used by the JavaScript engine to understand the code's syntax and logic.

        ? 4. JIT (Just-In-Time Compilation)
            The JavaScript engine uses a JIT compiler to convert the AST into machine code that can be executed by the CPU.

        ? 5. Execution (Happens in the Call Stack)
            The compiled machine code is executed in the order they appear in the call stack.

        ? 6. Unoptimized Code
            The machine code generated might not be fully optimized, allowing for quick compilation and execution.

        ? 7. During Execution Optimization Happens
            The JavaScript engine's JIT compiler continually optimize the machine code for better performance.
*/

// * Main Components of the JavaScript Runtime in the Browser
/*
    ? If there is only one execution thread in JS, how can JS execute asynchronous code in a non-blocking way ?
        [1] Single Execution Thread:
            JavaScript uses a single thread to execute code.
            It processes top-level code (not inside functions or callbacks) line-by-line in a synchronous manner.

        [2] Handling Asynchronous Code:
            When asynchronous code (e.g., loading an image, fetching data, or setting a timer) is encountered, it is offloaded to the Web APIs provided by the browser or Node.js runtime.

        [3] Web APIs and Background Execution:
            The Web API handles the asynchronous operation in the background.
            For example:
                Timers (setTimeout, setInterval) are managed by the Timer API.
                Fetch requests are managed by the Fetch API.

        Once the asynchronous task is completed.
            [4] Callback Queue:
                Holds callbacks for lower-priority asynchronous tasks like timers.
                ? Note
                    It also holds callbacks for DOM events like click, keydown, etc.

            [5] microtask queue:
                Holds callbacks for higher-priority asynchronous tasks Promises.

        [5] Event Loop:
            The event loop continuously checks if the call stack is empty.
            If the call stack is empty:
                It first processes all tasks in the microtask queue.
                Once the microtask queue is empty, it processes tasks in the callback queue.


        ? Example
            console.log("Start test"); // Sync code will be executed first.
            window.setTimeout(
                () => console.log("Code should be executed after 0 seconds"),
                    ? Async code will be executed in the background "Web API"
                    ? After 0 seconds "Async task is completed", the callback function will be queued in the callback queue "Lower-priority".
                ,0
            );
            Promise.resolve("This is a resolved promise").then(
                (value) => console.log(value)
                    ? Async code will be executed in the background "Web API"
                    ? This is a resolved promise already, so it won't take any time, the callback function will be queued in the microtask queue "Higher-priority".

                ? Event loop keeps track of the call stack, Once the call stack is empty, it will process tasks in the microtask queue first, then the callback queue

                ? That't why "This is a resolved promise" will be printed first then "Code should be executed after 0 seconds"
            );
            console.log("End test"); // Sync code will be executed first.
        
*/

// * Execution Context
/*
    * What is Execution Context ?
        ? Environment in which piece of JS code is executed, stores all necessary information for some code to be executed
        ? After Compilation:
            1. [Exactly one] GLOBAL Execution Context is created for top level code (NOT inside a function)  
            2. [One] Execution Context is created per function call
                (all together makes call stack)
                ! (function body only executed when called) 

    * What is inside Execution Context?
        ? 1. Environment Variables
            - (let, const, var) declaration
            - functions declarations
            - (arguments) keyword => (array contains all arguments that is passed to a function [NOT arrow])
                ! Special Case [IMPORTANT]
                    - In arrow function there is no [(arguments) keyword, (this) keyword] stores in it's execution context.

        ? 2. Scope Chain
        ? 3. (this) keyword

    all of this created in "creation phase" right before execution
*/

// * (this) keyword
/*
    (this) is NOT static.

        ? GLobal Execution Context
            (this) => "window" object.


        ? Simple function call
            Strict mode:
                (this) => "undefined"

            Non-strict mode:
                (this) Refers to "window" object.


        ? Method
            (this) => The object that is calling the method.

            * Example: 
                const obj = {
                    parentFunc: function () {
                        this => obj (object that is calling the method)
                        const childFunc = function () {
                            this => UNDEFINED
                        };
                    }
                };
                obj.parentFunc();

        ? Arrow function
            Doesn't get its own this, INSTEAD uses the lexical (this) of parent scope.

            * Example:
                const nael = {
                    firstName: "Nael",
                    greet: () => console.log(`Hello, ${this.firstName}`),
                };

                nael.greet(); // Hello, Undefined
                    Explanation
                        Object literal "{}" is NOT scope, so arrow function "greet()" doesn't get it's own this, Instead uses the lexical (this) of parent scope "Global Execution Context" Which its (this) refers to window object

        ? Event Listener
            (this) => DOM element that the handler is attached to (currentTarget).

        ? Constructor Functions and Classes:
            (this) => New object that is being created.
*/

// * Destructuring
/*
    * Destructuring An Array
        const arr = [1, 2, 3];

        ? Example 1
            const [x, y, z] = arr;  // x = 1, y = 2, z = 3

        ? Example 2
            const [x, y] = arr;  // x = 1, y = 2

        ? Example 3
            const [x, , z] = arr; // x = 1, z = 3

        ? Example 5 (Nested Destructuring)
            const nestedArr = [1, 2, [13, 42]];
            const [x, , [y, z]] = nestedArr; // x = 1, y = 13, z = 42

        ? Example 6 (Default Values)
            const arr = [1, 2];
            const [x = 0, y = 0, z = 0] = arr; // x = 1, y = 2, z = 0

    * Destructuring An Object
        When destructing variables must be the same name as object properties.

        const parent = {
            fullName: "Nael Muhamed",
            age: 27,
            son: {
                fullName: "Max",
                age: 5,
            },
        };

        ? Example 1
            const {fullName, age} = parent;

        ? Example 2 (Changing properties names)
            const { fullName: parentFullName, age: parentAge } = parent;

        ? Example 3 (Default Value)
            const { isMarried = true } = parent;
                If parent object doesn't have property "isMarried" then it is assigned "true"

        ? Example 4 (Nested objects)
            const {
                fullName: parentFullName,
                age: parentAge,
                son: { fullName: sonFullName, age: sonAge },
            } = parent;

*/

// * The Spreed Operator (...iterable)
/*
    Spread operator doesn't create new variable.
    It can only be used at places that takes multiple values separated by comma
        console.log()
        [value1, value2, ...array]
    It works with iterables like (arrays, strings, maps, sets) and also objects

    * Example
        const numbers = [10, 20, 30];
        const newNumbers = [...numbers, 40, 50];
        console.log(...newNumbers); 10 20 30 40 50
            ===
        console.log(newNumbers[0], newNumbers[1], newNumbers[2], newNumbers[3], newNumbers[4])
    
        Spread operator with string
            const str = "Abc";
            const letters = [...str, "d"];

        Spread operator with object
            const basicInfo = {
                firstName: "Na'el",
                age: 27,
            };
            const info = {
                ...basicInfo,
                job: "Back-end developer",
            };
*/

// * The Rest Operator (...iterable)
/*
    * Spread Operator
        - On RIGHT side of assignment operator (=).
        - Unpack an iterable obj to comma separated values.

        
    * Rest Operator
        - On LEFT side of assignment operator (=).
        - Pack comma separated values into an array
        - Rest element must be the last element.

    ? Example 1:
        const arr = [1, 2, 3, 4, 5];
        const [x, y, ...z] = arr; 
            x = 1
            y = 2
            z = [3, 4, 5]

    ? Example 2 (Rest Operator On Object)
            const openingTimes = {
                thu: {
                    open: 12,
                    close: 22,
                },
                fri: {
                    open: 11,
                    close: 23,
                },
                sat: {
                    open: 0,
                    close: 24,
                },
            };
            const { sat, ...weekDays } = openingTimes;


    ? Example 3 (With Functions "Rest Parameters")
            const add = function (...numbers) {
                let sum = 0;
                for (let i = 0; i < numbers.length; i++)
                    sum += numbers[i];
                console.log(sum);
            };

            add(13, 42) // 55
            add(13, 42, 55) // 110

            const numbers = [1, 2, 3, 4, 5];
            add(...numbers); // SPREAD (Unpacking)
*/

// * Shallow Copy And Deep Copy
/*
    * Shallow Copy
        1. Assignment operator
            const arr = [13, 42, 55];
            const arrCopy = arr;

        2. Spreed operator
            const arr = [13, 42, 55];
            const arrCopy = [...arr];

            Explanation
                (arr) is a reference pointing to a chunk of memory in the heap where the [13, 42, 55] array is stored "arr stores the address NOT the actual array".

                (arrCopy) is reference pointing to a new chunk of memory in the heap. then we spread the values of (arr) into (arrCopy)

                The problem comes when arr's values are reference types not primitives. This means we spread the references.

            Example
                const original = {
                    name: "Alice",
                    address: {
                        city: "Wonderland",
                    },
                };

                const shallowCopy = { ...original };

                shallowCopy.address.city = "New Wonderland"; // 
                Modifying the nested object in the shallow copy

                console.log(original.address.city); // "New Wonderland" (reference is shared)

        3. Object.assign() 
            const arr = [13, 42, 55];
            const arrCopy = Object.assign([], arr);


    * Deep Copy
        [1] JSON.structuredClone() [RECOMMENDED]
            const deepCopy = structuredClone(original);

        [2] JSON.parse(JSON.stringify())
            const deepCopy = JSON.parse(JSON.stringify(original));
            ? Note: This approach has limitations with functions, undefined, Symbol, etc.

        [3] Lodash
            
*/

// * Nullish Coalescing operator (??)
/*
    ? If the first operand is nullish (null OR undefined), it replace it with / execute the second operand
    * Example
        const restaurant = {
	        numOfGuests: 0,
        };

        const numOfGuests = restaurant.numOfGuests || 5;
        console.log(numOfGuests); // 5
            INSTEAD
        const numOfGuests = restaurant.numOfGuests ?? 5;
        console.log(numOfGuests);
*/

// * Logical Assigning Operator (||=) (&&=)
/*
    const capri = {
        name: "Capri",
        // numberOfGuests: 20,
        numberOfGuests = 0
    };

    const laPiazza = {
        name: "La Piazza",
        owner: "Giovanni Ross",
    };
    
    ||=
        * Example 

            capri.numberOfGuests = capri.numberOfGuests || 10;
                INSTEAD
            capri.numberOfGuests ||= 10;
                INSTEAD (To Solve "numberOfGuests = 0")
            capri.numberOfGuests ??= 10
    &&=
        * Example
            laPiazza.owner = laPiazza.owner && "Anonymous";
                INSTEAD
            laPiazza.owner &&= "<ANONYMOUS>";
        
*/

// * For-Of Loop
/*
    for (const item of array){
        ? item: represents current iterable element  
    }

    * Example 1
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (const number in numbers) {
            if (number % 2 == 0) continue;
            console.log(number);
        }
        ! In for-of loop we can use (continue & break);

    * Example 2 [array.entries()]
        ? array.entries() => each entry is array [index, element]
        for (const [index, number] of numbers.entries())
            console.log(`${index}: ${number}`);
*/

// * Object Literal Enhancement
/*
    * Example 1     
        const weekDays = ["Sat", "Sun", "Mon", "Tus", "Wen", "Thu", "Fri"];

        const openingtimes = {
            ? object property's name can be computed 
            [weekDays[5]]: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        };

        const restaurant = {
            name: "Classico Italiano",

            ? ES6 enhanced object literal
            openingtimes,

            ? No need to define a property called orderPasta then assign it to function
            orderPasta(ing01, ing02, ing03) {
                console.log(`There is you pasta with ${ing01}, ${ing02}, ${ing03}`);
            }
        };
*/

// * Optional chaining '?.'
/*
    const restaurant = {
        openingtimes: {
            thu: {
                open: 12,
                close: 22,
            },
            fri: {
                open: 11,
                close: 23,
            },
            sat: {
                open: 0,
                close: 24,
            },
        },
    };

    * Example 1
        if (restaurant.openingtimes && restaurant.openingtimes.fri)
        console.log(restaurant.openingtimes.fri.open);
            INSTEAD
        console.log(restaurant.openingtimes?.fri?.open);
            ? if restaurant doesn't have a property called openingtimes (Nullish (Null/Undefined))
                - undefined immediately returned

            ? if openingtimes doesn't have a property called fri
                - undefined immediately returned


    * Example 2 (Mixing '?.' with '??')
        const weekDays = ["sat", "sun", "mon", "tus", "wen", "thu", "fri"];
        for (const day of weekDays) {
            const open = restaurant.openingtimes[day]?.open ?? "";
            console.log(`On day '${day}' we open at ${open}`);
        }

    * Example 3 (On methods ?.())
        restaurant.order?.("Mushroom") ?? console.log("Method doesn't exist");
            ? if 'order' method exists, only then invoke it ("Mushroom"), else undefined immediately returned! 

            
*/

// * Looping Objects
/*
    * Object.keys(obj)
        ? returns a string array containing all properties names

    * Object.values(obj)
        ? returns an array containing all the properties values

    * Object.entries(obj)
        ? returns an array containing nested arrays, each consists of [key, value]

    * Example:
        const openingtimes = {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
        };

        for (const [day, { open, close }] of Object.entries(openingtimes))
            console.log(`On ${day} we open at ${open} and closed at ${close}`);
    
*/

// * Sets
/*
    Data structure to store unique elements [new Set(iterable)]
        const numbers = [13, 42, 55, 13];

        ? Declaration
            const uniqueNumbers = new Set(numbers);
            
        ? Methods and properties
            - size 
            - has()
            - add()
            - delete()
            - clear()
            - forEach()
                Params:
                    call-back function:
                        function(
                            currentValue,
                            key (Sets don't have Index so it gets the same value as the current value),
                            set
                        )
                * Example
                    const uniqueCurrencies = new Set(["USD", "GPA", "EUR", "USD", "EUR"]);
                    uniqueCurrencies.forEach(function (value, _, set) {
                        console.log(value);
                    });


        ? Notes
        - Sets don't have Index.
        - To convert set to an array we can use spread operator OR Array.from()
            const uniqueCurrencies = Array.from(new Set(["USD", "GPA", "EUR", "USD", "EUR"]));
*/

// * Maps
/*
    - Data structure to store key value pairs
    - keys could be any data type UNLIKE object

    ? Declaration
        const user = new Map();
        user.set("fullName", "Nael Muhamed");
        user.set("age", 27);
        user.set("gender", "male");

    ? Another way of declaration & initialization
        - passing an Entries array each entry consists of (key [0], value [1])
            const user = new Map([
                ["fullName", "Nael Muhamed"],
                ["age", 27],
                ["gender", "male"],
            ]);

    ? Looping over map
        for (const [key, value] of user)
            console.log(`${key}: ${value}`);

        user.forEach(function (val, key, map) {
            console.log(`${key}: ${val}`);
        });


    * Methods and Properties
        ? set(key, value)
            set() doesn't only set keyValuePair, it also returns the map, so is chainable
                user
                    .set("fullName", "Nael Muhamed");
                    .set("age", 27);
                    .set("gender", "male");
        
        ? get(key)
            const fullName = user.get("fullName");

        ? has(key)
            const isNameExists = restaurant.has("fullName");
        
        ? delete(key)
            const isDeletedSuccessfully = restaurant.delete("fullName");
                returns true if the key exists and has been removed otherwise false.

        ? size
        ? clear()
        
        ? keys()
        ? values()
        ? entries()

        ? forEach()
            Params:
                callback function (
                    currentValue,
                    currentKey,
                    map
                )


    ? Converting an object to a map & Converting a map to an object
        [1] Converting an object to a map
            const openingTimes = {
                thu: {
                    open: 12,
                    close: 22,
                },
                fri: {
                    open: 11,
                    close: 23,
                },
                sat: {
                    open: 0,
                    close: 24,
                },
            };
            const map = new Map(Object.entries(openingTimes));

        [2] Converting a map to an object
            const obj = Object.fromEntries(map.entries());
*/

// * Strings
/*
    * Methods & Properties
        ? length
        ? indexOf()
        ? lastIndexOf()
        ? slice(start, end)
            - start: inclusive
            - end: exclusive
            - negative value: counting from the right side
                - (-1) means last character
        ? substring(start, end)
            - Doesn't accept negative value
        ? toLowerCase()
        ? tolocaleLowerCase(locale)
        ? toUpperCase()
        ? tolocaleUpperCase(locale)
        ? trim()
            - trimStart()
            - trimEnd()
        ? replace()
            Params:
                searchValue/REGEX
                replaceValue

            Example
                const str = "Web design and frontend development and backend development";
                const newStr = str.replace(/and/g, "&"); // It will replace all "and" with "&" Only because of the global flag (g)


        ? replaceAll()
        ? includes()
            - Returns true if the search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.

            "AnyStr".includes("") === true
            
        ? startsWith()
        ? endWith()
        ? split()
        ? join()
        ? padStart()
            - first param: maximum length of the whole string
            - second param: the string added to the LEFT side of the original string
        ? padEnd()
            - first param: maximum length of the whole string
            - second param: the string added to the RIGHT side of the original string

        ? repeat()
        ? charAt()
        ? at()
            - it accepts negative index.
        ? concat()
*/

// * Functions Default Parameters
/*
    const bookings = [];
    const createBooking = function (
        flightNo,
        numOfPassengers = 1,
        price = 199 * numOfPassengers 
            ? Only works for params that are defined in the list before the current one
    ) {
        Before Default Params
            numOfPassengers = numOfPassengers || 1;
            price = price || 199 * numOfPassengers ;

            OR

            numOfPassengers = numOfPassengers ? numOfPassengers : 1;
            price = price ? price : 199 * numOfPassengers ;

            OR

            numOfPassengers = numOfPassengers ?? 1;
            price = price ?? 199 * numOfPassengers ;

        const booking = {
            flightNo,
            numOfPassengers,
            price,
        };
        bookings.push(booking);
    };
    createBooking(20);
    createBooking(20, undefined, 200);  // This is how to skip default param.
*/

// * Passing by value
/*
  ? In JavaScript, there are two types of values you can pass to a function:
    - primitives (like strings, numbers, booleans, etc.)
    - objects (including arrays and functions).

    * Primitive Values
        - When you pass a primitive value to a function, it is passed by value.
        - This means the function receives a copy of the value, not the original one.
        - Changes made inside the function won't affect the original variable.
        - Its Like:
            const flight = "999A";
            let flightNumber = flight;
            flightNumber = "999B"
            ? this won't affect the value stored at flight

        * Example
            const flight = "999A";
            const checkIn = function(flightNo) {
                flightNo = "999B";  // This change only affects the local variable 'flightNo'
            };
            checkIn(flight);
            console.log(flight);  // Output: "999A" (Unchanged)

    * Reference Values:
        - When you pass an object to a function, it is passed by value as well, However the value is a reference (a copy of the reference is passed).
        - This means the function receives a reference to the same memory location as the original object.
        - Changes made to the object’s properties within the function will affect the original object.
        - Its like:
            const nael = {
                name: "Nael Muhamed",
                passport: 123456789
            };
            const someone = nael;
            someone.name = "Anonymous"
            ? this will affect the original object 

        * Example
            const nael = {
                name: "Nael Muhamed",
                passport: 123456789 
            };
            const checkIn = function(passenger) {
                passenger.name = `Mr. ${passenger.name}`;  // Modifies the original object
            };
            checkIn(nael);
            console.log(nael.name);  // Output: "Mr. Nael Muhamed" (Changed)

    ! There is no passing by reference in JS
*/

// * First class function & Higher order function
/*
    * First Class Function
        JS treats function as (first-class === value)

            Explanation:
                1. Function is type of obj
                2. obj is a value
                Therefore the function is also a value

            What Can We Do Because Functions Are Values?
                [1] Store them in variables or properties
                    const book = function(){LOGIC}
                    const flight = {
                        book: function(){LOGIC}
                    }

                [2] Pass function as an argument to another function (callback function)
                    Example 1
                        function logBooking(){LOGIC}
                        function book(callback){
                            //LOGIC
                            callback();
                        }
                        book(logBooking); // pass logBooking as an argument without ()/Invoking.

                    Example 2 (What if the function i want to pass as an argument is taking params)
                        function logBooking(flightNo, passengerName){//LOGIC}

                        function book(callback){
                            //LOGIC
                            callback(20, "Nael Muhamed");
                        }
                        book(logBooking);



                [3] Return function from ANOTHER function
                    function createMultiplier(factor) {
                        return function (number) {
                            return number * factor;
                        };
                    }
                    const double = createMultiplier(2);
                    const number = double(10);

                    const triple = createMultiplier(3);
                    const number = triple(10);


    * Higher Order Function
        ? Is a function that does one or both of:

            1. Receives another function as an argument
                * Example
                    const oneWord = function (str) {
                        return str.toLowerCase().replaceAll(" ", "");
                    };

                    const upperFirstWord = function (str) {
                        const [first, ...others] = str.split(" ");
                        return [first.toUpperCase(), ...others].join(" ");
                    };

                    const transform = function (str, func) {
                        console.log(`Original: ${str}`);
                        console.log(`Call-back function: ${func.name}`);
                        console.log(`Result: ${func(str)}`);
                    };

                    transform("Hello, world!", oneWord);
                        ! transform(): higher-order function
                        ! oneWord(): call-back function

                    transform("Hello, world!", upperFirstWord);

                ? Abstraction allows you to generalize the functionality of transform() by using different callback functions to achieve different string manipulations.

                ? Abstraction hides the implementation details of how the string will be transformed by isolating that logic in the callback functions.


            2. returns a function
                * Example
                    const greet = function (greetType) {
                        return function (name) {
                            console.log(`${greetType}, ${name}`);
                        };
                    };

                    const heyGreet = greet("Hey");
                        ? heyGreet() is a function that takes name as an argument

                    heyGreet("Nael");

                    ? More simplified way
                        greet("Hey")("Nael");
        
    * Example
        const lufthansa = {
            airline: "Lufthansa",
            code: "LH",
            bookings: [],
            book(flightNo, passengerName) {
                console.log(
                    `${passengerName} booked a seat on ${this.airline} flight ${this.code}${flightNo}`
                );
                this.bookings.push({
                    flight: `${this.code}${flightNo}`,
                    passengerName,
                });

                ? book() is a method (function inside an object) so (this) keyword refers to the object that is calling the method
            },
        };

        lufthansa.book(299, "Nael");
            ? here (this) refers to lufthansa obj

        const euroWings = {
            airline: "EuroWings",
            code: "EW",
            bookings: [],
        };

        const book = lufthansa.book;
            ? This is possible as JS treats functions as first-class, this means that functions are simply values
            ? book is just a regular function, (this) refers to 'undefined' at 'strict' mode
                ! book(399, "Max"); // ERROR

        * Hot to fix ?
            ? To explicitly define what we want (this) keyword to be: 
                1. call(this, arg1, arg2)
                    book.call(euroWings, 399, "Max");
                        ? (this) inside book method refers to euroWings object

                2. apply(this, [arg1, arg2])
                    - The difference is it takes the args as an array
                        book.apply(euroWings, [499, "Beatrice"]);

                3. bind()
                    - The difference is bind doesn't immediately call the function, INSTEAD it returns reference to a new function where the (this) keyword is bound

                    * Example 1
                        const bookEW = book.bind(euroWings);
                            ? bookEW is reference to a new function with (this) keyword is bound to euroWings obj

                        bookEW(599, "Damian"); // Calling/Invoking the function

                    * Example 2
                        const bookEW699 = book.bind(euroWings, 699);
                            ? (this) keyword & first arg are set
                            ? this is called 'partial application' when some args are applied before the function invoked
                            
                        bookEW699("Nael");
                            ? only needs the unset args

                    * Example 3 (Important)
                            lufthansa.buyPlane();
                                ? lufthansa obj is the one that calls buyPlane() method, that's why (this) keyword refers to lufthansa obj

                            const btn = document.querySelector(".btn");
                            btn.addEventListener("click", lufthansa.buyPlane);
                                ? At Event Listener (this) refers to DOM element that the handler(lufthansa.buyPlane) is attached to (addEventListener() is the caller means (this) refers to btn

                            btn.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
                                ? here (this) keyword is bound to lufthansa obj

                    * Example 4 (Important) [Partial Application (Preset args)]
                        const addTax = (tax, value) => value + tax * value;
                        addTax(0.2, 100); // output: 120

                        const addVAT = addTax.bind(null, 0.5);
                            ? addVAT() is new function.
                            ? Arrow function doesn't get it's own (this), INSTEAD uses the lexical (this) keyword of parent scope .
                            ? Any value will be sent to bind() method as first param won't matter, second param  is preset (partially applied) to (0.5).
                        addVAT(100); // output: 150



            ? This is possible as function is just another type of object (object can have methods)

*/

// * Closure
/*
    ? After Compilation:
        1. [Exactly one] GLOBAL Execution Context is created for top level code (NOT inside a function)  
        2. [One] Execution Context is created per function call
            (all together makes call stack)
            ! (function body only executed when called)

    ? Call Stack: orders in which functions are called

    * Example
        const secureBooking = function () {
            let passengerCount = 0;
            return function () {
                passengerCount++;
                console.log(passengerCount);
            };
        };

        const booker = secureBooking();

        booker();
        booker();
        booker();

    * Analyzing code
        1. Global execution context created for top level code (NOT inside a function)
            * Environment variables
                1. secureBooking = <f>
                2. booker = <f>
            ? Call Stack
                1. Global Execution context 


        const booker = secureBooking();
        2. [One] Execution Context is created for secureBooking()
            * Environment variables
                passengerCount = 0
            ? Call Stack
                1. Global Execution context
                2. secureBooking()
        
        3. Once secureBooking() is returned/executed, it popped off from call stack
                ? Call Stack
                    1. Global Execution context

        booker(); // 1
        4. [One] Execution Context is created for booker()
                * Environment variables
                    <EMPTY>
                ? Call Stack
                    1. Global Execution context
                    2. booker()

        5. Once booker() is executed, it popped off call stack
                ? Call Stack
                    1. Global Execution context
                    

        ? When booker() is called the passengerCount variable is increased WHEN secureBooking() which contains passengerCount is already popped up. how is that possible ?!
            Closure :
                - A function has access to environment variables of the execution context in which it was created EVEN after that execution context is gone.

                - booker() was created at secureBooking() execution context, so it has an access to it's environment variables, that's why it can access passengerCount variable and manipulates it

                - Closure has priority over scope chain 

        * Closure Definition
            1. [Formal] A closed-over Variable-Environment (VE) of Execution Context (EC) in which a function is called, even after this Execution Context is gone (in other words "even after the function to which the execution context belongs has returned")

            2.[Less Formal] Gives a function access to all variables of its parent function, even after the function has returned, the function keeps a reference to its outer scope, which preserves the scope chain throughout time.
            
            
        * Example
            const x = -13;
            let func;
            const test = function (value) {
                const x = 13;
                func = function () {
                    console.log(x + value);
                };
            };
            test(42);
                ? Once test() has been executed, it will be popped off the call stack

            func(); // output: 55
                ? func() has been created at test()

                ? Despite test() has been popped off the call stack, func() still have an access to test()'s Environment Variable (includes arguments "value") duo to closure

                ? Closure has priority over scope chain, that's why "x" at global context has been ignored
*/

// * Arrays
/*
    * Methods

        ? sort()
            - Mutates the original array.
            - By default elements are sorted ASCENDING in ASCII order.
            - Params
                compareFunction( currentElement, nextElement) and returns:
                    Incase of sorting ascending
                        if current > next ? RETURNS 1 (SWAPPING)
                        if current < next ? RETURNS -1
                        if current === next ? RETURNS 0 

            * Example (ASCENDING)
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                movements.sort((current, next) => {
                    if (current < next) return -1;
                    else if (current > next) return 1;
                    else return 0;
                });
                                    ? OR
                movements.sort((current, next) => current - next);

            * Example (DESCENDING)
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                movements.sort((current, next) => {
                    if (current < next) return 1;
                    else if (current > next) return -1;
                    else return 0;
                });
                                    ? OR
                movements.sort((current, next) => next - current);

        ? push()
            - Appends new elements to the end of an array, and returns the new length of the array. 

        ? pop()
            - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
            
        ? unshift()
            - Inserts new elements at the start of an array, and returns the new length of the array.

        ? shift()
            - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

        ? slice()
            - Doesn't mutates the original array.
            - Returns new array
            - Params
                [1] startIndex (inclusive)
                    - If startIndex is undefined, then the slice begins at index 0.
                [2] endIndex (exclusive)
                    - If endIndex is undefined, then the slice extends to the end of the array.

                ? we can use negative index to start counting from last to end
                    const arr = [10, 20, 30, 40, 50];
                    const slicedArr = arr.slice(0, -3); // [10, 20]

            * Example (Copying an array)
                const arr = [10, 20, 30, 40, 50];
                const arrCpy = arr.slice();

        ? splice()
            - Mutates the original array.
            - (removes & adds) elements to the original array.
            - returns deleted elements.

            - Params
                [1] start:
                    zero-based index from where to start remove elements.

                [2] deleteCount:
                    number of elements to remove.

                [3] item1, …, itemN:
                    Elements to insert into the array in place of the deleted elements.


        ? reverse()
            - Mutates the original array

        ? includes()
            - Determines whether an array includes a certain element, returns true or false.
            - params
                [1] searchElement
                [2] fromIndex?
                    The index to start searching from till the end of the array.

        ? indexOf()
            - Returns the index of the first occurrence of an element, or -1 if not found.

        ? lastIndexOf()
            - Returns the index of the last occurrence of an element, or -1 if not found.

            - Params
                [1] searchElement
                [2] fromIndex
                    Searches backwards starting from the specified index moving left through the array. (start => specifiedIndex)
                    lastIndexOf() will still returns the index of the last occurrence of the element.

            - Example
                const arr = [10, 30, 20, 30, 50, 30];
                arr.lastIndexOf(30, 4); // 3
                    searchRange => [10, 30, 20, 30, 50]
                        lastIndexOf searches backwards starting from index 4 (which has the value 50) and moving left through the array.

        ? toString()

        ? concat()

        ? join()

        ? at(index)
            - Returns the element at the specified index

            * Example (Getting the last element of array)
                const lastA = numbers[numbers.length - 1];
                const lastB = numbers.slice(-1)[0];
                const lastC = numbers.at(-1);

        ? forEach()
            params:
                call-back function
                    function(
                        current element,
                        index,
                        the entire array we are looping
                    )
            ! break & continue can't be used

            * Example 1
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

                for (const [i, mov] of movements.entries()) {
                    if (mov > 0) console.log(`Movement no.${i + 1}: you deposited: ${mov}`);
                    else if (mov < 0)
                        console.log(`Movement no.${i + 1}: you withdrew: ${Math.abs(mov)}`);
                }

                console.log("\n\n\n");

                movements.forEach(function (mov, i, arr) {
                    if (mov > 0) console.log(`Movement no.${i + 1}: you deposited: ${mov}`);
                    else if (mov < 0)
                        console.log(`Movement no.${i + 1}: you withdrew: ${Math.abs(mov)}`);
                });

        ? map()
            - Returns a new array containing the result of applying an operation on all the original array elements

            * Example 1
                const euroToUsd = 1.1;
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                const movementsUSD = movements.map((mov) => mov * euroToUsd);

            * Example 2
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                const result = movements.map(
                    (mov, i) =>
                        `Movement no.${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
                            mov
                        )}$`
                );

        ? filter()
            - Returns a new array containing the elements that passed a specific test condition
            - Like Where() [LINQ]

            * Example
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                const deposits = movements.filter((mov) => mov > 0);
                const withdrawals = movements.filter((mov) => mov < 0);

        ? reduce()
            - reduces all array elements down to one single value
            - Like Aggregate() [LINQ]
            - Params:
                1. call-back function
                    function(
                        accumulator (accumulator is like SNOWBALL),
                        currentValue,
                        index,
                        array
                    )

                2. seed value (initial value of accumulator)
                    - If specified ? accumulator gets it & currentValue gets the first element of the array

                    - If NOT ? accumulator gets the first value of the array & currentValue gets the next element.

            * Example 1
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

                const balance = movements.reduce(function (acc, current) {
                    
                    return acc + current;

                    ? First iteration
                        acc: 200
                        current: 450
                        acc = 200 + 450 (acc + current)

                    ? second iteration
                        acc: 650
                        current: -400
                        acc: 650 - 400

                    and so on...
                });

            * Example 2 (Important)
                const { deposits, withdrawals } = accounts
                 	.flatMap((acc) => acc.movements)
                 	.reduce(
                 		(sums, cur) => {
                 			// cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
                 			sums[cur > 0 ? "deposits" : "withdrawals"] += cur;

                 			return sums;
                                ? We always have to return the accumulator
                 		},
                 		{ deposits: 0, withdrawals: 0 }
                    );

        ? find()
            - Returns only the first element where predicate is true otherwise, UNDEFINED
            - Like FirstOfDefault() [LINQ]

            * Example
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                const movement = movements.find((mov) => mov < 0); // -400

        ? findIndex()
            Return the index of the first element that passes the condition. If no elements satisfy the condition, it returns -1.

            - Params
                ? Callback function:
                    - Current element
                    - Index of current element
                    - array
        
        ? some()
            - Returns true if ANY element of the array meets the specified criteria otherwise, false.
            - Like Any() [LINQ]

            * Example
                const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
                const result = movements.some((mov) => mov > 0); // True

        ? every()
            - Returns true if ALL element of the array meet the specified criteria otherwise, false.

            * Example:
            const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
            const isDeposit = (mov) => mov > 0;
            const result = movements.every(isDeposit); // False

        ? flat () & flatMap()
            - Returns a new array with all sub-array elements concatenated recursively up tp the specified depth
            - flatMap() is like SelectMany() [LINQ] 
            - Params
                - Depth : the maximum recursive depth [Default: 1]

            * Example
                const account1 = {
                    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
                };
                const account2 = {
                    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
                };
                const account3 = {
                    movements: [200, -200, 340, -300, -20, 50, 400, -460],
                };
                const account4 = {
                    movements: [430, 1000, 700, 50, 90],
                };
                const accounts = [account1, account2, account3, account4];

                const overAllBalance = accounts
                .map((acc) => acc.movements)
                .flat()
                .reduce((acc, mov) => acc + mov);

                ? Combining (map + flat) using flatMap(), it maps first then flattens the result of mapping 
                    const overAllBalance = accounts
                        .flatMap((acc) => acc.movements)
                        .reduce((acc, mov) => acc + mov);
                    
                    ! flatMap() only goes one level deep (depth 1)


        ? fill()
            * Weird behavior of creating array with new Array() (Constructor)
                const arr01 = new Array(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
                const arr02 = new Array(5); // empty array that has length of 5

                ! You can't fill arr02 with map()
                    arr02.map(() => 13); XXXX
                        there are no elements to iterate over

            - Changes all array elements from "start" to "end" index to a static value and returns the modified array
            - Mutates the original array
            Params:
                1. value
                2. start (included)
                    If start is negative, it is treated as (length + start)
                3. end (NOT included)
                    If end is negative, it is treated as (length + end)

            * Example
                const arr = new Array(5); // empty array that has length of 5
                arr.fill(13, 0, arr.length); // OR JUST arr.fill(13);

        ? from()
            - Creates an array of an iterable object.
            Params
                1. An iterable object that will be converted to an array.
                2. mapFunction to be called on each element of an array
                    (
                        1. currentElement
                        2. index
                    )

            * Example 1
                const arr = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                
            * Example 2
                const randomDices = Array.from({ length: 100 }, () =>
                    Math.trunc(Math.random() * 6 + 1)
                );

            * Example 3
                labelBalance.addEventListener("click", function () {
                    const movementElements = document.querySelectorAll(".movements__value"); // nodeList (Iterable object)

                    const movementUI = Array.from(movementElements, (element) =>
                        Number(element.textContent.replace("€", ""))
                    ); // Creates an array of an iterable object, and maps each iterable item (OPTIONAL)

                    ? We can convert the returned nodeList from QuerySelectorAll() into an array using spread operator [...iterable] as well
                        const movementElementsArr = [
                            ...document.querySelectorAll(".movements__value"),
                        ];
                });
                
    * Array Methods Summery

        * To Mutate Original Array
            ? Adding
                - push()
                - unshift()

            ? Removing
                - pop()
                - shift()
                - splice()
            
            ? Others
                - reverse()
                - sort()
                - fill()

        * A New Array
            - map()
            - filter()
            - slice()
            - concat()
            - flat()
            - flatMap()

        * An Array Index
            - indexOf()
            - findIndex()

        * An Array Element
            - find()

        * Know If Array Includes
            - includes()
            - some()
            - every()

        * A New String
            - join()

        * To Transform to value
            - reduce()
        
        * Just Loop An Array
            - ForEach()

*/

// * Numbers & Math
/*
    * Numbers

        ? Conversion
            1. Number("13")
            2. +/-"13" (Type Coercion)

        ? Parsing
            1. Number.parseInt()
                - Params:
                    1. stringNumber => MUST start with number
                    2. radix
                        The base of the number (2: 36). If not supplied ?
                            - Strings with a prefix of '0x' are considered hexadecimal.
                            - All other strings are considered decimal.

                ? Returns only the integer number without the floating point.
                
            2. Number.parseFloat()
                ? The best way to parse string

        
        - Number.isNaN()
            Number.isNaN(13); // false => 13 is Number
            Number.isNaN("13"); // false => 13 is String
            Number.isNaN(+"13px"); // true => 13px is NaN
            Number.isNaN(13 / 0); // false => 13/0 is infinity "Special Type"

        - Number.isFinite()
            ? The best way to check is the value is a number

            ? "Number.isFinite()" doesn't do type coercion unlike "isFinite()" (The Global One)

        - Number.isInteger()
            Number.isInteger(13); // true
            Number.isInteger("13"); // false
            Number.isInteger(13.3); // false


    * Math 
        - Math.sqrt()
            Math.sqrt(25) === 25 ** (1/2)

        - Math.max()
            Math.max(1, 2, 3, 4, 5) => 5
            Math.max(1, 2, 3, 4, "5") => 5 "Does Type Coercion"
            Math.max(1, 2, 3, 4, "5px") => NaN

        - Math.min()

        - Math.PI

        - Math.trunc()
            ? Returns only the integral part of the a numeric expression
            ? Type Coercion: True

        - Math.random()
            Generates a floating number between 0 (inclusive) and 1 (exclusive).

            ? To generate number between (0 & y)
                Math.random() * y => 0(inclusive) & y(exclusive)
                - To include y:
                    Math.random() * (y + 1)

            ? To generate number between (X & y)

                * Formula
                    const generateRandomInt = (min, max) =>
                        Math.trunc(Math.random() * (max - min + 1)) + min;
                
                * Explanation
                    1. Math.random() => [ 0(inclusive), 1(exclusive) ].
                        Example output: 0.0, 0.13, 0.999, etc.

                    2. (max - min + 1)
                        Calculates the range of numbers between min and max, including both endpoints.
                            - Example
                                If you want to generate random numbers between 5 and 10, the number of possibilities is (10 - 5 + 1) = 6.

                        This is important because Math.random() alone only gives a decimal between 0 and 1, and multiplying by this range adjusts it to give you numbers in the range [0, 6 (exclusive)].

                        So, the random number will now be in the range [0, max - min + 1).
                            Example:
                                If min = 5 and max = 10, then max - min + 1 is 6, so the expression becomes Math.random() * 6. This means the random number is now in the range [0, 6].
                                Outputs:
                                    0.0, 1.5, 3.4, 5.99, etc.

                    3. Math.trunc(...)
                        The Math.trunc() function removes the decimal part of a number
                        Outputs: 0, 1, 2, 3, 4, 5

                    5. + min
                        After this step, the random number, which was between 0 and max - min, is shifted to the range [min, max].
                        For example:
                            if min = 5, the possible random values of 0, 1, 2, 3, 4, 5 now become 5, 6, 7, 8, 9, 10.  

        * Rounding
            ? with negative numbers rounding works the opposite
            ? Type Coercion: True
            - math.round()
            - math.ceil()
                - Rounds Up
            - math.floor()
                - Rounds Down
                ? floor() is better than trunc() cause it works with positives and negatives

            * Special
                - (decimalNumber).tofixed()
                    ? returns a string.
                    @param fractionDigits:
                        - Number of digits after the decimal point. - Must be in the range 0 - 20, inclusive.

                        - If (0) => it rounds the number to the nearest integer.

    * BigInt
        ? Number.MAX_SAFE_INTEGER; (9007199254740991)
            JS can't represent more than Number.MAX_SAFE_INTEGER in the primitive type Number (16 bytes)
        ? Converting Number to BigInt 
            1. use (n) at the end of the number
                999999999999999999999999999999999n

            2. BigInt(Number)
                BigInt(13)

        ? You can use all arithmetic operators BUT you can't mix with Number & BigInt
            - With Divisions => only the integral part is returned

        ? You can't Use Math Functionality like Math.sqrt() with BigInt

        ? Logical Operators
            - (>) (<) => Works
                13n > 10 => True
            - (===) => Doesn't work UNLIKE (==)
                13n === 13 => False
                    ? Make sense as === doesn't do type coercion.


    * Internationalization
        const locale = navigator.language;
        const options = {
            style: "currency/unit/percent/decimal",
            currency: "USD/EUR",
                ? currency is Independent, doesn't count on locale
            unit: "mile-per-hour/celsius/fahrenheit" 
        };
        const formattedNumber = new Intl.NumberFormat(locale, options).format(99999999);

        
            
*/

// * Dates
/*
    * Create a date new Date()
        ? 1. new Date(); => NOW

        ? 2. new Date("String Date Preferable To Be Created By JS To Be Parsed Correctly")

        ? 3. new Date(year, monthIndex, day, hours, minutes, seconds, ms)

        ? 4. new Date(ms "milliseconds after unix time")
            new Date(3 * (24 * 60 * 60 * 1000))
                3 days after unix time (Sun Jan 04 1970 02:00:00 GMT+0200 (Eastern European Standard Time))

    * Working with dates
        ? new Date().getFullYear()
        ? new Date().getMonth()
            Zero-based-index
        ? new Date().getDate()
            Gets the day
        ? new Date().getDay()
            Gets the day of the week
            Zero-based-index
        ? new Date().getHours()
        ? new Date().getMinutes()
        ? new Date().getSecondes()
        ? new Date().getMilliseconds()
        ? new Date().toISOString()
        ? new Date().getTime()
            Returns TimeStamp (Milliseconds since midnight, January 1, 1970 UTC)

        ? Date.now()
            Gets the timeStamp of now

        ? new Date().setFullYear()
            To manipulate the year

        ? new Date().set..()


    * Internationalization (Intl)
        const now = new Date();
            const formattedDate = new Intl.DateTimeFormat("ar-eg").format(now);

        ? More Specifications
            const options = {
                day: "numeric",
                month: "numeric/long/2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
            	weekday: "long/short/narrow"
            };
            const formattedDate = new Intl.DateTimeFormat("ar-EG", options).format(now);

            const locale = navigator.language; // 'en-US' or 'fr-FR'
                - Gets the language from the browser
                const formattedDate = new Intl.DateTimeFormat(locale, options).format(now);

*/

// * setTimeout & setInterval
/*
    setTimeout(
        - 1st Param: Function handler that will be executed ONCE after amount of time.
        - 2nd Param: Time in milliseconds.
        - (...arguments) => the params that function handler could take.
    )
        ? - Note:
            setTimeout is non-blocking, meaning it allows other code to execute while it waits.

    clearTimeout()
        - Takes the return value "ID" from setTimeout()
        - Cancels the scheduled execution of the functionHandler if it hasn’t run yet.

    setInterval()
        Function handler will be executed REPEATEDLY after amount of time.

    clearInterval()

    ? Note
        clearTimeOut & clearInterval() can be called inside setTimeout() & setInterval()

*/

// * Dimensions
/* 
    getBoundingClientRect()
        - It is used to retrieve the position and dimensions of an element relative to the viewport.
        - It returns DOMRect object {
            top => Distance from the top of the viewport.
            left => Distance from the left of the viewport.
            bottom => Distance from the bottom of the viewport.
            right => Distance from the right of the viewport.
            width => Width of the element.
            height => Height of the element.
            x => Equivalent to left
            y => Equivalent to top
        }

    window.scrollX & window.scrollY
        window.scrollX
            The distance between the left edge of the viewport and the left edge of the document.

        window.scrollY
            The distance between the top edge of the viewport and the top age of the document.

        (scrollX & scrollY) =>  negative or positive depending on the direction.

    Height & Width of VP
        document.documentElement.clientHeight
        document.documentElement.clientWidth


    Scrolling
        window.scrollTo(x, y)

        * Important Example (Scrolling to specific section)
            document
                .querySelector('.btn--scroll-to')
                .addEventListener('click', function (e) {
                    
                    ? Old way
                    const secOneCrd = document
                        .querySelector('#section--1')
                        .getBoundingClientRect();

                    window.scrollTo({
                        left: secOneCrd.left + window.scrollX,
                        top: secOneCrd.top + window.scrollY,
                        behavior: 'smooth',
                    });

                    ? New way (Modern Browsers)
                        document
                            .querySelector('#section--1')
                            .scrollIntoView({ behavior: 'smooth' });
                });
        
*/

// * Regular Expressions
/*
    How to create?
        const regex = /pattern/flags;
        const regex = new RegExp('pattern', 'flags');

    /abc/
        The string must contain 'abc' at any position.

    * Anchors
    ^
        Matches the start of the string.

    $
        Matches the end of the string.

    * Basic Character
        .
            Matches any single character except newline (\n)
            /abc./ => "abcA", "abca", "abc1", "abc_" 

    *  Character Classes
        [abc]
            Matches any ONE character in the brackets ('a' || 'b' || 'c').
            [web] => "w", "e", "b"

        [^abc]
            Matches any character not in the brackets.
            [^web] => "x", "y", "z", ...

        [a-z]
            Matches a range of characters, just ONE character from 'a' to 'z'.
            [a-z] => "a", "b", "c"

        \d
            Matches any digit (equivalent to [0-9])
            \d => "1", "2", "3", ...

        \D
            Matches any non-digit (equivalent to [^0-9]).
            \D => "a", "B", "_"

        \w
            Matches any word character (alphanumeric or underscore, [A-Za-z0-9_]).
            \w => "a", "B", "1", "_", ...

        \W
            Matches any non-word character (equivalent to [^A-Za-z0-9_]).
            \W => " ", ".", "?"

        \s: Matches any whitespace character (spaces, tabs, newlines).
            \s => " ", "\t", "\n"
        
        \S: Matches any non-whitespace character.
            \S => "a", "B", "1", "_", ...

    * Quantifiers
        {n}
            Matches the previous token exactly n times.
            abc{3} => "abccc"

        {n,m}
            Matches the previous token between n and m times.
            [a-z]{1,3} => "a", "ab", "abc"

        {n,}
            Matches the previous token AT LEAST n times (n times or more).
            abc{1,} => "abc", "abcc", "abccc"

        {0,1}
            Matches the previous token ZERO OR ONE time (optional).
            abc{0,1} => "ab", "abc"

        {0,}
            Matches the previous token ZERO OR MORE times.
            abc{0,} => "ab", "abc", "abcc", "abccc"

        ? === {0,1} [Optional]
        + === {1,} [1 or more]
        * === {0,} [0 or more]

    * Groups and Alternations
        (abc)
            Defines a group, treated as a single unit.
            (abc){3} => "abcabcabc"

        |: Acts as an OR operator.
            (abc|xyz){3} => "abcabcabc", "xyzxyzxyz", xyzabcxyz

        (?:pattern)
            Non-capturing group. (Better for performance)
            regex.exec()
                - returns an array with:
                    The full match (at index 0).
                    Any captured groups at subsequent indices.
                - If there is no match, returns null

            Example (With Capturing Groups)
                var regex = /^\.(com|net|org)$/;
                var TLD = ".com";
                var result = regex.exec(TLD);
                    [
                        0: Full match => ".com"
                        1:...: Captured groups => "com"
                    ]

            Example (With Non-Capturing Groups)
                var regex = /^\.(?:com|net|org)$/;
                var TLD = ".com";
                var result = regex.exec(TLD);
                    [ 0: Full match => ".com" ]

    * Special Characters
        \
            Escapes special characters to treat them literally.
            \. => "."

        \b
            Matches a word boundary.
            \bWORD\b => "WORD" but not "passWORDs"

        \B
            Matches a non-word boundary.
            \BWORD\B => "PassWORDs"

    * Lookaround
        ? Lookahead
            Positive (?=pattern)
                a(?=ABC) => "aABC" Matches "a" only if followed by "ABC"

            Negative (?!pattern)
                a(?!ABC) => "aXYZ" Matches "a" only if NOT followed by "ABC"

        ? Lookbehind
            Positive (?<=pattern)
                (?<=ABC)a => "ABCa" Matches "a" only if preceded by "ABC"

            Negative (?<!pattern)
                (?<!ABC)a => "XYZa" Matches "a" only if NOT preceded by "ABC"

    * Flags
        g: Global search.
            find all matches in the string.
            /a/g => "Nael Muhamed" ("a" at "Nael" matches & "a" at "Muhamed" matches)
            
        i: Ignore case.
            Case insensitive
            /abc/i => "Abc", "aBc", "ABC"
        
        m: Multiline search.
            Matches the pattern across multiple lines.
            /cat/m =>
                `
                dog
                cat => Matches
                abc
                ` 

        s: Dot-All Mode
            Make . match newlines
            /hello.world/s => "hello\nworld"


        u: Unicode Mode 
            Support Unicode characters
            /👽/u => "👽"

        y: Sticky Mode
            Match starting from the lastIndex position
            const regex = /word/y;
            regex.lastIndex = 5;
            "password" => Doesn't Matches

    * Testing
        regex.test("string")
            Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

            Example    
                const myName = "Nael Muhamed";
                const regex = /^[A-Z][\w\s]{2,}$/;
                regex.test(myName) => True
        
*/

// * try catch
/*
    try {
        Code that may throw an error.

        ? You can make your own error
            throw new Error("errormessage");
    }
    catch (error) {
        If there is an error, it will be caught here.
    }
    finally {
        Code will be executed whether there is an error or not.
    }
*/

// * Asynchronous JS
/*
    * Synchronous & Asynchronous
        Synchronous:
            Code is executed line by line.

        Asynchronous:
            Asynchronous code is executed after the task that runs in the background is finished.
            Execution thread doesn't wait for asynchronous task to finish (non-blocking).
            callback function itself doesn't make the code asynchronous.
            addEventListener() itself doesn't make the code asynchronous.

        ? Notes
            AJAX (Asynchronous JavaScript and XML): allows us to communicate with a server asynchronously, without reloading the page.
            API (Application Programming Interface): piece of software that can be used by other piece of software, allows applications to communicate with each other.


    * XMLHttpRequest Object
        - Old way to make HTTP requests to a server.

        const xhr = new XMLHttpRequest(); // Instantiates a new XMLHttpRequest object

        xhr.open(
        1st param: "GET/POST/PUT/DELETE",
        2end param: "endpoint"
        ) // Establishes the connection.

        xhr.send() // Sends the request

        xhr.response/responseText // Gets the response

        xhr.readyState
            0: Uninitialized Connection
            1: Connection established
            2: Server received the request
            3: Request is processing
            4: Response is ready

        ? XMLHttpRequest Events
            [1] load/onload
                Fired when an XMLHttpRequest transaction completes successfully.
                xhr.addEventListener("load", function () {
                    const data = JSON.parse(xhr.response)
                    - Note
                        This callback function will be executed ONLY when the "load" event is fired.
                        When "load" event is fired ?
                            When the request has finished and the response is available "readyState === 4". 
                });

            [2] readystatechange/onreadystatechange
                Fired whenever the readyState property changes.
                xhr.addEventListener("readystatechange", function () {
                    if (xhr.readyState === 4) {
                        const data = JSON.parse(xhr.response);
                        }
                });

            [3] error/onerror
                Fired when the request encountered an error.
                xhr.addEventListener("error", function () {
                    const error = "Something went wrong";
                });

    * Promise
        A JS object that represents the eventual (completion or failure) of an asynchronous operation and its resulting value.

        ? Key States of a Promise
            Pending
                The initial state.

            Fulfilled(resolved)
                The operation completed successfully, and the promise has a resulting value.

            Rejected 
                The operation failed, and the promise has a reason for the failure (typically an error object).

        ? Advantages
            - We don't have to rely on nested callbacks (callback hell/ pyramid of doom) to handle asynchronous operations.


        ? Building a Promise
            const promise = new Promise(function (resolve, reject) {
                if (condition) 
                    resolve(The value that will be passed to the next .then());
                else 
                    reject(The value that will be passed to the next .catch());
            });

            new Promise(
                Params: Executor
                    A callback used to initialize the promise.
                    This callback is passed two arguments:
                        - resolve callback used to resolve the promise with a value.
                        - reject callback used to reject the promise with a provided reason or error.
            )

        ? Consuming a Promise
            promise
                .then(
                    1st Param: onfulfilled
                        Executes when the previous promise is fulfilled.

                    2nd Param: onrejected
                        Executed when the previous promise is rejected.
                        Only specific for the previous promise.

                    RETURNS
                        ALWAYS returns a promise
                        if the callback function inside it returns:
                            Simple value => this value will be wrapped into a resolved promise
                            Promise => The returned Promise adopts its state (resolved or rejected).
                            No return value => undefined is wrapped into a resolved promise 
                ): 

                .catch()
                    Executes when the promise is rejected.
                    Handles the error globally for all rejected promises.
                    Once a promise is rejected
                        - skips over any subsequent .then(),
                        - jumps to the nearest .catch() in the chain.
                    After a .catch() block handles the error, the chain is considered "resolved" or "rejected" and doesn't backtrack to execute earlier .then()s.

                    RETURNS
                        ALWAYS returns a promise

                    ? When a Promise is rejected ?
                        [1] Calling reject() within the Promise executor under some condition.
                        [2] Unhandled errors (TypeError) || Throwing an error explicitly within the Promise executor.
                        [3] Failed network requests (404 Not Found, 500 Internal Server Error)

                .finally() 
                    Executes after the promise is settled (fulfilled or rejected)
                    Always Executes no matter what.

        ? Promisify
            converting callback-based asynchronous functions into functions that return a Promise. 

            Example 1 (Promisify setTimeOut())
                Converting setTimeout() to a Promise
                function wait(seconds) {
                    return new Promise((resolve, reject) => {
                        if (typeof seconds === "number" && seconds >= 0)
                            setTimeout(resolve, seconds * 1000);
                        else reject(new Error("Invalid input"));
                    });
                }

                wait(3)
                    .then(() => console.log("Done!"))
                    .catch((err) => console.log(err.message));

            Example 2 (Promisify The Geolocation API)
                function getPosition() {
                    return new Promise(function (resolve, reject) {
                        // navigator.geolocation.getCurrentPosition(
                        // 	(position) => resolve(position),
                        // 	(error) => reject(error)
                        // );
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                }

                getPosition()
                    .then((value) => console.log(value))
                    .catch((err) => console.log(err.message));



        ? Creating an immediate resolved/rejected Promise
            Promise.resolve("This is a resolved promise").then((res) => console.log(res));

            Promise.reject(new Error("This is a rejected promise")).catch((err) => console.log(err.message));

    * Async & Await
        - Async function:
            Wraps the return value of the function into a Promise.
            Always returns a Promise.
                If the function returns a value, it will be wrapped into a resolved promise.
                If the function throws an error, it will be wrapped into a rejected promise.
                If the function doesn't return anything, it will be wrapped into a resolved promise with undefined value.

        - await:
            Can only be used inside async function
            Used to pause the execution of an async operation until a Promise is settled (fulfilled or rejected).

        ! Important
            If using try/catch block inside an async function:
                When an error is happened/thrown, the catch block will handle it.
                If catch block doesn't rethrow the error or return a Promise.reject(), the async function itself resolves with undefined.


    * Running promises in parallel (Promise Combinator)
        [1] Promise.all() 
            Returns a new Promise:
                - Resolves with an array of the results of the input Promises in same order ONLY IF all of the provided Promises resolve.
                - Rejects if any of the provided Promises reject (Short-circuiting).

            Benefits:
                [1] Executes all promises at the same time, instead of waiting for one to finish before the next one starts, This is very useful and saving time for independent tasks.

            Example:
                const getJsonAsync = async function (url) {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(errorMsg);
                        return await response.json();
                    } catch (error) {
                        throw error;
                    }
                };

                async function getDataAsync(country1, country2, country3) {
                    try {
                        const result1 = await getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country1}`
                        );
                        
                        const result2 = await getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country2}`
                        );
                        
                        const result3 = await getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country3}`
                        );

                        ? In this approach using await, "await" pauses the execution until the Promise is settled (fulfilled or rejected). This means result2 will only be executed after result1 is settled, Even if result2 doesn't depend on result1.

                        const promise1 = getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country1}`
                        );
                        const promise2 = getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country2}`
                        );
                        const promise3 = getJsonAsync(
                        `https://restcountries.com/v3.1/name/${country3}`
                        );
                        const data = await Promise.all([promise1, promise2, promise3]);
                        
                        Promise.all([promise1, promise2, promise3])
                            ? returns a promise that resolves with an array of the results of the input Promises in same order. so we can await and gets the resolved values.
                                const data = await Promise.all([promise1, promise2, promise3]);

                    } catch (error) {
                        // Handle error
                    }
                }


        [2] Promise.race()
            Returns a new Promise (Short-circuiting whenever one of the promises is settled (resolved or rejected)).

            Example (Setting timeout for request):

                const getJsonAsync = async function (url) {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(errorMsg);
                        return await response.json();
                    } catch (error) {
                        throw error;
                    }
                };

                function timeOutAfter(seconds) {
                    return new Promise(function (_, reject) {
                        setTimeout(function () {
                        reject(new Error('Request took so long'));
                        }, seconds * 1000);
                    });
                }

                (async function () {
                    try {
                        const result = await Promise.race([
                            getJsonAsync(`https://restcountries.com/v3.1/name/Egypt`),
                            timeOutAfter(1),
                        ]);

                    } catch (error) {
                        Handle the error.
                    }
                })();

        [3] Promise.allSettled()
            Returns a promise that ALWAYS resolves after all promises are settled.
            Unlike Promise.all(), which rejects once any promise rejects,
            Promise.allSettled() will always resolve and provides information {status: "fulfilled/rejected", value: data} about the promises.

        [4] Promise.any()
            Returns a promise that resolves once any one of the promises is fulfilled.
            If all promises reject, then it returns a rejected promise.

    * The init object that fetch() takes
        const response = await fetch("Endpoint", {
            method: "GET/POST/PUT/PATCH/DELETE",
            headers: {
                "Content-Type": "application/json",
                token: "XXXXXXXXX",
            },
            cache:
                [1] default
                    The browser looks for a matching request in its HTTP cache.
                        If there is a match and it is fresh, it will be returned from the cache.

                        If there is a match but it is stale, the browser will make a conditional request to the remote server.
                            If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.

                        If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

                [2] no-store [No Lookup]
                    The browser fetches the resource from the remote server without first looking in the cache, and will not update the cache with the downloaded resource.

                [3] reload [No Lookup]
                    The browser fetches the resource from the remote server without first looking in the cache, but then will update the cache with the downloaded resource.

                [4] no-cache
                    The browser looks for a matching request in its HTTP cache.
                        If there is a match, fresh or stale, the browser will make a conditional request to the remote server.
                            If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.

                        If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

                [5] force-cache
                    The browser looks for a matching request in its HTTP cache.
                        If there is a match, fresh or stale, it will be returned from the cache.
                        If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

                [6] only-if-cached
                    The browser looks for a matching request in its HTTP cache. [Experimental]
                        If there is a match, fresh or stale, it will be returned from the cache.
                        If there is no match, the browser will respond with a 504 Gateway timeout status.

        });


*/

// * OOP
/*
    * How to create objects without having a classes in JS?
        [1] Constructor Function (CTOR)
            - Is just a function called with the "new" operator. allows for creating objects out of a function.

            Example: 
                function Person(firstName, age) {
                    this.firstName = firstName;
                    this.age = age;
                    
                    [NOT recommended, Use prototype instead]
                    this.calcAge = function () {
                        return 2024 - this.birthYear;
                    };
                }
                const nael = new Person('Nael', 27);
                nael instanceof Person; // true

            ? What happens when we call constructor function with "new" operator?
                "new" operator does the following:
                    [1] Create new empty object.
                    [2] Bind "this" keyword to the new empty object.
                    [3] Executes the code inside the constructor function.
                    [4] Links the new object to the prototype property of constructor function (obj.__proto__ === constructor function.prototype).
                    [5] Returns the new object UNLESS we explicitly return something else.

            ? Prototype
                CTOR.prototype
                    -> Every function (Including CTOR) has a special property called prototype.
                    -> It is an object used to define properties and methods that will be inherited by instances created by CTOR.
                    -> (CTOR.prototype) is NOT the prototype of CTOR (CTOR.prototype !== CTOR.__proto__)
                    -> CTOR.prototype is the prototype of instances created by CTOR. (obj.__proto__ === CTOR.prototype)
                    -> the prototype obj has a property "constructor" refers to the CTOR function (CTOR.prototype.constructor === CTOR)

                obj.__proto__
                    -> Every JS object has an internal link to another object called "prototype" (obj.__proto__ === CTOR.prototype).

                ? Important
                    CTOR.prototype itself is an object, it's created by the Object constructor (new Object()), so it's linked to Object.prototype (CTOR.prototype.__proto__ === Object.prototype)
                    Object.prototype is the root of the prototype chain so it's __proto__ is null (Object.prototype.__proto__ === null)

                ? When you access a property of an object:
                        [1] The JS engine first checks if the property exists directly on the object.
                        [2] If not, JS looks up the prototype chain.
                        [3] If not anywhere in the prototype chain, undefined is returned.
                        [4] If the property is defined using a getter (get), the getter function is invoked.

                Example:
                    function Person(firstName, birthYear) {
                        this.firstName = firstName;
                        this.birthYear = birthYear;

                            firstName & birthYear => (Data/Characteristics) unique to each instance. That's why they will be created for each instance separately.
                    }

                    Person.prototype.calcAge = function () {
                        return 2024 - this.birthYear;
                    };
                        calcAge() => (Behavior) won't not change from one instance to another. (One method shared among all instances).

                    Person.prototype.species = "Homo Sapiens";
                        species => (One property "Data" shared among all instances)

                    const nael = new Person('Nael', 27);

                    nael.calcAge(); // 27
                    nael.species; // "Homo Sapiens"
                    

                    ? What happens when we try to access a property that doesn't exist like "lastName"?
                        nael.lastName; // undefined
        
                        1. look up directly on the nael object [NOT FOUND]
                        2. Since nael object has __proto__ LINKED to Person.prototype, Look up on "Person.prototype" object [NOT FOUND]
                        3. The prototype of Person is an object Created by new Object(), Since prototype of person (Person.prototype.__proto__) LINKED to "Object.prototype", Look up on Object.prototype object [NOT FOUND]
                        4. Since Object.prototype.__proto__ LINKED to null, The prototype chain ends and undefined is returned.



        [2] ES6 Classes
            - Modern alternative to constructor function.
            - Behind the seen, it works EXACTLY the same as constructor function.
            - ES6 classes are NOT like the traditional classes in the pure OOP languages like C# or Java.

            Example:
                class Person {
                    constructor(firstName, birthYear) {
                        this.firstName = firstName;
                        this.birthYear = birthYear;
                    }

                    calcAge() {
                        return 2024 - this.birthYear;
                    }
                        ? NOTE
                            Any method added to the class body like this, it will be added to the prototype NOT directly to the instance.
                            It's like:
                                Person.prototype.calcAge = function () {
                                    return 2024 - this.birthYear;
                                }
                }
                const jessica = new Person("Jessica", 1996);

            ? Important Notes about classes
                [1] Hoisting
                    Initial Value: uninitialized.

                [2] First-class citizen (Just a value).
                        - can be stored in a variable.
                        - can be passed to a function.
                        - can be returned from a function.

                [3] Class body is executed in strict mode.

        [3] Object.create()
            - Creates a new object with a specified prototype.
            - Params: The prototype object to link the new object to.
            - Returns: An empty object that is linked to the prototype object.

            Example:
                const PersonProto = {
                    init(firstName, birthYear) {
                        this.firstName = firstName;
                        this.birthYear = birthYear;
                    },

                    calcAge() {
                        return 2024 - this.birthYear;
                    },
                };
                const steven = Object.create(PersonProto);
                ? Notes:
                    steven is an empty object that is linked to PersonProto
                    steven.__proto__ === PersonProto

                steven.init("Steven", 1997);

    * Getters and Setters
        ? Object Literal
            const account = {
                owner: 'Nael',
                movements: [13, 42, 55],

                ? Getter
                get latest() {
                    return this.movements.at(-1);
                },

                ? Setter
                set latest(mov) {
                    Setter MUST have exactly one parameter
                    this.movements.push(mov);
                },
            };

            const latestMov = account.latest; // Getter
            account.latest = 50; // Setter


        ? ES6 Class
            class Person {
                constructor(fullName, birthYear) {
                    this.fullName = fullName;
                    ? [2] This triggers the setter method
                        - Any time we use this.property, JS engine will look for a setter method with the same name and triggers it EVEN if inside the constructor/setter method or outside the class.

                    this.birthYear = birthYear;
                }

                set fullName(name) {
                    if (CONDITION)
                        this._fullName = name;
                        ? [3] Why we use "_" prefix?
                            - To avoid infinite recursion, if we use this.fullName = name; it will trigger the setter again and again.
                            - Our object now has a property called "_fullName" NOT "fullName"
                }

                get fullName() {
                    return this._fullName;
                    ? [4] that's why we have a getter method
                        - To return the "_fullName" property with name "fullName".
                        - Our object now has both "fullName" and "_fullName" properties.
                }
            }
            const jessica = new Person("Jessica Adams", 1996);
            ? [1] This triggers the constructor



    * Inheritance
        In JS class have EXACTLY One constructor.
        If you don't provide your own constructor, then a default constructor will be supplied for you.

            [1] If your class is a base class, the default constructor is empty.

                    class Parent {
                        // No constructor defined
                    }
                    const instance = new Parent(); // Works fine, uses the default constructor.


            [2] If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided.

                class Parent {
                    constructor(name) {
                        this.name = name;
                    }
                }

                class Child extends Parent {
                    // No constructor defined
                }

                const childInstance = new Child("John");
                childInstance.name; // "John"


        [1] Constructor Function (CTOR)
            ? Parent
                function Person(firstName, birthYear) {
                    this.firstName = firstName;
                    this.birthYear = birthYear;
                }

                ! NOTE
                    We know that Person.prototype is linked to Object.prototype (Person.prototype.__proto__ === Object.prototype)
                    Cause Person.prototype is an instance of Object

                Person.prototype.calcAge = function () {
                    return 2024 - this.birthYear;
                };

            ? Child
                function Student(firstName, birthYear, course) {
                    
                    // this.firstName = firstName;
                    // this.birthYear = birthYear;
                        This is a repetitive code, we can use the Parent function to avoid it.

                    !NOTES
                        In simple function call, "this" keyword refers to undefined in "strict mode" / window object in "non-strict mode".

                        Person(firstName, birthYear); // "this" inside Person function refers to undefined

                        To fix, We need to use .call() to explicitly set "this" inside Person function to the new empty object that "this" inside CTOR refers to.
                        
                    Person.call(this, firstName, birthYear)
                    this.course = course;
                }

            ? Applying Prototypal Inheritance
                We know that Student.prototype is linked to Object.prototype (Student.prototype.__proto__ === Object.prototype)
                We need to change this instead to be linked to Person.prototype (Student.prototype.__proto__ = Person.prototype)
                We use Object.create(Person.prototype) to create an empty object that is linked to Person.prototype and assign this empty object to Student.prototype (Student.prototype = Object.create(Person.prototype)) 
                We need to fix the constructor of Student to be Student (Student.prototype.constructor = Student)

                Student.prototype.introduce = function () {
                    console.log(`My name is ${this.firstName} and I study ${this.course}`);
                };

                const mike = new Student("Mike", 1997, "Computer Science");
                mike.introduce(); // From Student.prototype
                mike.calcAge(); // From Person.prototype

        [2] ES6 Classes
            class Person {
                constructor(firstName, birthYear) {
                    this.firstName = firstName;
                    this.birthYear = birthYear;
                }
                calcAge() {
                    return 2024 - this.birthYear;
                }
            }

            class Student extends Person {

                constructor(firstName, birthYear, course){
                    super(firstName, birthYear);
                    this.course = course;
                }

                introduce() {
                    console.log(`My name is ${this.firstName} and I study ${this.course}`);
                }

                ! NOTES
                    "extends" keyword
                        Links the prototype of the child class to the prototype of the parent class. (Student.prototype.__proto__ = Person.prototype)   

                    If we don't EXPLICITLY create a constructor in the child class, JS provides a default constructor that calls the parent constructor using "super()".
                        constructor(firstName, birthYear){
                            super(firstName, birthYear);
                        }
            }

            const mike = new Student("Mike", 1997, "Computer Science");
            mike.introduce(); // From Student.prototype
            mike.calcAge(); // From Person.prototype

        
        [3] Object.create()
        const personProto = {
            calcAge() {
                console.log(`${2024 - this.birthYear}`);
            },

            init(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear;
            },
        };
            personProto => Object LINKED to Object.prototype (personProto.__proto__ === Object.prototype)

        const studentProto = Object.create(personProto);
            studentProto => Object LINKED to personProto (studentProto.__proto__ === personProto)

        
        ? Adding methods to studentProto
            studentProto.init = function (firstName, birthYear, course) {
                personProto.init.call(this, firstName, birthYear);
                this.course = course;
            };

            studentProto.introduce = function () {
                console.log(`My name is ${this.firstName} and I study ${this.course}`);
            };

        const nael = Object.create(studentProto);
            nael => Object LINKED to studentProto (nael.__proto__ === studentProto)

        nael.init("Nael", 27, "Computer Science"); // From studentProto
        nael.introduce(); // From studentProto
        nael.calcAge(); // From personProto


    * Encapsulation
        class Account {
            ? Public Fields
                Available on each instance of the class.
                Can be accessed outside the class.

                locale = window.navigator.language;

            ? Private Fields
                Available on each instance of the class.
                CAN'T be accessed outside the class.

                #movements = [];
                #pin;

            constructor(owner, currency, pin) {
                this.owner = owner;
                this.currency = currency;
                this.#pin = pin;
            }

            ? Public Methods (Object member method)
                Will be added to the prototype.
                Accessible via the instance itself.

                deposit(movement) {
                    this.#movements.push(movement);
                }
                withdraw(movement) {
                    this.deposit(-movement);
                }
                requestLoan(loan) {
                    if (this.#approveLoan()) this.deposit(loan);
                }
                getMovements() {
                    return [...this.#movements];
                }

            ? Private Methods
                Won't be added to prototype.

                #approveLoan() {
                    // LOGIC
                    return true;
                }
        }


    * Static
        class Person {
            Instance method
            instanceMethod() {
                Will be added to the prototype (Person.prototype)
                "this" keyword: Refers to the object that calls the method which will be the instance of the class, cause it will be called via an instance of the class.
            }

            Static method
            static staticMethod() {
                Won't be added to the prototype, only available on the class itself.
                "this" keyword: Refers to the object that calls the method which will always be Person class, cause it can only be called on the class itself.
            }

            Static Public Method
                static hi() {
                    Can be accessed outside the class
                }

            Static Private Method
                static #hola() {
                    Can be accessed ONLY inside the class
                }

            Static Public Field
                static myName = "Nael"; // Can be accessed outside the class

            Static Private Field
                static #myPrivateName = "Abdulrhman"; // Can be accessed ONLY inside the class
        }

        Calling static method.
            Person.greet(); 

        Calling instance method.
            const nael = new Person("Nael", 27);
            const age = nael.calcAge();
*/

// * Modules
/*
    ? ES6 Modules VS Script
        ES6 Modules:
            - Top-level variables inside modules are scoped to the module.
            - Always Executed in "strict" mode.
            - this inside modules refers to undefined. 
            - can import & export
            - The file is downloaded asynchronously.
            
        Script:
            - Top-level variables are global.
            - Executed in "non-strict" mode by default.
            - this refers to the window object.
            - can't import & export
            - The file is downloaded synchronously.


    * Importing Modules Before Execution  
        After parsing the code:  
        [1] Module files are downloaded asynchronously (in browsers).  
        [2] Modules are imported synchronously, which is why imports MUST be at the top-level. This helps with bundling and tree shaking.  
        [3] Imports and exports use LIVE bindings, so updates to exports in the source module reflect in the importing module.  
        [4] The entire code in the imported module (top-level code) is executed.  
        Then the importing module's execution starts.  

    ? Notes
        Module can have Only One export default
        export default : If a module is designed to export a single value (e.g., a single class, function, or object).


    ? Top Level Await
        - Using await outside an async function.It is only valid within ECMAScript modules.

        ! Important
            When a module uses top-level await, it pauses its execution until the awaited promise resolves. Consequently, modules that depend on it will also wait, potentially affecting the loading sequence of an application.

        - If a promise rejects and the error isn't handled, it can cause the module to fail to load. (Better use try-catch)


    ? Parcel
        - A web application bundler that supports ES6 modules.
            [1] Bundles all the modules into a single file.
            [2] Adds polyfills for older browsers using (Babel).
                    Babel is built into Parcel, transpile modern JS code to support older browsers.
                    You may need to import "core-js/stable" and "regenerator-runtime/runtime"
                    "core-js/stable"
                        - Polyfills for ES6+ features like (Promise).

                    "regenerator-runtime/runtime"
                        - Polyfills for async/await.

*/

// * Form Data
/*
    Allows you to collect and manipulate form input values, including file uploads. You do not need to explicitly set enctype="multipart/form-data" in the <form> tag when using FormData.

    ? Example (Passing the Form Element Directly to the FormData Constructor)
        When you pass a <form> element to FormData, it automatically collects input values based on their name attributes.
        If there are inputs with no name attribute, they won’t be included.

        <form id="myForm">
            <input type="text" name="username" placeholder="Username">
            <input type="email" name="email" placeholder="Email">
            <input type="file" name="profilePic">
            <button type="submit">Submit</button>
        </form>

        const form = document.getElementById("myForm");
        const formData = new FormData(form)

    ? Example (Using append() to Manually Add Form Data)
        Doesn't require name attribute
        <form>
            <input id="userName" type="text" placeholder="Username">
            <input id="email" type="email" placeholder="Email">
            <input id="profilePic" type="file" >
            <button type="submit">Submit</button>
        </form>

        const formData = new FormData()
        formData.append("userName", document.getElementById("userName").value)
        formData.append("email", document.getElementById("email").value)
        formData.append("profilePic", document.getElementById("profilePic").value)

    ? Reading the values of Form Data
        for (let [key, value] of formData.entries()) 
            console.log(key, value);
        
    ? Converting the entries obj to an array of entries
        [...formData.entries()] -> Array of entries

    ? Converting FormData entries to JSON
        Object.fromEntries(formData.entries())

*/

// * History API
/*
    Allows you to manipulate the browser session history, enabling smooth navigation without page reload.
    ? Methods
        [1] window.history.pushState(state, title, url)
            Adds a new entry to the browser's history stack.
            Does not reload the page.
            Example
                window.history.pushState({ page: 1 }, "Title", "/new-page");

        [2] window.history.replaceState(state, title, url)
            Modifies the current history entry instead of adding a new one.
            Example
                window.history.replaceState({ page: 2 }, "Title", "/updated-page");

        [3] window.history.back()
            Navigates to the previous page in history (equivalent to the browser's back button).

        [4] window.history.forward()
            Navigates to the next page in history (equivalent to the browser's back button).

        [5] window.history.go(n)
            Moves forward (n > 0) or backward (n < 0) by n steps in history.
            Example
                history.go(-2); // Goes back two steps
                history.go(1);  // Moves forward one step

    ? popstate Event
        The popstate event fires when the active history entry changes (e.g., when the user clicks the back or forward button).

*/

/////////////////////////////////////////////////////////
