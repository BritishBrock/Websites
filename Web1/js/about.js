


function changeFields(field){
    document.getElementById("field-background").style.backgroundImage = `url(../resources/images/about-fields${field}.jpg)`
}

function changeBottle(field){
    document.getElementById("bottle").style.backgroundImage = `url(../resources/images/bottle${field}.webp)`
    if(field == 2){
         document.getElementById("bottle").style.backgroundSize = "contain";
    }else  document.getElementById("bottle").style.backgroundSize = "cover";
}