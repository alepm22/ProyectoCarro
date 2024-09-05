import controlador from "./Controlador"

describe("Controlador ", () => {

    describe("Verificacion Posicion Inicial", () => {
    it ("Posicion Inicial Correcta", () => {
        expect(controlador("1,2N")).toEqual("1,2N");
    });

    it ("Posicion Inicial Incorrecta", () => {
        expect(controlador("1.2n")).toEqual(false);
    });
    });
});