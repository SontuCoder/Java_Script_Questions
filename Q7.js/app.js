let tabs = document.querySelector("#tabs");

tabs.addEventListener('click',(event)=>{
    let catagori = event.target.dataset.catagori;
    if(catagori !== undefined){
        search(catagori);
    }
});

const search=(catagori)=>{
    let img = document.querySelectorAll(".images");
    img.forEach((callElement)=>{
        if(callElement.dataset.catagori === catagori || catagori ==="all"){
            callElement.style.display = "block";
        } 
        else {
            callElement.style.display = "none";
        } 
    });
};

