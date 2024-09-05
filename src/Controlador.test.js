import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Movimientos de giros Posicion Inicial 1,2N Comandos 'DDDID'", () => {
        it ("Salida correcta", () => {
            expect(controlador("5,5/1,2N/DDDID")).toEqual("1,2O");
        });
    });
});