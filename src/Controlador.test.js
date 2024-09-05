import controlador from "./Controlador"

describe("Pruebas Controlador ", () => {
    describe("Verificacion Movimientos de giros Posicion Inicial 1,2N Comandos 'DDDID'", () => {
        it ("Salida correcta", () => {
            expect(controlador("5,5/1,2N/DDDID")).toEqual("1,2O");
        });
    });
    describe("Verificacion Limites Movimientos Eje Y", () => {
        it ("Salida correcta", () => {
            expect(controlador("5,5/1,5N/A")).toEqual("1,5N");
        });
        it ("Salida correcta cardinalidad S", () => {
            expect(controlador("5,5/1,0S/A")).toEqual("1,0S");
        });
    });
    describe("Verificacion Limites Movimientos Eje X", () => {
        it ("Salida correcta", () => {
            expect(controlador("5,5/5,5E/A")).toEqual("5,5E");
        });
        it ("Salida correcta cardinalidad S", () => {
            expect(controlador("5,5/0,2O/A")).toEqual("0,2O");
        });
    });
});