fetch("/bootcampforscience.github.io/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });