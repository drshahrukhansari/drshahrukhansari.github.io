document.getElementById("appointmentForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.querySelector('input[placeholder="Patient Name"]').value;
    let mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    let age = document.querySelector('input[placeholder="Age"]').value;
    let service = document.querySelector('select').value;
    let problem = document.querySelector('textarea').value;

    let message =
`*New Appointment Request*

👤 Name: ${name}
📞 Mobile: ${mobile}
🎂 Age: ${age}
🏠 Service: ${service}
🩺 Problem: ${problem}`;

    let whatsappURL =
    `https://wa.me/916377289139?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});
