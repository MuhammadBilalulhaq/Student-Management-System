var students = [
    {
        name: "Ali Khan",
        department: "BSCS",
        semester: "3rd",
        image: "./assets/student1.jpg"
    },
    {
        name: "Ahmed Ali",
        department: "Software Engineering",
        semester: "4th",
        image: "./assets/student2.jpg"
    },
    {
        name: "Usman Ahmed",
        department: "Information Technology",
        semester: "2nd",
        image: "./assets/student3.jpg"
    },
    {
        name: "Fatima Khan",
        department: "Data Science",
        semester: "5th",
        image: "./assets/student4.jpg"
    }
];


var studentsContainer = document.getElementById("students-container");

var students = [
    {
        name: "Ali Khan",
        department: "BSCS",
        semester: "3rd",
        image: "./assets/student1.jpg",
        modal: "Student1Modal"
    },
    {
        name: "Ahmed Ali",
        department: "Software Engineering",
        semester: "4th",
        image: "./assets/student2.jpg",
        modal: "Student2Modal"
    },
    {
        name: "Usman Ahmed",
        department: "Information Technology",
        semester: "2nd",
        image: "./assets/student3.jpg",
        modal: "Student3Modal"
    },
    {
        name: "Fatima Khan",
        department: "Data Science",
        semester: "5th",
        image: "./assets/student4.jpg",
        modal: "Student4Modal"
    }
];

var container = document.getElementById("students-container");

for (var i = 0; i < students.length; i++) {

    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");

    var card = document.createElement("div");
    card.setAttribute("class", "card h-100 border border-primary");

    var img = document.createElement("img");
    img.setAttribute("src", students[i].image);
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", students[i].name);

    var body = document.createElement("div");
    body.setAttribute("class", "card-body");

    var heading = document.createElement("h5");
    heading.setAttribute("class", "card-title");
    heading.innerText = students[i].name;

    var department = document.createElement("p");
    department.setAttribute("class", "card-text");
    department.innerText = students[i].department + " Student";

    var semester = document.createElement("p");
    semester.setAttribute("class", "card-text");
    semester.innerText = "Semester: " + students[i].semester;

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#" + students[i].modal);
    button.innerText = "View Student Information";

    body.appendChild(heading);
    body.appendChild(department);
    body.appendChild(semester);
    body.appendChild(button);

    card.appendChild(img);
    card.appendChild(body);

    col.appendChild(card);

    container.appendChild(col);
}
for (var i = 0; i < students.length; i++) {

    // Column
    var column = document.createElement("div");
    column.className = "col-lg-3 col-md-6 col-sm-12";


    // Card
    var card = document.createElement("div");
    card.className = "card h-100 border border-primary";


    // Image
    var image = document.createElement("img");
    image.src = students[i].image;
    image.className = "card-img-top";
    image.alt = students[i].name;


    // Card body
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";


    // Student name
    var name = document.createElement("h5");
    name.className = "card-title";
    name.innerText = students[i].name;


    // Department
    var department = document.createElement("p");
    department.className = "card-text";
    department.innerText = students[i].department + " Student";


    // Semester
    var semester = document.createElement("p");
    semester.className = "card-text";
    semester.innerText = "Semester: " + students[i].semester;


    // Button
    var button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerText = "View Student Information";


    // Add elements together
    cardBody.appendChild(name);
    cardBody.appendChild(department);
    cardBody.appendChild(semester);
    cardBody.appendChild(button);

    card.appendChild(image);
    card.appendChild(cardBody);

    column.appendChild(card);

    studentsContainer.appendChild(column);
}