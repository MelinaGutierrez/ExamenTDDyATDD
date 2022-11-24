import Publicacion from "./sumador.js";

describe("Sumar", () => {
  let publi;
  beforeEach(()=> {
    publi = new Publicacion
  });
  it("No deberia publicar si esta vacio", () => {
    const resultado = publi.guardarPublicacion("");

    expect(resultado).toEqual("No se puede ingresar un post sin texto");
  });
});
