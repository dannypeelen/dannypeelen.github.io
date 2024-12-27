export default function About(){
  const BASE_URL = import.meta.env.BASE_URL;
  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <img src={BASE_URL+"src/me.jpg"} alt="Me!"></img>
      <h3>Danny Peelen</h3>
      <ul>
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
      <p></p>
      <hr/>
      <h1>My Interests</h1>
      <p></p>
      <h3>Computer Science</h3>
      <p></p>
      <h3>Quiz Bowl</h3>
      <p></p>
      <h3>Volleyball</h3>
      <p></p>
      <hr/>
      <h1>Hungary</h1>
      <p></p>
    </div>

    
  </div>
);
}
