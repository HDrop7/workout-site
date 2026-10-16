const form = document.getElementById("workout-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const exercise = document.getElementById("exercise").value.trim();
    const weight = docuemnt.getElementById("weight").value;
    const reps = document.getElementById("reps").value;

    const workout = {
        exercise: exercise,
        weight: Number(weight),
        reps: Number(reps)
    };

    console.log("Workout submitted:", workout);

    alert("You tried to add a workout. While we noticed, unfortunately this functionality isn't available yet...");

    /* TODO add the workout data to google sheet or postgresql db */

    form.reset();
});
