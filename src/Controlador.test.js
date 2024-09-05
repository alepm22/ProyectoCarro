import controlador from "./Controlador"
import revision from "./RevisionFormato";


describe("Revision del formato matriz + posicion inicial ", () => {

    describe("Verificacion Posicion Inicial RevisionFormato.ts", () => {
    it ("Posicion Inicial Correcta", () => {
        expect(revision("5,5/1,2N")).toEqual("1,2N");
    });

    it ("Posicion Inicial Incorrecta RevisionFormato.ts", () => {
        expect(revision("1.2n")).toEqual(false);
    });
    });

    describe("Verificacion Posicion Inicial Controlador.ts", () => {
        it ("Posicion Inicial Correcta", () => {
            expect(revision("5,5/1,2N")).toEqual("1,2N");
        });
    
        it ("Posicion Inicial Incorrecta Controlador.ts", () => {
            expect(revision("1.2n")).toEqual(false);
        });
        });
});