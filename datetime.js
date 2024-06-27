document.getElementById('showDateButton').addEventListener('click', function() {
    const currentDate = new Date().toDateString();
    document.getElementById('dateOutput').textContent = `Current Date: ${currentDate}`;
});

document.getElementById('showTimeButton').addEventListener('click', function() {
    const now = new Date();
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Asia/Kolkata' 
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    const timeString = `Current Time: ${formattedTime} GMT+0530 (IST)`;
    document.getElementById('timeOutput').textContent = timeString;
});