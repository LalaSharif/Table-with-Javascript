let myArr = [
  {
    name: "Name",
    surname: "Surname",
    id: "ID",
    phone: "Phone",
  },
  {
    name: "Jhon",
    surname: "Doe",
    id: "777",
    phone: 12121212,
  },
  {
    name: "Walter",
    surname: "White",
    id: "888",
    phone: 13131313,
  },
  {
    name: "Mary",
    surname: "Jane",
    id: "999",
    phone: 14141414,
  },
];

let txt = ``;
myArr.forEach(function (item) {
  txt += `<tr><td>${item.name}</td><td>${item.surname}</td><td>${item.id}</td><td>${item.phone}</td><tr>`;
});

document.querySelector("table").innerHTML = txt;
