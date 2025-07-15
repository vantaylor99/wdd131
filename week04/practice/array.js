let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const namesB = names.filter((name) => name.startsWith("B"));
const namesB2 = names.filter((name) => name.charAt(0) === "B");


console.log(namesB);
console.log(namesB2);

const namesLength = names.map((name) => name.length)


console.log(namesLength)

const initialValue = 0;

const averageLength = names.reduce(
    (accumulator, currentName) => (accumulator + currentName.length), initialValue
)

console.log(averageLength / names.length);