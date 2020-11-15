class WidgetDaily {
    /**
     * create the clock time
     */
    static setTime() {
        var clockElement = document.getElementById('clock');
    
        var now = new Date;
        var h = this.addZero(now.getHours());
        var m = this.addZero(now.getMinutes());
        var s = this.addZero(now.getSeconds());
        var time = h + ':' + m + ':' + s;
    
        clockElement.innerText = time;
    }

    /**
     * create the weekday and the dateday
     */
    static setDate() {
        var weekdayElement = document.getElementById('weekday');
        var datedayElement = document.getElementById('dateday');
    
        var now = new Date;
        var weekdayNumber = now.getDay();
        var dateday = now.getUTCDate();
        var weekday = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    
        weekdayElement.innerText = weekday[weekdayNumber];
        datedayElement.innerText = dateday;
    }

    /**
     * add a zero to a 2 digit value
     * 
     * @param {*} value 
     */
    static addZero(value) {
        if (value < 10) {
            value = "0" + value;
        }

        return value;
    }
}

WidgetDaily.setTime();
WidgetDaily.setDate();

setInterval(function () {
    WidgetDaily.setTime();
}, 1000);