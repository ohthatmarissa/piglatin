# Pig Latin Translator

#### A program that allows users to input a string and returns the same string translated into Pig Latin.

#### By **Marissa Perry and Zach Weintraub**

## Description

A website created with HTML, CSS with Bootstrap, and JavaScript with jQuery. A user can input a word or sentence and the site will translate the input into Pig Latin and display the result on the page.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Does nothing to non-alphabetic chracters** | 3 | 3 |
| **Adds 'ay' to single letter words beginning with a vowel** | I | Iay |
| **Adds 'ay' to multi-letter words beginning with a vowel**| apple | appleay |
| **Recognizes words beginning with a consonant and moves it to the end, adds 'ay'**| cat | atcay |
| **Recognizes words with multiple consonants before the first vowel and move them all to the end, adds 'ay'** | truck | ucktray |
| **Recognizes when a word starts with 'qu' and moves both to the end, adds 'ay'**| quack | ackquay |
| **Recognizes when a word has 'qu' before the first vowel, and moves all prior consonants to the end, adds 'ay'**| squeal | ealsquay |
| **Recognizes 'y' as a vowel if it is NOT the first letter**| myself | yselfmay |
| **Exhibits all above behavior in multi-word inputs**| hello world | ellohay orldway |
| **Exhibits all above behavior regardless of capitalization**| quack | ackquay |

## Setup/Installation Requirements

1. Clone this repository.
2. Open the index.html file in your browser of choice.
3. Enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

_Email us with any questions, comments, or concerns._
_zachweintraub@gmail.com or ohthatmarissa@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Marissa Perry and Zach Weintraub}_**
