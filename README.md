# 05 Third-Party APIs: Work Day Scheduler

## Description

Using starter HTML & CSS code provided, my task was to produce a simple calendar application that would allow a user to save events on an hour-by-hour basis for a typical working day (9am-5pm).

This has been achieved through the deployment of the following coding practices, methods and techniques, all of which involve the manipulation of the Document Object Model (DOM), an application programming interface (API) native to the browser that provides us with a structure and means by which to affect the structure and content of a web page. Much of the interactivity injected into this day planner has come via another set of APIs available to a software developer - those accessible from third parties. This allowed me access to features that otherwise would require some time or effort to create at this nascent stage in my coding journey, allowing me to build more complex applications. Examples of the above are delineated below:

1. Current date is displayed in Header element of HTML using Day.js library.

2. For loop and If Conditionals used in conjunction with Day.js and jQuery .addClass method to update work calendar dynamically as hours elapse. Past, Present and Future classes removed from each discreet Div container to prevent issues with class precedence overriding styling applied by my for loop.

3. The jQuery event listener method has been used to add a handler function when clicking any of the button elements present in the HTML. Through jQuery's sibling() method, I am able to traverse the DOM tree in order to access the user's input in the texarea elements that sit alongside the button elements, so that they can be saved to local storage.

4. 

5. 

## Screenshot of Finalised Application - Usage

![img](./) - to be added once challenge complete.

![img](./) - to be added once challenge complete.

## Link to Deployed Application
