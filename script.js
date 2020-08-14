$(document).ready(function () {

    var textArr = $(".description");
    var currentHour = moment().format('HH');
    var date = moment().format('LLLL');


    textArr.each(function () {
        // console.log(this);
        var hourMark = $(this).data("hour");
        //console.log($(this));
        if (parseInt(hourMark) == currentHour) {
            $(this)[0].classList.add("present");
        } else if (parseInt(hourMark) < currentHour) {
            $(this)[0].classList.add("past");
        } else if (parseInt(hourMark) > currentHour) {
            $(this)[0].classList.add("future");
        }
    })


    // console.log(currentHour);

    // var currentDay = $("#currentDay")


    // console.log(date);

    // currentDay.textContent = day;



    // console.log(day);
    // $(".saveBtn").on("click", function () {

    // })



});