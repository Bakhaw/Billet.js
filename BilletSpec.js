describe("billet", function() {

   beforeEach(function() {
     billet = new Billet();
   });
   it("should be able to receive a passager", function() {
     billet.passager("Faïssal", "Hattou");
     expect(billet.prenom).toEqual("Faïssal");
     expect(billet.nom).toEqual("Hattou")
   });

     it("should be able to receive a vol", function() {
       billet.vol("Air France", "A 764", "Orly");
       expect(billet.compagnie).toEqual("Air France");
       expect(billet.numero).toEqual("A 764");
       expect(billet.depart).toEqual("Orly");
     });
     it("should be able to receive a depart", function() {
       billet.depart("10:00", "AIF", "Paris");
       expect(billet.heure).toEqual("10:00");
       expect(billet.ID).toEqual("AIF");
       expect(billet.ville).toEqual("Paris");
     });

 });
