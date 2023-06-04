# Password-Generator

A random password generator using user input for criteria - 

## Overview

HTML file links to CSS Stylesheet while JavaScript provides the user prompts, confirmation and generation of a password that meets the criteria of the user inputs.  User is presented with a prompt message to choose a password length that is 8 to 128 characters.  If the user inputs a value outside those parameters, user is prompted with a message reminding of the parameters.  Once the user inputs a whole number between 8 and 128, they see an alert that confirms their choice and their input is logged in the console as a number. 

Then the user interacts with a series of prompts to choose yes or no as to whether or not they want to include numeric characters, uppercase letters, lowercase letters, and/or special characters.  Each user input is confirmed with an alert confirming their choice and a boolean value is logged in the console. 

If user chooses no to all types of character type options, they are alerted as such and instructed what to do to start over.

## Approach

First created the variables related to the prompts the user inputs for their desired criteria. This process allowed for thinking through all the possible ways the user may or may not input criteria.  Then developed the user prompts alerts and confirms.  Determined that data type for user input was best as numbers for password length and booean for yes or no questions on each character type offered.

Starter code provided guidance on how the button, user behavior and input values should work to generate the password.  First attempt at the logic shed light on other issues to consider and those issued were tracked.

Trial and error through testing led to a better understanding of scope and where variables needed to be declared and generally where lines of coded needed to be located.

## Resources

- Recordings of class videos to better understand the JavaScript.
- The book "Simplified JavaScript for VIPS" by Ebenezer Don provided clarification on key concepts.
- GitHub issues feature was helpful to structure approach and as a reminder to go back and fix bugs
- Endless googling for information looking for a needle in a haystack to answer my questions

## Image

![AD564A44-3363-4BDC-A5CA-EAA2DA18C901](https://github.com/aliehs111/JS-Password-Generator/assets/128503077/3e913ae9-b0c9-4e50-b64c-7331307fd648)

