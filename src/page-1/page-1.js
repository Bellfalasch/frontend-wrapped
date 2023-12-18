    let ctx = document.querySelector("canvas").getContext("2d");

    const results = [
        {mood: "Weekly", total: 9, shade: "#00b09b"},
        {mood: "Bi-weekly", total: 7, shade: "#0083b0"},
        {mood: "Collabs", total: 3, shade: "beige"}
    ];

    let sum = 0;
    let totalNumberOfPeople = results.reduce((sum, {total}) => sum + total, 0);
    let currentAngle = 0;

    for (let moodValue of results) {
        //calculating the angle the slice (portion) will take in the chart
        let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
        //drawing an arc and a line to the center to differentiate the slice from the rest
        ctx.beginPath();
        ctx.arc(200, 200, 200, currentAngle, currentAngle + portionAngle);
        currentAngle += portionAngle;
        ctx.lineTo(200, 200);
        //filling the slices with the corresponding mood's color
        ctx.fillStyle = moodValue.shade;
        ctx.fill();
        ctx.stroke();
        //ctx.strokeStyle = "black";
        ctx.strokeStyle = "10px solid black";
        //ctx.border = "black";
    }