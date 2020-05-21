const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70") ;
for(let n in entrepreneurs) {
  if (entrepreneurs[n].year > 1969 && entrepreneurs[n].year < 1980){
    console.log(entrepreneurs[n]);
}}

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
let array = []
entrepreneurs.forEach(entrepreneur  => {
  array.push(`${entrepreneur.first} ${entrepreneur.last}`);
});
console.log(array)


console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
for(let n in entrepreneurs) {
  console.log(` ${entrepreneurs[n].first} ${entrepreneurs[n].last} a aujourd'hui ${2020 - entrepreneurs[n].year} ans.`);
};

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille");
function compare(a, b) {
  const nameA = a.last.toUpperCase();
  const nameB = b.last.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
console.log(entrepreneurs.sort(compare));