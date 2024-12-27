export default function About(){
  const BASE_URL = import.meta.env.BASE_URL;
  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <img src="me.jpg" alt="Me!"></img>
      <h3>Danny Peelen</h3>
      <ul>
        <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
        <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen">LinkedIn</a></li>
        <li><i class="bi bi-github"> </i><a href="https://github.com/dpeelen9">GitHub</a></li>
        <li></li>
      </ul>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <h1>About Me</h1>
      <p>Hi, my name is Danny Peelen! I am a Software Engineer currently studying at the University of Pittsburgh with a major in Computer Science and a minor in Hungarian! I am currently based in Pittsburgh, but also live an hour outside of Philadelphia.</p>
      <hr/>
      <h1>My Interests</h1>
      <h3>Computer Science</h3>
      <p>As a Software Engineer, it is no surprise Computer Science is one of my biggest interests. I am specifically interested in Machine Learning and Artifical Intelligence, and LLMs potentially looking at Natural Language Processing in the near future! </p>
      <h3>Quiz Bowl</h3>
      <p>I have been playing Quiz Bowl since middle school (9 years now woah!). I have always found learning in various topics very interesting, especially literature and fine arts, incredibly exciting. In competition I managed to place 4th individually in the National Tournament. I am currently the University of Pittsburgh's Quizbowl President and have led our team to three Top 4 finishes in my time here.</p>
      <h3>Volleyball</h3>
      <p>I switched from soccer to playing volleyball my freshman year of high school, and I never looked back. I love the fast pace of volleyball and the physicality it requires, especially playing grass and beach doubles outdoors. Over the summer, and often during breaks, you can find me playing tournaments with friends hitting as either an opposite or more recenlty setting! Here at the University of Pittsburgh I am also on the club team, being part of 7 out of 55 people to make the team during my tryouts. Up until now, I also helped our nationally-ranked #1 Women's Volleyball team in practice as well as assisting in their scouting reports, analyzing data.</p>
      <hr/>
      <h1>Hungary</h1>
      <p></p>
    </div>

    
  </div>
);
}
