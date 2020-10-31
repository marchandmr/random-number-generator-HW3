# random-number-generator-HW3

link to my number generator : https://marchandmr.github.io/random-number-generator-HW3/Develop/index.html

Using my knowledge of JavaScript, and functions, I was tasked with creating an application that generated a password for the user after taking in specific criteria. To accomplish this task, I created variables containing all the different criteria the user could pick. After the user chose what they needed in their password I crated if statements for each possibility and added the strings that contained the criteria they chose, I then used math. Random to randomly select items out of the newly formed array. Finally I returned the value of the password back to the user.




GIVEN I need a new, secure password <br>
WHEN I click the button to generate a password <br>
THEN I am presented with a series of prompts for password criteria <br>
WHEN prompted for password criteria <br>
THEN I select which criteria to include in the password <br>
WHEN prompted for the length of the password <br>
THEN I choose a length of at least 8 characters and no more than 128 characters <br>
WHEN prompted for character types to include in the password <br>
THEN I choose lowercase, uppercase, numeric, and/or special characters <br>
WHEN I answer each prompt <br>
THEN my input should be validated and at least one character type should be selected <br>
WHEN all prompts are answered <br>
THEN a password is generated that matches the selected criteria <br>
WHEN the password is generated <br>
THEN the password is either displayed in an alert or written to the page <br>
