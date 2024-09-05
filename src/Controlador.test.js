import controlador from "./Controlador";

describe("Controlador Tests", () => {
    describe("Movimientos de Giros desde Posición Inicial 1,2N con Comandos 'DDDID'", () => {
    it("Debería dar como resultado 1,2O", () => {
        expect(controlador("5,5/1,2N/DDDID")).toEqual("1,2O");
    });
    });

    describe("Verificación de Límites en Movimientos en el Eje Y", () => {
    it("Debería dar como resultado 1,5N", () => {
        expect(controlador("5,5/1,5N/A")).toEqual("1,5N");
    });

    it("Debería dar como resultado 1,0S", () => {
        expect(controlador("5,5/1,0S/A")).toEqual("1,0S");
    });
    });

    describe("Verificación de Límites en Movimientos en el Eje X", () => {
    it("Debería dar como resultado 5,5E", () => {
        expect(controlador("5,5/5,5E/A")).toEqual("5,5E");
    });

    it("Debería dar como resultado 0,2O", () => {
        expect(controlador("5,5/0,2O/A")).toEqual("0,2O");
    });
    });

    describe("Ejecución de Comandos Completos", () => {
    it("Ejemplo 1: Debería dar como resultado 1,3N", () => {
        expect(controlador("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
    });

    it("Ejemplo 2: Debería dar como resultado 5,1E", () => {
        expect(controlador("5,5/3,3E/AADAADADDA")).toEqual("5,1E");
    });
    });
});
