document.addEventListener('DOMContentLoaded', async function (){
    //Carrusel java
    document.getElementById("prevJava").addEventListener('click', function(){
        document.getElementById("projectsJava").src = "../../data/projects_images/img1.png";
        document.getElementById("urlJava").innerHTML = "URL: <a href='tu_url'>Texto del enlace</a>";
        console.log("prevJava");
    });
    document.getElementById("nextJava").addEventListener('click', function(){
        document.getElementById("projectsJava").src = "../../data/projects_images/img2.png";
        console.log("nextJava");
    });

    //Carrusel python
    document.getElementById("prevPython").addEventListener('click', function(){
        console.log("prevPython");
        document.getElementById("urlPython").innerHTML = "URL: <a href='tu_url'>Texto del enlace</a>";
    });
    document.getElementById("nextPython").addEventListener('click', function(){
        console.log("nextPython");
    });
})