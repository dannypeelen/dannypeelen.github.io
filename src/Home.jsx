export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;



  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <img src={BASE_URL+"./me.jpg"} alt="Me!"></img>
      <h3>Danny Peelen</h3>
      <ul>
        <li><i class="bi bi-envelope"> </i><a href="mailto:dapeelen@gmail.com">dapeelen@gmail.com</a></li>
        <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
        <li><i class="bi bi-github"> </i><a href="https://github.com/dpeelen9" target="_blank">GitHub</a></li>
        <li></li>
      </ul>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <h1>Welcome!</h1>
      <p>My name is Danny Peelen and I'm a Software Engineer. Want to learn more? Check the "About" tab out!</p>
      <hr/>
      <h1>Updates</h1>
      <h4>12.27.2024</h4>
      <p>I launched this site, with Flashcard maker in the works!</p>

    </div>

    
  </div>
);
}
