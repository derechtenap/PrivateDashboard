class WidgetDaily {
    constructor() {
        //
    }
    
    static setTime() {
        var clockElement = document.getElementById('clock');
    
        var now = new Date;
        var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    
        clockElement.innerText = time;
    }

    static setDate() {
        var weekdayElement = document.getElementById('weekday');
        var datedayElement = document.getElementById('dateday');
    
        var now = new Date;
        var weekdayNumber = now.getDay();
        var dateday = now.getUTCDate();
        var weekday = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    
        weekdayElement.innerText = weekday[weekdayNumber -1];
        datedayElement.innerText = dateday;
    }
}

setInterval(WidgetDaily.setTime, 100);
WidgetDaily.setDate();