$(document).ready(function () {

    var textArr = $(".description");
    var currentHour = moment().format('HH');
    var date = moment().format('LLLL');
    var currentDay = $("#currentDay");

    // display date
    currentDay.text(date);

    // display saved values
    textArr.each(function (index) {
        var getItem = 9 + index;
        var storedVal = localStorage.getItem("calendar" + `${getItem}`);
        console.log($(this).val);
        if (storedVal !== null) {
            $(this).val(storedVal);
        };
    })
    // set field coloration
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

    // save to localStorage
    $(".saveBtn").on("click", function () {
        var saveData = $(this).data("save");
        var saveText = $(this).siblings("textarea").val();
        localStorage.setItem("calendar" + saveData, saveText);
    })


});