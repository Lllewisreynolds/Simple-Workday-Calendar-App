# 05 Third-Party APIs: Work Day Scheduler

## Description

Using starter HTML & CSS code provided, my task was to produce a simple calendar application that would allow a user to save events on an hour-by-hour basis for a typical working day (9am-5pm).

This has been achieved through the deployment of the following coding practices, methods and techniques, all of which involve the manipulation of the Document Object Model (DOM), an application programming interface (API) native to the browser that provides us with a structure and means by which to affect the structure and content of a web page. Much of the interactivity injected into this day planner has come via another set of APIs available to a software developer - those accessible from third parties. This allowed me access to features that otherwise would require some time or effort to create at this nascent stage in my coding journey, allowing me to build more complex applications. Examples of the above are delineated below:

1. Current date is displayed in Header element of HTML using Day.js library.

2. For loop and If Conditionals used in conjunction with Day.js and jQuery .addClass method to update work calendar dynamically as hours elapse. Past, Present and Future classes removed from each discreet Div container to prevent issues with class precedence overriding styling applied by my for loop.

3. The jQuery event listener method has been used to add a handler function when clicking any of the button elements present in the HTML. Through jQuery's sibling() method, I am able to traverse the DOM tree in order to access the user's input in the texarea elements that sit alongside the button elements. I then retrieved the id attribute of the parent div element through dom traversal once again with the parent() method, and then drilled down further with jQuery's prop() method to access the unique id assigned to each of the 9 hour container divs.

4.  Within this same handler function, I then used two variables storing the results of the above methods as key value pairs (each hour's parent div is the key, the user's input as the value) to local storage each time the handler function is executed. An empty span element has also been created in my HTML. Finally, this element is populated with text informing the user that their inputted text has been saved to local storage.

5. I then made use of the localStorage.getItem() method to once again get access to those values saved in localStorage in order to set the values of the corresponding textarea elements through iteration/a further for loop. I made use of a template literal here to combine my string with the counter variable as an integrated expression to set these textarea elements based on their parent containers' individual 'hour' id attributes.

## Screenshot of Finalised Application - Usage

![img](./Assets/Work%20Day%20Scheduler.gif)

## Link to Deployed Application
