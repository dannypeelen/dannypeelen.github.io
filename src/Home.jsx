export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;



  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <div>
        <img src={BASE_URL+"./me.jpg"} alt="Me!"></img>
        <h3>Danny Peelen</h3>
        <ul>
          <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
          <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
          <li><i class="bi bi-github"> </i><a href="https://github.com/dpeelen9" target="_blank">GitHub</a></li>
          <li></li>
        </ul>
      </div>
      <div>
        <hr/>
        <h1>Updates</h1>
        <h4>12.27.2024</h4>
        <p>I launched this site, with Flashcard maker in the works!</p>
        <h4>01.08.2025</h4>
        <p>Re-structured the site to include more of my portfolio and move parts! Flashcard maker is getting moved.</p>
      </div>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <h1>Welcome!</h1>
      <p>My portfolio is always expanding, it might be small now, but more is on the way :)</p>
      <hr/>
      <div class="project animate__animated animate__pulse">
        <h3>March Madness Predictor</h3>
        <p>I built a model that predicts March Madness teams! Code will be posted soon along with 2025 predictions in March!</p>
      </div>
      <div class="project animate__animated animate__pulse">
        <h3>Flashcard Generator</h3>
        <p>Turns your PowerPoints and PDFs into Flashcards! Click <a href="">here</a> to use!</p>
      </div>
      <div class="project animate__animated animate__pulse">
        <h3>Hack@Brown Project</h3>
        <p>COMING SOON, February 2nd</p>
      </div>
      <div class="project animate__animated animate__pulse">
        <h3>TartanHacks Project</h3>
        <p>COMING SOON, February 8th</p>
      </div>
    </div>

    
  </div>
);
}
