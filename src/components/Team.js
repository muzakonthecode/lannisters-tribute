import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <div className="row">
      <TeamMember
        info={{
          img: "https://i1.sndcdn.com/avatars-fUtSWwLT3IdUyB2B-glHi6A-t240x240.jpg",
          name: "Tywin Lannister",
          position: "The Hand",
          phone: "+006003500",
          email: "redwedding@stark.com",
          website: "youaremyson.com",
        }}
      />
      <TeamMember
        info={{
          img: "https://i.pinimg.com/236x/8d/10/f5/8d10f539dc53ae06a050aeda6729402c--cersei-lennister-queen-cersei.jpg",
          name: "Cersei Lannister",
          position: "The Queen",
          phone: "+006003500",
          email: "69with@jaime.com",
          website: "loveyourchildren.com",
        }}
      />
      <TeamMember
        info={{
          img: "https://44.media.tumblr.com/3ce0411f827c2f7f13a889ba47d242da/a98ee08cc8cdba07-89/s400x600_f1/4f5f1365f3a4d82d0a6400b294ddc501ec956dd6.gif",
          name: "Jaime Lannister",
          position: "king's gaurd",
          phone: "+00600350",
          email: "love@sis.com",
          website: "tarthbrienne.com",
        }}
      />
      <TeamMember
        info={{
          img: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg",
          name: "Tyrion Lannister",
          position: "Former Hand",
          phone: "+006003500",
          email: "iamyour@son.com",
          website: "pleasedont.com",
        }}
      />
      <TeamMember
        info={{
          img: "https://www.totallytimelines.com/wp-content/uploads/2019/02/Tommen-Baratheon-2.jpg",
          name: "Tommen Baratheon",
          position: "RIP Tommy",
          phone: "+006003500",
          email: "wisdom@king.com",
          website: "king.king.com",
        }}
      />
      <TeamMember
        info={{
          img: "https://pbs.twimg.com/profile_images/641692100505923584/dkYqdTUK_400x400.jpg",
          name: "Myrcella Baratheon",
          position: "Princess",
          phone: "+006003500",
          email: "weloveu@myrcella.com",
          website: "fucksnakes.com",
        }}
      />
    </div>
  );
}

export default Team;
