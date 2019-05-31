export const people = [
  {
    id: "0",
    name: "LeeOnYou",
    age: 27,
    gender: "male"
  },
  {
    id: "1",
    name: "Lee",
    age: 21,
    gender: "male"
  },
  {
    id: "2",
    name: "Chicken",
    age: 16,
    gender: "female"
  },
  {
    id: "3",
    name: "like",
    age: 24,
    gender: "male"
  },
  {
    id: "4",
    name: "MJ",
    age: 27,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));

  return filteredPeople[0]
}