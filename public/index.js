// Import csv
// AtomicNumber;Element;Symbol;AtomicMass;Period;Group;Phase;Radioactive;Natural;Metal;Nonmetal;Metalloid;Type;MeltingPoint;BoilingPoint;Discoverer;Year;NumberofShells;NumberofValence

const testPT = [
  [1, "H", "Hydro", 1, 1],
  [2, "He", "Hellium", 1, 18],
  [8, "O", "Oxygen", 2, 16],
];

// css style grid

// function count(start, end) {
//   let counter = "";

//   for (let i = start; i <= end; i++) {
//     counter = counter + " " + i.toString();
//   }

//   return counter.substring(1);
// }

// function repeatSub(string, times) {
//   string = string.toString() + " ";
//   return string.repeat(times).slice(0, -1);
// }

// finalStyle =
//   ".table{display:grid;grid-template-columns:" +
//   repeatSub(30, 18) +
//   ";\ngrid-template-rows:" +
//   repeatSub(30, 9) +
//   ";\ngrid-area:\n'1 " +
//   "0 ".repeat(16) +
//   "2'\n'3 4 " +
//   "0 ".repeat(10) +
//   count(5, 10) +
//   "'\n'11 12 " +
//   "0 ".repeat(10) +
//   count(13, 18) +
//   "'\n'" +
//   count(19, 36) +
//   "'\n'" +
//   count(37, 54) +
//   "'\n'" +
//   "55 56 57-71 " +
//   count(72, 86) +
//   "'\n'" +
//   "87 88 57-71 " +
//   count(104, 118) +
//   "'\n'" +
//   "0 ".repeat(3) +
//   count(57, 71) +
//   "'\n'" +
//   "0 ".repeat(3) +
//   count(89, 103) +
//   "'\n}";

// console.log(finalStyle);

// let style = document.createElement("style");
// style.textContent = finalStyle;
// document.head.appendChild(style);
