const datetime = require('node-datetime');

class DateUtil {
    constructor() {
    }

    static getCurrentDate() {
        return new Date();
    };

    static getCurrentMilliseconds() {
        const dt = datetime.create();
        return dt.now();
    };


    static getCurrentDateString() {
        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        let dateString = year + "-" + month + "-" + date;
        return dateString;
    };

    static getCurrentDateInMySQLFormat() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = year + '-' + month + '-' + day;
        return date;
    };

    static getCurrentMonth() {
        let today = new Date();
        let month = today.getMonth() + 1;
        return month
    }

    static getCurrentFY() {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month >= 1 && month <= 3) {
            return (year - 1) + "-" + year;
        }
        return year + "-" + (year + 1);
    }

    static getUtcDate(){
        return new Date().toJSON().slice(0,10).replace(/-/g,'-');
    }

    static getTime(){
        return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }

}

module.exports = DateUtil;