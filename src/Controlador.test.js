import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Posicion Inicial 1,2N giro derecha e izquierda", () => {
        it ("Posicion Inicial Correcta hacia la derecha", () => {
            expect(controlador("5,5/1,2N/D")).toEqual("1,2E");
        });
        it ("Posicion Inicial Correcta hacia la izquierda", () => {
            expect(controlador("5,5/1,2N/I")).toEqual("1,2O");
        });
    });
});