describe("Publicacion simple", () => {
  it("mostrar la publicacion", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Hola mundo");
    cy.get("#tweet-button").click();
    cy.get("#resultado-div").should("contain", "Hola mundo");
  });
});
