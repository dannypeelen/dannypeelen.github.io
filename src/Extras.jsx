import FileUpload from './fileupload.jsx'

export default function Extras(){
    return(
    <div class="row">
      <div class="features animate__animated animate__fadeInUp">
        <div>
          <h1>Flashcard Maker</h1>
          <p>Takes PowerPoints or PDFs and turns them into a .apkg file for Anki.</p>
          <FileUpload />
          <hr></hr>
        </div>
        <div>
          <h1>Resume</h1>
          <h5>Check it out here: <a href="Daniel Peelen Resume.pdf">Daniel Peelen Resume</a></h5>
        </div>
      </div>
    </div>
  );
  }