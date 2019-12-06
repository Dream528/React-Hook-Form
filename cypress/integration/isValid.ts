context('isValid', () => {
  it('should showing valid correctly with build in validation', () => {
    cy.visit('http://localhost:3000/isValid/build-in/defaultValue');
    cy.get('#isValid').contains('false');

    cy.get('input[name="firstName"]').type('test');
    cy.get('#isValid').contains('false');
    cy.get('input[name="lastName"]').type('test');
    cy.get('#isValid').contains('true');
    cy.get('#renderCount').contains('4');
  });

  it('should showing valid correctly with build in validation and default values supplied', () => {
    cy.visit('http://localhost:3000/isValid/build-in/defaultValues');
    cy.get('#isValid').contains('true');

    cy.get('input[name="firstName"]').clear();
    cy.get('#isValid').contains('false');
    cy.get('#renderCount').contains('2');
  });

  it('should showing valid correctly with schema validation', () => {
    cy.visit('http://localhost:3000/isValid/schema/defaultValue');
    cy.get('#isValid').contains('false');

    cy.get('input[name="firstName"]').type('test');
    cy.get('#isValid').contains('false');
    cy.get('input[name="lastName"]').type('test');
    cy.get('#isValid').contains('true');
    cy.get('#renderCount').contains('3');
  });

  it('should showing valid correctly with schema validation and default value supplied', () => {
    cy.visit('http://localhost:3000/isValid/schema/defaultValues');
    cy.get('#isValid').contains('true');

    cy.get('input[name="firstName"]').clear();
    cy.get('#isValid').contains('false');
    cy.get('#renderCount').contains('2');
  });
});
