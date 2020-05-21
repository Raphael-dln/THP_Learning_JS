const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// ////////////////////////////////////////////////////
// Question 1
// ////////////////////////////////////////////////////
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

array = []
books.forEach( book => {
  array.push(`${book.rented}`)
})

function isRented(element) {
  return element > 0;
}

if (array.every(isRented)){
  console.log("Tous les livres ont été loués");
}
else {
  console.log("Ils n'ont pas tous été empruntés");
}

// ////////////////////////////////////////////////////
// Question 2
// ////////////////////////////////////////////////////
console.log("Quel est livre le plus emprunté ?");

function compare(a, b) {
  const rentA = a.rented;
  const rentB = b.rented;

  let comparison = 0;
  if (rentA > rentB) {
    comparison = 1;
  } else if (rentA < rentB) {
    comparison = -1;
  }
  return comparison;
}

newBooks = books.sort(compare)
console.log(`${newBooks[newBooks.length-1].title} est le livre le plus emprunté`);




// ////////////////////////////////////////////////////
// Question 3
// ////////////////////////////////////////////////////
console.log("Quel est le livre le moins emprunté ?");
function compare(a, b) {
  const rentA = a.rented;
  const rentB = b.rented;

  let comparison = 0;
  if (rentA > rentB) {
    comparison = 1;
  } else if (rentA < rentB) {
    comparison = -1;
  }
  return comparison;
}
newBooks = books.sort(compare)
console.log(`${newBooks[0].title} est le livre le moins emprunté`);

// ////////////////////////////////////////////////////
//Question 4
// ////////////////////////////////////////////////////

console.log("Trouve le livre avec l'ID: 873495 ;");

for(let n in books) {
  if (books[n].id === 873495){
    console.log(`Le livre ${books[n].title} a l'ID n° 873495`);
  };
}


// ////////////////////////////////////////////////////
//Question 5
// ////////////////////////////////////////////////////
console.log("Supprime le livre avec l'ID: 133712 ;");
for(let n in books) {
  if (books[n].id === 133712){
    delete books[n];
  };
}
console.log("le livre avec l'ID 133712 a été supprimé");
console.log(books);

// ////////////////////////////////////////////////////
//Question 6
// ////////////////////////////////////////////////////
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");

function compare(a, b) {
  const nameA = a.title.toUpperCase();
  const nameB = b.title.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
console.log(books.sort(compare));


