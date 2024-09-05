import revision from "./RevisionFormato";
describe("RevisionFormato pruebas", () => {
describe("Revision posicion inicial dentro matriz", () => {
    it ("Posicion Inicial Dentro de la Matriz en el limite", () => {
        expect(revision("5,5/5,5N/I")).toEqual("5,5N");
    });
    it ("Posicion Inicial Incorrecta Fuera de la Matriz en X", () => {
        expect(revision("5,5/6,2N/A")).toEqual(false);
    });
});
});