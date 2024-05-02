describe('Login Form', function() {
    beforeEach(function(){
        cy.visit('http://localhost:3000');
    });
    // Positve test case: Should display the correct elements in the login form
    it('should display the login form', function() {
        cy.get('h2').contains('Login');
        cy.get('input[id="username"]');
        cy.get('input[id="password"]');
        cy.get('button[type="submit"]');
    });
    // Positive test case: Should login successfully with valid credentials.
    it('should log in the user with correct credentials', function() {
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.get('[id="loginMessage"]').contains('Login successful!');
    });

     // Negative test case: Should display error message when login with invalid credentials.
     it('should display error message when login with invalid credentials', function() {
        cy.get('input[name="username"]').type('irmatampubolon');
        cy.get('input[name="password"]').type('12345678');
        cy.get('button[type="submit"]').click();
        cy.get('[id="loginMessage"]').should('contain', 'Invalid username or password.');
    });
    // Negative test case: Should display error messages for empty form fields (both username and password fields are empty)
    it('should display error messages for empty form fields', function() {
        cy.get('button[type="submit"]').click();
        cy.get('[id="loginMessage"]').contains('Please enter both username and password.');
    });
    // Negative test case: Should display error message when username fields is empty
    it('should display error message when username fields is empty', function() {
        cy.get('input[id="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.get('[id="loginMessage"]').contains('Please enter both username and password.');
    });
    // Negative test case: Should display error message when password field is empty
    it('should display error message when password field is empty', function() {
        cy.get('input[id="username"]').type('username');
        cy.get('button[type="submit"]').click();
        cy.get('[id="loginMessage"]').contains('Please enter both username and password.');
    });
});