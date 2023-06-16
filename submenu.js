

var fontSize = 15;

function getBody() {
    return document.getElementsByTagName("body")[0];
}

function changeFontSizeEl(element, size) {

    // element.style.fontSize = `${size}px`;

    if(element.getAttribute('id') !== 'font' 
        && element.getAttribute('id') !== 'moon' 
        && element.getAttribute('id') !== 'toogle') {
        element.setAttribute('style', `font-size:${size}px !important`);
    }
    
 
    for(var i=0; i < element.children.length; i++){
        changeFontSizeEl(element.children[i], size);
    }
}

function increaseFontSize() {
    var body = getBody();

    if(fontSize <= 30) {
       fontSize+= 1; 
    }
    
    changeFontSizeEl(body, fontSize);
}

function decreaseFontSize() {
    var body = getBody();

    if(fontSize > 5) {
       fontSize-= 1; 
    }
    
    changeFontSizeEl(body, fontSize);
}