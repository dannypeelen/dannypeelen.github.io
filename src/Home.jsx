export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;



  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <div>
        <img src={BASE_URL+"./Portrait.jpeg"} alt="Me!"></img>
        <h3>Danny Peelen</h3>
        <ul>
          <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
          <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
          <li><i class="bi bi-github"> </i><a href="https://github.com/dannypeelen" target="_blank">GitHub</a></li>
          <li></li>
        </ul>
      </div>
      <div>
        <hr/>
        <h1>Updates</h1>
        <h4>03.05.2025</h4>
        <p>Updated my resume and gave some updates (projects & PNC internship)! Also tinkered with some style changes to improve the UI.</p>
        <h4>01.08.2025</h4>
        <p>Re-structured the site to include more of my portfolio and move parts! Flashcard maker is becoming a separate page.</p>
        <h4>12.27.2024</h4>
        <p>I launched this site, with Flashcard maker in the works!</p>
      </div>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <h1>Welcome!</h1>
      <p>My portfolio is always expanding, it might be small now, but more is on the way :)</p>
      <hr/>
      <div >
        <h3>March Madness Predictor</h3>
        <p>I built a model that predicts March Madness teams! Code will be posted soon along with 2025 predictions in March!</p>
      </div>
      <div>
        <h3>Flashcard Generator</h3>
        <p>Turns your PowerPoints and PDFs into Flashcards! Coming soon!</p>
      </div>
      <div>
        <h3>Others</h3>
        <p>Check out more of what I've done and am working on GitHub!</p>
      </div>

    </div>

    
  </div>
);
}
