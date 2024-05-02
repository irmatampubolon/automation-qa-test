## Objective:
Your task is to create and execute test cases for testing the login functionality of a web application using Cypress.

## Instructions:
1. Download and install Node JS from [here](https://nodejs.org).
2. Clone / download the this GitHub repository
3. Run `npm install` and start the node server using `node index.js`.
4. Open http://localhost:3000 to access the login page.

   The correct login credentials are:
   - Username: admin
   - Password: 123456

5. Set up Cypress to run tests against the provided login page.
6. Create test cases to validate the login functionality based on the following scenarios:
   - Positive test case: Should login successfully with valid credentials.
   - Negative test case: Should display error message when login with invalid credentials.
   - Boundary test case: Should display error message when login with empty credentials.
7. Write clear and concise test scripts using Cypress' syntax.
8. Execute the test cases and ensure they pass or fail as expected.

## Submission:
Please submit your Cypress test scripts along with the test report to your GitHub/GitLab repository. Ensure that your submission includes clear instructions on how to run the tests.

**Note:** You are encouraged to explore additional test scenarios beyond the ones listed above to demonstrate your testing skills.

## How to Run the Tests
1. Ensure Node.js and npm are installed.
2. Clone the repository and navigate into it.
3. Run `npm install` to install dependencies.
4. Start the server with `node index.js`.
5. Visit http://localhost:3000 in your browser.
6. Execute `npm run cypress:run` to run the tests.

## How to View the Test Report
After running the tests, Cypress generates a test report. The report can be found at `mochawesome-report/mochawesome.html`. To view the report, copy the path of `mochawesome.html` and paste it into your browser's address bar.