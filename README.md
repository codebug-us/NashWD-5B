# Create a Message Board!
###### Now, we'll be building a message board where you can comment on your chosen topic.

### Let's get started:
* Open up the folder and look through all the files: `index.html`, `script.js`, and `style.css`.
* Open up the `index.html` in Chrome.

### Build the HTML/CSS:
* Choose your message board topic and put it in the header.
* Type in a couple of default messages so our message board isn't completely empty.

### It's jQuery time:
* Open the `index.html` file (in Chrome) and reveal your javascript console.
* Navigate to your `script.js` file in Sublime, and on the line after the `$(document).ready(function(){ ` write `console.log("page is loaded")`, then refresh the webpage and look for your message in the console.
* If the previous step worked, you're ready to move on!

### Build, build, build:
*Our goal is to make the form work. It should collect the user's information (name + message), then display it on our message board. Put some information into the form, click submit, and watch it fail. Let's change that! We want to display information a user puts into the form on the message board. We'll do this using jQuery.* 
* Navigate to your `script.js` file and inside the `$(document).ready(function(){ ` select the form based on it's ID (using a jQuery selector), and save it in a variable called `form`. 
* Use `console.log()` to print your variable form to the console. Did it work?

### Great start, but before we keep going.
Think about how a computer knows the user wants to submit the form? Pause, stop reading. THINK ABOUT THAT QUESTION. If you thought the user clicks the submit button, CORRECT (Gold stars for you!!!). You'll be using jQuery's `submit()` function.
### Let's make `submit()` work
*  Use the `submit()` function to figure out if the form was submitted. An example can be found [here](https://api.jquery.com/submit/).
* Did you notice this line in the example: `event.preventDefault();`? Refresh yourself on what that line does, do we need it here?
* If you use `console.log()` to print "the form was submitted", does it work?
* Once the form is submitted use `.val()` to save the user's `name` and `message` in variables.
* `console.log` your variable to make sure you are saving them correctly.
* Now, `append()` the HTML for an individual message so that your message appears on the Message Board with the `name` and `message` values you just saved. 


#### Fancy things up a bit:
* If the appended messages don't look as good as the default ones you created in the beginning, try adding the same classes onto the HTML you're appending. 
* Notice how your form doesn't clear itself after submit? Use `.val()` to clear the input and textarea. [hint GOOGLE!](http://lmgtfy.com/?q=how+to+use+val()+to+clear+an+input)
* Let's update the message counter every time a new message is submitted! Right after you append the new message to the Message Board, create a variable called `msgCount` and set it to the `text()` of the `span` tag in the HTML that holds the count. `console.log` that value to make sure it prints 3.  
* Your `msgCount` variable is currently a string. Use Google to figure out how to convert a string to an integer in JavaScript. Convert your `msgCount` variable into an integer. 
* Set the `text()` of your `message-count` span to the correct message count. Make sure it works for adding multiple messages. 
* Done with everything else? See if you can add the current time the message was posted. Help with adding the time can be found [here](https://www.codexworld.com/how-to/get-current-date-time-using-javascript/).  