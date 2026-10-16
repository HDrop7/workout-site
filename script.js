const form = document.getElementById("workout-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const exercise = document.getElementById("exercise").value.trim();
    const weight = document.getElementById("weight").value;
    const reps = document.getElementById("reps").value;

    const workout = {
        exercise: exercise,
        weight: Number(weight),
        reps: Number(reps)
    };

    console.log("Workout submitted:", workout);

    alert(
        `Workout received!\n` +
        `Exercise: ${workout.exercise}\n` +
        `Weight: ${workout.weight}\n` +
        `Reps: ${workout.reps}`
    );

    /* TODO add the workout data to google sheet or postgresql db */

    form.reset();
});
