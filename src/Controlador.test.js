import controlador from "./Controlador"

describe("Controlador ", () => {

    describe("Verificacion Posicion Inicial", () => {
    it ("Posicion Inicial Correcta", () => {
        expect(controlador("1,2N")).toEqual(true);
    });
    it ("Posicion Inicial Correcta", () => {
        expect(controlador("1,2E")).toEqual(true);
    });
    it ("Posicion Inicial Correcta", () => {
        expect(controlador("5,4O")).toEqual(true);
    });

    it ("Posicion Inicial Incorrecta", () => {
        expect(controlador("1.2n")).toEqual(false);
    });
    it ("Posicion Inicial Incorrecta", () => {
        expect(controlador("1,2P")).toEqual(false);
    });
    it ("Posicion Inicial Incorrecta", () => {
        expect(controlador("12n")).toEqual(false);
    });
    });
});