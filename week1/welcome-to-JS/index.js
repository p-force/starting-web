// Release 0
let student = {};

student.firstName = "Petr";
student.lastName = "Perviy";

console.log(student.firstName);
console.log(student.lastName);


student["firstName"] = "Petya";
console.log(student.firstName);

delete student.firstName;
console.log(student);

// Release 1
console.log("\n\nGroup:")
let group = [];
group.push({firstName: "Petya", lastName: "Perviy"});
group.push({firstName: "Ivan", lastName:"Vtoroy"});
group.push({firstName: "Nikita", lastName: "Trety"});
console.log(group);