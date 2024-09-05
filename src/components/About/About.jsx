import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Frontend Developer</b></h3>
              <p>
               
              I'm a frontend developer with experience with languages like 
              <b>Javascript,
              React,Typescript & Figma.</b>
              Currently interning as a developer at <b>Telus International,Noida,India</b>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Programming Excellence</b> </h3>
              <p>
              Beyond the frontend, I delve into the world of programming
               languages like <b>Java & Python, </b>constantly expanding my skills to 
               tackle new challenges head-on. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Data Analyst</b></h3>
              <p>
              I have a foundational understanding of data 
              analytics principles and techniques.
               I am proficient in using MySQL, 
              Excel, and Power BI for data management and visualization.
            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Backend Developer</b> </h3>
              <p>
            Not expert but a foundational knowledge of backend frameworks
                like <b>MySql, MongoDb & Express.js </b> 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
