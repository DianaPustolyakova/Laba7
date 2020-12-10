function sound(instrument) {

    var music = new Audio('sounds/' + instrument + '.mp3');
    var div = document.querySelector('#' + instrument);
    div.style.border = "5px solid red";
    music.play();

    switch(instrument) {
        case 'arfa':
            setTimeout(clearBorder, 7500);
            break;
        case 'electroguitar':
            setTimeout(clearBorder, 7000);
            break;
        case 'gusli':
            setTimeout(clearBorder, 7000);
            break;
        case 'ukulele':
            setTimeout(clearBorder, 4000);
            break;
        case 'volynka':
            setTimeout(clearBorder, 6000);
            break;
        default:
            alert('something went wrong!!');
            break;
    }

    function clearBorder() {
        div.style.border = "0";
    }
}

