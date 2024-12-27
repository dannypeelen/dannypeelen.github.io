import FileUpload from './fileupload.jsx'

export default function Extras(){
    return(
    <div class="row">
      <div class="features animate__animated animate__fadeInUp">
        <h1>Flashcard Maker</h1>
        <p>Takes PowerPoints or PDFs and turns them into a .apkg file for Anki.</p>
        <FileUpload />
        <hr></hr>
      </div>
    </div>
  );
  }