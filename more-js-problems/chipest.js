const phones = [
  {
    name: "Samsung",
    camera: 12,
    price: 25000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    price: 20000,
    color: "silver",
  },
  {
    name: "iPhone",
    camera: 12,
    price: 40000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: 12,
    price: 24000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: 12,
    price: 2000,
    color: "silver",
  },
];
function cheapestPrice() {
  let chicestPhone = phones[0];
  for (let index = 0; index < phones.length; index++) {
    const phone = phones[index];
    if (phone.price < chicestPhone.price) {
      chicestPhone = phone;
    }
  }
  return chicestPhone;
}

console.log(cheapestPrice());
