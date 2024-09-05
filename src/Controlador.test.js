import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Posicion Inicial Controlador.ts", () => {
        it ("Posicion Inicial Correcta", () => {
            expect(controlador("5,5/1,2N/A")).toEqual("1,2N");
        });
        it ("Posicion Inicial Incorrecta Controlador.ts", () => {
            expect(controlador("1.2n")).toEqual(false);
        });
    });
});