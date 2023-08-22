Currency Converter

by Greg Stillwell

-- Technologies Used
 - Html
 - css
 - js
 - JSON
 - webpack
 - BABEL
 - NPM
 - ESLint
 - Jest
 - Node.js



-- Description

Currency converter is an website where you pick the amount of money in USD and pick any other country currency and it will convert USD amount to the country currency amount.

-- Setup/Installation Requirements
  Clone this repository: $ git clone https://github.com/GregStillwell/currency

  (1) Open this repository in VS Code

  (2) Go in the .gitignore type in a new line under .converage/ .env


  (1) Make a env file by:

        (2) clicking new terminal in the top left 

             (3)typing touch .env

 (1) Get your Api Key by creating a account at https://www.exchangerate-api.com/
  
 (2) Put your Api Key in the .env file by typing API_KEY= Your Api Key Here

(1) Install dotenv plugin  

      (2) Go in the terminal and typing 

        (3)npm install dotenv-webpack@2.0.0 --save-dev

(1) Go in to webpack.config.js

        Then copy and paste on line 5

         const Dotenv = require('dotenv-webpack'); 

(1) In your terminal type 
    npm install

    npm run build

    npm run start 


The server should open and then put in any amount of USD and then pick a specific currency and it will convert the amount of USD in currency you picked.



-- Known Bugs
None at this time 


-- License
Copyright (c) [2023] [Gregory leon Stillwell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.