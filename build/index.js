// AtomicNumber;Element;Symbol;AtomicMass;Period;Group;Phase;Radioactive;Natural;Metal;Nonmetal;Metalloid;Type;MeltingPoint;BoilingPoint;Discoverer;Year;NumberofShells;NumberofValence

const testPT = [
  [1, "H", "Hydro", 1, 1],
  [2, "He", "Hellium", 1, 18],
  [8, "O", "Oxygen", 2, 16],
];

// for (let i = 1; i <= 18; i++) {
//   finalStyle =
//     finalStyle + ".x" + i + " {position:absolute;left:" + line * i + "px;}";
// }

// for (let i = 1; i <= 9; i++) {
//   finalStyle =
//     finalStyle + ".y" + i + " {position:absolute;top:" + column * i + "px;}";
// }

// doit faire boucle pour correspondre avec le grid la

function element(id, symbol, name, x, y) {
  //   let element = {
  //     id: id,
  //     symbol: symbol,
  //     name: name,
  //   };
  let li = document.createElement("li");
  li.classList.add("element", y, x);
  li.id = id;
  document.getElementById("elements").appendChild(li);
}

// testPT.forEach((i) => element(i[0], i[1], i[2], "x" + i[4], "y" + i[3]));
