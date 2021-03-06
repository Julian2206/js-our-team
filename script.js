/* 
Consegna
Viene fornita una piccola tabella che rappresenta i membri di un team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
Completate i milestone nell'ordine assegnato, non andate avanti finché non avete concluso con successo la milestone precedente.
Chiudete almeno una commit per milestone.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */

const teamMembers = [
  {
    name: "Wayne Barnett",
    occupation: "Founder & CEO",
    "profile picture": "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    occupation: "Chief Editor",
    "profile picture": "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    occupation: "Office Manager",
    "profile picture": "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    occupation: "Socila Media Manager",
    "profile picture": "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    occupation: "Developer",
    "profile picture": "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    occupation: "Graphic Designer",
    "profile picture": "barbara-ramos-graphic-designer.jpg",
  },
];

const container = document.getElementById("container");

for (let x = 0; x < teamMembers.length; x++) {
  /* console.log(
    `Greetings ==> ${teamMembers[x].name} ${teamMembers[x].occupation} ${teamMembers[x]["profile picture"]}`
  ); */
  const members = `Greetings ==> ${teamMembers[x].name} ${teamMembers[x].occupation} ${teamMembers[x]["profile picture"]}`;
  console.log(members);

  container.innerHTML += members;
}
