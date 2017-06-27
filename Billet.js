var Billet = function() {
  this.passager = function (prenom, nom, age, sexe) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
  };

  this.vol = function(compagnie, numero, depart) {
  this.compagnie = compagnie;
  this.numero = numero;
  this.depart = depart;
  };

  this.depart = function(heure, ID, ville) {
    this.heure = heure;
    this.ID = ID;
    this.ville = ville;
  }
};
