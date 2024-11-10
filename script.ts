document.getElementById('Resumeform')!.addEventListener('submit', (event: Event) => {
    event.preventDefault(); 

    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    
    const resumeHtml = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    
    document.getElementById('resumeOutput')!.innerHTML = resumeHtml;
});
