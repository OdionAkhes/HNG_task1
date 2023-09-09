window.onload = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date()
    console.log(currentDate);
    const currentDay = days[currentDate.getDay()]
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    "Current Day: " + currentDay;
    
    const uTcTime = currentDate.getTime()
    document.querySelector('[data-testid="currentUTCTime"]').textContent = 'UTC Time in Milliseconds: ' + uTcTime

}