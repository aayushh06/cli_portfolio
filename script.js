document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.getElementById("terminal");
    const bootScreen = document.getElementById("boot-screen");

    // Simulate Boot Process
    setTimeout(() => {
        bootScreen.style.display = "none";
        terminal.style.display = "block";

        // Generate ASCII Art Name
        figlet("Aayush Sharma", function (err, data) {
            if (!err) {
                document.getElementById("ascii-name").innerHTML = `<pre>${data}</pre>`;
            }
        });

    }, 3000); // Delay of 3 seconds

    // Command Input Handling
    document.getElementById("command-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let command = this.value.trim().toLowerCase();
            this.value = ""; // Clear input field

            let output = document.createElement("p");
            output.className = "output-line";

            function typeOutput(text) {
                let i = 0;
                function type() {
                    if (i < text.length) {
                        output.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 50); // Typing speed
                    }
                }
                type();
            }

            switch (command) {
                case "aboutme":
                    typeOutput("Hi, I'm Aayush Sharma, an aspiring Data Scientist.");
                    break;

                case "work experience":
                    typeOutput("Machine Learning Intern at Prodigy Infotech.");
                    break;

                case "education":
                    typeOutput("Currently in Final Year of B.E. in Computer Science Engineering.");
                    break;

                case "projects":
                    typeOutput(`
                        Multi-object Classification using OpenCV
                        - Real-time object detection & classification using OpenCV & YOLOv5.

                        Music Streaming Service
                        - Personalized music recommendations for enhanced discovery.

                        Sudoku Solver Using Backtracking
                        - Python-based solver for accurate Sudoku solutions.
                    `);
                    break;

                case "skills":
                    typeOutput(`
                        TECHNICAL SKILLS
                        — Programming Languages: Python, C/C++, Java
                        — Data Analysis: Google Sheets, MS Excel, SQL
                        — Tools/Frameworks: NumPy, Pandas, Scikit-Learn, Keras*, PyTorch, Seaborn, OpenCV
                        — Web Technologies: HTML, CSS, ReactJS, Bootstrap, NodeJS
                        — Operating Systems: Windows, Linux
                        — Visualization Tools: Matplotlib, Tableau, Power BI*
                        *Elementary proficiency
                    `);
                    break;

                case "contact":
                    typeOutput("Email: aayush.design19@gmail.com");
                    break;

                case "clear":
                    document.getElementById("command-line").innerHTML = "";
                    return;

                case "help":
                    typeOutput("Available commands: aboutme, work experience, projects, education, skills, contact, clear, help");
                    break;

                default:
                    typeOutput("Command not found. Type 'help' for available commands.");
                    break;
            }

            document.getElementById("command-line").appendChild(output);
        }
    });
});
