const projectArray = [
    {
        title: "Electronic Health Records System",
        description: "Description: Developed a health records system for health providers with a built-in Body Mass Index (BMI) calculation function.",
        technologie:"Technologie: Java",
        date:"Date: Oct 15, 2023",
        url:"https://github.com/Mandy-Liu0401/Electronic_Health_Record_System.git",
        image:"images/project1.jpg"

    },
    {
        title: "Appointment Scheduling Application",
        description: "Description: Designed an appointment scheduling application for appliance repair for both front-end and back-end users. Two database connected via Open Database Connectivity (ODBC).",
        technologie:"Technologies: SQL Server/ MS Access",
        date:"Date: Oct 22, 2023",
        url:"https://github.com/Mandy-Liu0401/Appointment_Scheduling_Application.git",
        image:"images/project2.jpg"
    },
    {
        title: "Donut Volume Caculator",
        description: "Description: Developed a program to calculate the volume of a donut or torus.",
        technologie:"Technologie: Java",
        date:"Date: June 9, 2023",
        url:"https://github.com/Mandy-Liu0401/DonutVolumeCalculator.git",
        image:"images/project3.jpg"
    },
    {
        "title": "Joke of the day",
        "description": "Description: Designed a joke gererator that generates a random joke from a list of jokes. ",
        "technologie":"HTML, CSS, JavaScript",
        "date":"Date: Oct 20, 2023",
        "url":"123",
        "image":"images/project4.jpg"
    },
    
];




let currentProject = 1;
let totalProject = projectArray.length;

function showProject(step) {
    currentProject += step;
    if (currentProject < 1) {
        currentProject = projectArray.length;//if less than 1, reset to 4

    } else if (currentProject > projectArray.length) {
        currentProject = 1;//once reach 4, reset to 1
    }

    /*once project number is choosen, index number = project number-1
    *pass all property contents from array to each access point in html by its id
    */

    const project = projectArray[currentProject-1];
    document.getElementById('project_title').textContent = project.title;
    document.getElementById('description').textContent = project.description;
    document.getElementById('technologie').textContent = project.technologie;
    document.getElementById('date').textContent= project.date;
    document.getElementById("project_image").src = project.image;
    document.getElementById("project_link").href = project.url;

    let progress = (currentProject / totalProject) * 100;//progress calculation
    document.getElementById("slider-progress").style.width = progress + "%";//dynamically update the progress bar

}

showProject(0);//initialize with index 0
