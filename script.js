document.getElementById('Resumeform').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    document.getElementById('resumeOutput').innerHTML = resumeHtml;
});
