let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

function attendance(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log("Name: " + obj[i].name + ", Cohort: " + obj[i].cohort)
    }
}
attendance(students);

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

function hr(obj){
    console.log("EMPLOYEES")
    for(let i=0; i < obj.employees.length; i++){
        let length = obj.employees[i].first_name.length + obj.employees[i].last_name.length
        console.log(i + " - " + obj.employees[i].first_name + ", " + obj.employees[i].last_name + " - " + length )
    }
    console.log("MANAGERS")
    for(let i=0; i < obj.managers.length; i++){
        let length = obj.managers[i].first_name.length + obj.managers[i].last_name.length
        console.log(i + " - " + obj.managers[i].first_name + ", " + obj.managers[i].last_name + " - " + length )
    }
}

hr(users)