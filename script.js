document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const age = document.getElementById("age").value;
        const service = document.getElementById("service").value;
        const problem = document.getElementById("problem").value;

        const message =
`*New Appointment Request*

👤 Name: ${name}
📞 Mobile: ${mobile}
🎂 Age: ${age}
🏠 Service: ${service}
🩺 Problem: ${problem}`;

        const url =
`https://wa.me/916377289139?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});
