import revision from "./RevisionFormato";
describe("RevisionFormato pruebas", () => {
describe("Revision posicion inicial dentro matriz", () => {
    it("Posicion Inicial Dentro de la Matriz en el límite", () => {
        expect(revision("5,5/5,5N/I")).toEqual({
            posicion_inicial: "5,5N",
            comandos_movimientos: "I"
        });
    });
    it ("Posicion Inicial Incorrecta Fuera de la Matriz en X", () => {
        expect(revision("5,5/6,2N/A")).toEqual(false);
    });
});
});