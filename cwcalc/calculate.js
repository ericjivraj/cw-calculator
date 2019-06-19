window.onload = function () {

    var submit = document.getElementById("calcdate");

    var addDays = function () {
        var dt = new Date(date.value);
        dt.setDate(dt.getDate() + days);
        date.value = formatDate(dt);

    }

    //Christmas Holidays Academic Year 17-18
    var holiday_1 = {
        start: new Date("2017-12-17"),
        end: new Date("2018-01-08"),
    };

    //Easter Holidays Academic Year 17-18
    var holiday_2 = {
        start: new Date("2018-03-25"),
        end: new Date("2018-04-14"),
    };

    //Christmas Holidays Academic Year 18-19
    var holiday_3 = {
        start: new Date("2018-12-16"),
        end: new Date("2019-01-12"),
    };

    //Easter Holidays Academic Year 18-19
    var holiday_4 = {
        start: new Date("2019-04-07"),
        end: new Date("2019-04-28"),
    };

    //Christmas Holidays Academic Year 19-20
    var holiday_5 = {
        start: new Date("2019-12-15"),
        end: new Date("2020-01-11"),
    };

    //Easter Holidays Academic Year 19-20
    var holiday_6 = {
        start: new Date("2020-04-05"),
        end: new Date("2020-04-25"),
    };

    //Christmas Holidays Academic Year 20-21
    var holiday_7 = {
        start: new Date("2020-12-20"),
        end: new Date("2021-01-09"),
    };

    //Easter Holidays Academic Year 20-21
    var holiday_8 = {
        start: new Date("2021-04-02"),
        end: new Date("2021-04-24"),
    };

    var holidays = [holiday_1, holiday_2, holiday_3, holiday_4, holiday_5, holiday_6, holiday_7, holiday_8];

    function isDateBetween(date, start, end) {
        if (date >= start && date <= end) {
            return true;
        } else {
            return false;
        }
    }

    function isHolidayDay(date, holidays) {
        for (let i = 0; i < holidays.length; i++) {
            if (isDateBetween(date, holidays[i].start, holidays[i].end)) {
                return true;
            }
        }
        return false;
    }

    function isWeekendDay(date) {
        if (date.getDay() == 0 || date.getDay() == 6) {
            return true;
        } else {
            return false;
        }
    }

    function expectedFeedbackDate(submissionDate, holidays) {
        var newDate = new Date(submissionDate);
        var days = 20;
        var count = 0;
        while (count < days) {
            newDate.setDate(newDate.getDate() + 1);
            if (!isHolidayDay(newDate, holidays) && !isWeekendDay(newDate)) {
                console.log(newDate);
                count++;
            }
        }
        return newDate;
    }

    var formatDate = function (date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('-');
    }

    submit.onclick = function () {
        var submissionDate = document.getElementById("datesubmitted").value;
        var expectedDate = expectedFeedbackDate(submissionDate, holidays);
        var expectedDateField = document.getElementById("expectdate");
        expectedDateField.value = formatDate(expectedDate);
    };
};
