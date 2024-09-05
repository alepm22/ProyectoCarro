import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Movimientos de giros Posicion Inicial 1,2N Comandos 'DDDID'", () => {
        it ("Salida correcta", () => {
            expect(controlador("5,5/1,2N/DDDID")).toEqual("1,2O");
        });
    });
    describe("Verificacion Movimientos Eje Y", () => {
        it ("Salida correcta cardinalidad N", () => {
            expect(controlador("5,5/1,2N/A")).toEqual("1,3N");
        });
        it ("Salida correcta cardinalidad S", () => {
            expect(controlador("5,5/1,2S/A")).toEqual("1,1S");
        });
    });
});