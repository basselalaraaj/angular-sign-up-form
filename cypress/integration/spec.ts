describe('Sign up form', () => {
  it('should sign up user correctly', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('Somepassword');
    cy.get('button').contains('Register').click();

    cy.contains('Registration successful');
  });
  it('should return error if password contains firstname', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('SomePeterTest');
    cy.get('button').contains('Register').click();

    cy.contains("Password can't contain first or last name");
  });
  it('should return error if password contains lastname', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('SomeDoeTest');
    cy.get('button').contains('Register').click();

    cy.contains("Password can't contain first or last name");
  });
  it('should return error if password is only lower case', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('sometest');
    cy.get('button').contains('Register').click();

    cy.contains('Password must contain lower and upper case');
  });
  it('should return error if password is only upper case', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('SOMETEST');
    cy.get('button').contains('Register').click();

    cy.contains('Password must contain lower and upper case');
  });
  it('should return error if password is shorter then 8 charaters', () => {
    cy.visit('/');
    cy.get('input[formcontrolname="firstName"]').type('Peter');
    cy.get('input[formcontrolname="lastName"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('peter@example.com');
    cy.get('input[formcontrolname="password"]').type('Some');
    cy.get('button').contains('Register').click();

    cy.contains('Password must be at least 8 characters');
  });
});
