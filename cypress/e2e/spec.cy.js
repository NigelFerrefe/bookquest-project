describe("Bookquest test", () => {
  it("visit the homepage", () => {
    cy.visit("https://thebookquest.netlify.app/");
  }),
    it("create and delete a book", () => {
      cy.visit("https://thebookquest.netlify.app/");
      cy.get(".add-book-button").click();
      cy.get('input#title').clear().type("book");
      cy.get('input#author').clear().type("Nigel");
      cy.get('.submit-button').click();
      cy.get('.book-card').last().click();
      cy.get('#delete').click();
      cy.get('#red-delete').click();
    });
});




// describe("Bookquest test 2", () => {
//   it("visit the homepage", () => {
//     cy.visit("https://thebookquest.netlify.app/");
//     cy.get(".book-card").first().click();
//     cy.get(".btn-detail").first().click();
//     cy.get('input#title').clear().type("book");
//   })})
   