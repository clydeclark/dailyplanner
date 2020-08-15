$(document).ready(function () {

    var textArr = $(".description");
    var currentHour = moment().format('HH');
    var date = moment().format('LLLL');
    var currentDay = $("#currentDay");



    textArr.each(function (index) {
        var calField = JSON.parse(localStorage.getItem("calendar" + 9 + index));
        console.log($(calField.text));
        if (calField !== null) {
            $(this).attr("textarea").text = calField;
        }
    })

    textArr.each(function () {
        // console.log(this);
        var hourMark = $(this).data("hour");

        if (parseInt(hourMark) == currentHour) {
            $(this)[0].classList.add("present");
        } else if (parseInt(hourMark) < currentHour) {
            $(this)[0].classList.add("past");
        } else if (parseInt(hourMark) > currentHour) {
            $(this)[0].classList.add("future");
        }
    })

    currentDay.text(date);



    $(".saveBtn").on("click", function () {
        var saveData = $(this).data("save");
        var saveText = $(this).siblings("textarea").val();
        localStorage.setItem("calendar" + saveData, saveText);
    })

    // calendar09 = JSON.parse(localStorage.getItem("calendar09"));
    // calendar10 = JSON.parse(localStorage.getItem("calendar10"));
    // calendar11 = JSON.parse(localStorage.getItem("calendar11"));
    // calendar12 = JSON.parse(localStorage.getItem("calendar12"));
    // calendar13 = JSON.parse(localStorage.getItem("calendar13"));
    // calendar14 = JSON.parse(localStorage.getItem("calendar14"));
    // calendar15 = JSON.parse(localStorage.getItem("calendar15"));
    // calendar16 = JSON.parse(localStorage.getItem("calendar16"));
    // calendar17 = JSON.parse(localStorage.getItem("calendar17"));


});