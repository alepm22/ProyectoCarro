import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Posicion Inicial 1,2N giro derecha", () => {
        it ("Posicion Inicial Correcta", () => {
            expect(controlador("5,5/1,2N/D")).toEqual("1,2E");
        });
    });
});