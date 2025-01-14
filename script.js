let visibleMenu = false;

function showOcultElements(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("htmlcss");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("photoshop");
        skill[3].classList.add("wordpress");
    }
}


window.onscroll = function(){
    efectSkills();
}

function contentComplete(sectionId) {
    var contentComplete = document.getElementById("contentComplete" + sectionId);
    var buttonReadLess = document.querySelector(".see-more");

    var computedStyle = window.getComputedStyle(contentComplete);

    if (computedStyle.display === "none") {
        contentComplete.style.display = "block";
        buttonReadLess.innerHTML = "Read less";
    } else {
        contentComplete.style.display = "none";
        buttonReadLess.innerHTML = "See more";
    }
}

function openPDFInNewTab() {
    var win = window.open('resume_en.pdf', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow');
    }
}
