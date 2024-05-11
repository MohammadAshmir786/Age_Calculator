function calculateAge() {

    // Calculate age
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    const today = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const ageDiffInMs = today.getTime() - dateOfBirth.getTime();
    const ageYears = Math.floor(ageDiffInMs / (msPerDay * 365));
    const ageMonths = Math.floor((ageDiffInMs % (msPerDay * 365)) / (msPerDay * 30));
    const ageDays = Math.floor((ageDiffInMs % (msPerDay * 365)) % (msPerDay * 30) / msPerDay);
    
    // Calculate next birthday date and day of week
    const nextBirthday = new Date(dateOfBirth.getFullYear() + ageYears + 1, dateOfBirth.getMonth(), dateOfBirth.getDate());
    const dayOfWeek = nextBirthday.getDay();
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayOfWeekText = weekdays[dayOfWeek];

    if (
        (ageYears == 0 && ageMonths == 0 && ageDays == 0)
        || (ageYears < 0 || ageMonths < 0 || ageDays < 0)
        || !(document.getElementById("dateOfBirth").value)
    ){
        alert("Please enter a valid date of birth.");
        document.getElementById("dateOfBirth").value = "";
        return;
    } else {
         // flip the card
         document.getElementById("age-calc").classList.add("flip-form-left");
        document.getElementById("age-calc").classList.remove("flip-form-right");
        document.getElementById("response").classList.add("flip-form-right");
        document.getElementById("response").classList.remove("flip-form-left");

        // Update displayed values
        document.getElementById("years").value = ageYears;
        document.getElementById("months").value = ageMonths;
        document.getElementById("days").value = ageDays;
        document.getElementById("dobShow").textContent = dateOfBirth.toLocaleDateString();
        document.getElementById("totalYears").textContent = ageYears;
        document.getElementById("totalMonths").textContent = ageYears * 12 + ageMonths;
        document.getElementById("totalDays").textContent = Math.floor(ageDiffInMs / msPerDay);
        document.getElementById("totalWeeks").textContent = Math.floor(ageDiffInMs / (msPerDay * 7));
        document.getElementById("totalHours").textContent = Math.floor(ageDiffInMs / (msPerDay / 24));
        document.getElementById("totalMinutes").textContent = Math.floor(ageDiffInMs / (msPerDay / (24 * 60)));
        document.getElementById("totalSeconds").textContent = Math.floor(ageDiffInMs / 1000);
        document.getElementById("nextBirthday").textContent = `${nextBirthday.toLocaleDateString()} (Your Birthday is on ${dayOfWeekText})`;
    }
}
function goback(){
    document.getElementById("response").classList.remove("flip-form-right");
    document.getElementById("response").classList.add("flip-form-left");
    document.getElementById("age-calc").classList.remove("flip-form-left");
    document.getElementById("age-calc").classList.add("flip-form-right");
    document.getElementById("dateOfBirth").value = "";
}

