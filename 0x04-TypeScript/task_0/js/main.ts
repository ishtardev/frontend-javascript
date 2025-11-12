interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Astarte",
    lastName: "goddess",
    age: 1111,
    location: "heaven",
}

const student2: Student = {
    firstName: "Astarte",
    lastName: "goddess",
    age: 2222,
    location: "heaven",
}

let studentsList = [student1, student2]

const table = document.createElement('table')
table.border = '1';

const headerRow = table.insertRow();
headerRow.insertCell(0).textContent = 'First Name';
headerRow.insertCell(1).textContent = 'First Name';

studentsList.forEach(student => {
    const row = table.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.location;
});

document.body.appendChild(table);