const errorMessages = document.querySelectorAll(".error-message");
const submitBtn = document.getElementById("submit-btn");
const datePlaceholders = document.querySelectorAll(".date-placeholder");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("month-result");
const dayResult = document.getElementById("day-result");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");
const date = new Date();
let year = date.getFullYear();

submitBtn.addEventListener("click", () => {
  let yearValue = years.value;
  let monthValue = months.value;
  let dayValue = days.value;

  if (dayValue !== "") {
    if (dayValue > 31) {
      errorMessages[0].style.opacity = "1";
      errorMessages[0].textContent = "Must be a valid day";
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      days.style.border = "2px solid hsl(0, 100%, 67%)";
    } else {
      errorMessages[0].style.opacity = "0";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      days.style.border = "2px solid hsl(0, 0%, 86%)";

      datePlaceholders[2].style.display = "none";

      dayResult.style.display = "block";
      dayResult.textContent = dayValue;
    }
  } else {
    errorMessages[0].style.opacity = "1";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    days.style.border = "2px solid hsl(0, 100%, 67%)";
  }

  if (monthValue !== "") {
    if (monthValue > 12) {
      errorMessages[1].style.opacity = "1";
      errorMessages[1].textContent = "Must be a valid month";
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      months.style.border = "2px solid hsl(0, 100%, 67%)";
    } else {
      errorMessages[1].style.opacity = "0";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      months.style.border = "2px solid hsl(0, 0%, 86%)";

      datePlaceholders[1].style.display = "none";

      monthResult.style.display = "block";
      monthResult.textContent = monthValue;
    }
  } else {
    errorMessages[1].style.opacity = "1";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    months.style.border = "2px solid hsl(0, 100%, 67%)";
  }

  if (yearValue !== "") {
    if (yearValue > year) {
      errorMessages[2].style.opacity = "1";
      errorMessages[2].textContent = "Must be in the past";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      years.style.border = "2px solid hsl(0, 100%, 67%)";
    } else {
      errorMessages[2].style.opacity = "0";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      years.style.border = "2px solid hsl(0, 0%, 86%)";

      datePlaceholders[0].style.display = "none";

      yearResult.style.display = "block";
      yearResult.textContent = yearValue;
    }
  } else {
    errorMessages[2].style.opacity = "1";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    years.style.border = "2px solid hsl(0, 100%, 67%)";
  }
});
