let dateToday = moment().format("dddd MMMM DD YYYY");
let now = moment();
let currHour = parseInt(now.format("HH"));
let startT = 8;
let l = 0;
let t = 0;
let btnTime;
let amMPm = "";
let activity = [];
let status = [];
let changes = [];

let calendar = $("#workday");
let todayDate = $("#todaysDate");
todayDate.text(dateToday.toString());

let compBtn = $(".completeBtn fa fa-lock");

// dateToday.add(i, "hours");

//currHour = 8;

function loadPage() {
  status = localStorage.getItem("calendardata");
  if (status) {
    activity = JSON.parse(status);
  }
  for (i = 0; i < 9; i++) {
    //console.log(currHour);
    let newDay = $("div");
    // Time Buttons
    $(".workday").append(
      "<br><button class=timeBtn id=btn0" + [i] + " value=" + [i] + "></button>"
    );
    l = "#btn0" + i;
    t = $(l);
    if (i < 4) {
      amMPm = "AM";
    } else if (i === 4) {
      amMPm = "M";
    } else if (i > 4) {
      amMPm = "PM";
    }
    t.text(startT + i + " " + amMPm);
    // Action Buttons
    $(".workday").append(
      "<button class=actionBtn id=abtn0" + [i] + " value=" + [i] + "></button>"
    );
    l = "";
    t = "";
    l = "#abtn0" + i;
    t = $(l);
    t.text(activity[i]);
    if (currHour === i + 8) {
      t.css("background-color", "red");
      t.css("color", "white");
    } else if (currHour < i + 8) {
      t.css("background-color", "rgb(9, 136, 111)");
    } else if (currHour > i + 8) {
      t.css("background-color", "light-grey");
    }
    // Complete Buttons
    let icon = "-home";
    $(".workday").append(
      "<button class=completeBtn id=cbtn0" + [i] + "></button>"
    );
    $(".completeBtn").addClass("fa fa-lock");
    l = "#btn0" + i;
    btnTime = $(l).val();
  }
}

loadPage();

$(".actionBtn").on("click", function () {
  let btnNmbr = this.id;
  let btnValue = this.value;
  let oldString = "";
  if (parseInt(btnValue) + 8 >= currHour) {
    if ($("#abtn0" + btnValue).text() != "") {
      console.log("taking oldstring value");
      oldString = $("#abtn0" + btnValue).text();
    }
    usrInput = activity[parseInt(btnValue)];
    usrInput = prompt("activity Scheduled1 : ", activity[btnValue]);
    console.log("old srtring : ", oldString);
    console.log(" usr iput : ", usrInput);
    if (oldString === "") {
      if (oldString != usrInput) {
        activity[parseInt(btnValue)] = usrInput;
        $("#" + btnNmbr).text(usrInput);
        $("#cbtn0" + btnValue).css("background-color", "blue");
      }
    } else if (oldString != "") {
      if (oldString != usrInput && usrInput != null) {
        activity[parseInt(btnValue)] = usrInput;
        $("#" + btnNmbr).text(usrInput);
        $("#cbtn0" + btnValue).css("background-color", "blue");
      }
      return;
    }
  }
});

$(".completeBtn").on("click", function () {
  let btnNmbr = this.id;
  let actionNmbr = $("#abtn0" + btnNmbr[5]);
  let calendarInput = actionNmbr.val();
  $("#cbtn0" + btnNmbr[5]).css("background-color", "grey");
  if (parseInt(calendarInput) + 8 >= currHour) {
    string = JSON.stringify(activity);
    localStorage.setItem("calendardata", string);
  }
});
