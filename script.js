function changeContent(section) {
    const content = document.getElementById("aboutContent");
  
    if (section === "skills") {
      content.innerHTML = `
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Bootstrap & Responsive Design</li>
          <li>React, Node.js, Git</li>
        </ul>
      `;
    } else if (section === "education") {
      content.innerHTML = `
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science<br>XYZ University, 2020–2024</p>
      `;
    } else if (section === "hobbies") {
      content.innerHTML = `
        <h3>Hobbies</h3>
        <p>I enjoy photography, hiking, and building personal web projects in my free time.</p>
      `;
    }
  }
  