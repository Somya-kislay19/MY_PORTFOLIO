import React from 'react';

const experiences = [
  {
    role: "WebDev Intern",
    organisation: "Telus International",
    startDate: "February,2024",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: "history/google.png"
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 11", "Designed the control panel"],
    imageSrc: "history/microsoft.png"
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: [
      "Worked on component library",
      "Helped create UI components"
    ],
    imageSrc: "history/netflix.png"
  }
];

const Experience = () => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <img src={exp.imageSrc} alt={`${exp.organisation} logo`} />
          <h2>{exp.role}</h2>
          <h3>{exp.organisation}</h3>
          <p>{exp.startDate} - {exp.endDate}</p>
          <ul>
            {exp.experiences.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
