// const hewan1 = {
//   nama: "Kambing Etawa",
//   makan() {
//     return "Alhamdulillah, kenyang.";
//   },
// };

// const hewan2 = {
//   nama: "Ayam",
//   makan() {
//     return "Alhamdulillah, kenyang.";
//   },
// };

// Camel case
// kambingEtawaSuper

// Pascal case
// KambingEtawaSuper

function Hewan(nama) {
  this.nama = nama;
  this.makan = function () {
    return "Alhamdulillah, kenyang.";
  };
}

const kambing = new Hewan("Kambing Etawa");
const ayam = new Hewan("Ayam");

console.log(kambing);
console.log(ayam);

console.log(kambing.nama);
