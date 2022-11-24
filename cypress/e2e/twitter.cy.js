describe("Publicacion simple", () => {
  it("mostrar la publicacion", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Hola mundo");
    cy.get("#tweet-button").click();
    cy.get("#resultado-div").should("contain", "Hola mundo");
  });
  // it("mostrar mensaje alterta para una publicacion vacia", () => {
  //   cy.visit("/");
  //   cy.get("#publicacion").type("");
  //   cy.get("#tweet-button").click();
  //   cy.get("#resultado-div").each(($ele) => {
  //     cy.log($ele.text());
  //   });
  //   cy.get("#resultado-div").should("contain", "No se puede ingresar un post sin texto");
  // });
});
