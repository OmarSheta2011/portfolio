import { skills } from "./skills.js";
import { projects } from "./projects.js";

function generateSkills() {
  let skillsHTML = "";
  skills.forEach((skill) => {
    skillsHTML += `
            <div class="skill">
              <h3>${skill.name}</h3>
              <img src="${skill.image}" alt="" class="lang html" />
              ${skill.state ? "" : "<span>--in progress--</span>"}
            </div>`;
  });

  document.querySelector(".skills-container").innerHTML = skillsHTML;
}

function generateprojects() {
  let projectsHTML = "";
  projects.forEach((project) => {
    projectsHTML += `
            <div class="project">
              <img
                src="${project.image}"
                alt="project photo"
                class="project-photo"
              />
              <h3 class="project-name">${project.name}</h3>
              <a
                href="${project.url}"
                class="visit-project"
                >VISIT</a
              >
            </div>`;
  });

  document.querySelector(".projects-container").innerHTML = projectsHTML;
}

generateSkills();
generateprojects();
