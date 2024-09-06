function gotoHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("movies").style.display = "none";
    document.getElementById("tv").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("live").style.display = "none";
}

function gotomovies() {
    document.getElementById("movies").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("tv").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("live").style.display = "none";
}

function gototv() {
    document.getElementById("tv").style.display = "block";
    document.getElementById("movies").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("live").style.display = "none";
}

function gotosports() {
    document.getElementById("sports").style.display = "block";
    document.getElementById("movies").style.display = "none";
    document.getElementById("tv").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("live").style.display = "none";
}

function gotolive() {
    document.getElementById("live").style.display = "block";
    document.getElementById("movies").style.display = "none";
    document.getElementById("tv").style.display = "none";
    document.getElementById("sports").style.display = "none";
    document.getElementById("home").style.display = "none";
}