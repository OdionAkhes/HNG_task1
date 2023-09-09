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
    currentDay;
    updateUTCTime();
    setInterval(updateUTCTime, 1000); 
   

}
function updateUTCTime() {
    const uTcTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =  + uTcTime;
}





