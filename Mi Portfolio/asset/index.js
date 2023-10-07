function NavHomeBtn(){
    document.getElementById("HomeContent").style.display = "block";
    document.getElementById("AboutMeContent").style.display = "none";
    document.getElementById("ContactMeContent").style.display = "none";
}

function NavAboutMeBtn(){
    document.getElementById("HomeContent").style.display = "none";
    document.getElementById("AboutMeContent").style.display = "block";
    document.getElementById("ContactMeContent").style.display = "none";
}

function NavContactBtn(){
    document.getElementById("HomeContent").style.display = "none";
    document.getElementById("AboutMeContent").style.display = "none";
    document.getElementById("ContactMeContent").style.display = "block";

}