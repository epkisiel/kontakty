let name1="Maxwell Wright";
let phone1="(0191) 719 6495";
let email1="Curabitur.egestas.nunc@nonummyac.co.uk";
let name2="Raja Villarreal";
let phone2="0866 398 2895";
let email2="posuere.vulpate@sed.com";
let name3="Helen Richards";
let phone3="0800 1111";
let email3="libero@convallis.edu";

console.log("Kontakt 1:");
console.log("Imię: "+name1);
console.log("Telefon: "+phone1);
console.log("Email: "+email1);

console.log("");

console.log("Kontakt ostatni:");
console.log("Imię: "+name3);
console.log("Telefon: "+phone3);
console.log("Email: "+email3);

let contacts=[{
    name: "Maxwell Wright",
    phone:"(0191) 719 6495",
    email:"Curabitur.egestas.nunc@nonummyac.co.uk"
},
{
    name:"Raja Villarreal",
    phone:"0866 398 2895",
    email:"posuere.vulpate@sed.com"
},
{
    name:"Helen Richards",
    phone:"0800 1111",
    email:"libero@convallis.edu"
}];

let contact={
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca."
};
contacts.push(contact);

console.log("");
console.log("Pierwszy kontakt: ");
console.log("Imię: "+contacts[0].name);
console.log("Telefon: "+contacts[0].phone);
console.log("Email: "+contacts[0].email);

console.log("");
console.log("Ostatni kontakt: ");
console.log("Imię: "+contacts[3].name);
console.log("Telefon: "+contacts[3].phone);
console.log("Email: "+contacts[3].email);

console.log("");

console.log("Indeks ostatniego elementu: "+(contacts.length-1));