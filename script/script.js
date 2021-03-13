function initClock(){
    var clock = document.getElementById('tijd');
    var time = getCurrentTime(new Date());

    clock.innerHTML = time['hours'] + ':' + time['minutes'] + ':' + time['seconds'];
}


function getCurrentTime(){
    var date = new Date();
    var time = new Array;
    time['minutes'] = date.getMinutes();
    time['hours'] = date.getHours();
    time['seconds'] = date.getSeconds();

    if (time['minutes'] < 10){
        time['minutes'] = '0' + time['minutes'];
    }

    if (time['hours'] < 10){
        time['hours'] = '0' + time['hours'];
    }

    if (time['seconds'] < 10){
        time['seconds'] = '0' + time['seconds'];
    }

    return time;

}

function initDate(){
    var datum = document.getElementById('datum');
    date = new Date();
    var maanden = new Array('Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');
    datum.innerHTML = date.getDate() + ' ' + maanden[date.getMonth()] + ' ' + date.getFullYear();
}

function welkomsBericht(){
    date = new Date();
    var uren = date.getHours();
    var message;
    console.log(uren);


    if(uren > 5 && uren < 12){
        message = 'Goede morgen!';
    }
    if(uren >= 12 && uren <= 18){
        message = 'Goede middag!';


    }
    if(uren == 18 && uren < 24){
        message = 'Goede avond!';
    }

    document.getElementById('welkomBericht').innerHTML =  '<h1>' + message + '</h1>';
}


initClock();
initDate();
setInterval(initClock, 1000);
welkomsBericht();
