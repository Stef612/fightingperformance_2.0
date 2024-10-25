import React from "react";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import vid1 from "../images/vid1.mp4";
import vid3 from "../images/vid3.mp4";
import vid4 from "../images/vid4.mp4";

import "./teamSection.css";
import Person from "../components/Person";

export default function TeamSection() {
  const teamMembers = [
    {
      image: person1,
      name: "George Kossivas",
      insta: "george_kossivas",
      bio: `Certified Muay Thai coach with over 20 years of experience in boxing, kickboxing, and personal training. A dedicated athlete and coach, specializing in developing tailored fitness programs and martial arts techniques for clients of all levels, from beginner to pro.`,
      video: vid1,
    },
    {
      image: person2,
      name: "Katerina Kouts",
      insta: "katerinakoutsog",
      bio: `Certified boxing coach also competitive boxer since 2010 and member of the Greek National Boxing Team, with 10 Greek championship titles,and a European Women's Championships. Has finished studies in Sports Science and Nutrition, with a degree in Biology from the University of Athens.`,
      video: vid3,
    },
    {
      image: person3,
      name: "Lazaros Apidopoulos",
      insta: "lazarosapid",
      bio: `Certified kickboxing coach with 20+ years in martial arts, holding national titles in karate and kickboxing (3x gold). Master's in ICT and Special Education. Professional kickboxing record of 7-3. Trains neurotypical and neurodiverse children and adults.`,
      video: null,
    },
    {
      image: person4,
      name: "Christina Zampoura",
      insta: "christina_zampoura",
      bio: `Accomplished kickboxing athlete with a 13-3 record. Notable achievements include 3rd place at the 2024 IFMA World U23 Championship, 5th place at the 2023 European Games, and multiple Panhellenic titles in kickboxing and boxing.`,
      video: vid4,
    },
  ];

  return (
    <div className={`teamSection__overall-div-${teamMembers.length}`}>
      <div className={`title-part`}>
        <h1 className={`montserrat-bold meet-h2`}>
          meet <span>the team</span>
        </h1>
      </div>
      <div className={`team`}>
        {teamMembers.map((member, index) => (
          <Person
            styleNumber={teamMembers.length}
            key={index}
            image={member.image}
            name={member.name}
            insta={member.insta}
            bio={member.bio}
            video={member.video}
          />
        ))}
      </div>
    </div>
  );
}
