// Objetos
var pessoa = {
    nome: "Pedro",
    idade: 18,
    bonito: true,
};


var pessoa = {
    nome: "João",
    idade: 25,
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  };
  
  pessoa.saudacao(); // Olá, meu nome é João e tenho 25 anos.
  
