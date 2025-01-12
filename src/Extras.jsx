import FileUpload from './fileupload.jsx'

export default function Extras(){
    return(
    <div class="resume row">
      <div class="features animate__animated animate__fadeInUp">
        {/* <div>
          <h1>Flashcard Maker</h1>
          <p>Takes PowerPoints or PDFs and turns them into a .apkg file for Anki.</p>
          <FileUpload />
          <hr></hr>
        </div> */}
        <div class="entries">
          <h1>Resume</h1>
          <hr/>
          <h2>Education</h2>
          <ul>
            <li><p><b>University of Pittsburgh, School of Computing & Information</b></p>
            <p><i>B.S, Computer Science, Hungarian</i></p>
            <p><li><b>Achievements:</b> Dean's List, 3.9 GPA</li>
            <li><b>Coursework:</b> Data Structures & Algorithms, Systems Software, Foundations of Machine Learning, Introduction to Deep Learning</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Work Experience</h2>
          <ul>
          <li><p><b>University of Pittsburgh, School of Computing & Information</b></p>
            <p><i>Teaching Assistant for Discrete Mathematics</i></p>
            <p><li>Led recitations and office hours to assist students with Discrete Mathematics topics, including formal proofs and set theory.</li>
            <li>Engaged in problem-solving techniques that support clear algorithmic thinking essential for software and system analysis.</li></p>
            </li>
            <li><p><b>Long Island Quiz Bowl Alliance</b></p>
            <p><i>B.S, Computer Science, Hungarian</i></p>
            <p><li>Supervised a team of three editors and over 50 writers to produce more than 3,000 questions across 15+ sets</li>
            <li>Utilized precise Google and Excel spreadsheets integrated with independent Python scripts to streamline data processing.</li></p>
            </li>
            <li><p><b>University of Pittsburgh Women's Volleyball Team</b></p>
            <p><i>Data Analyst & Team Manager</i></p>
            <p><li>Utilized VolleyMetrics software to code play-to-play accounts of games and analyze other teams' code to create scoutbooks for the coaching staff.</li>
            <li>Built scouting reports and ensured practices and games were as efficient as possible.</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Projects</h2>
          <ul>
            <li><p><b>University of Pittsburgh</b></p>
              <p><i>Flashcard Autogenerator</i></p>
              <p><li>Streamlined study preparation, reducing flashcard creation time by automating extraction from PDF or PPTX files and formatting content for Anki decks.
              </li>
              <li>Utilized several Python libraries and Google's Gemini API for natural language processing to extract and process text.</li>
              <li>Plans to incorporate Flask and SQLite to build into a functional website.</li></p>
              </li>
            <li><p><b>University of Pittsburgh</b></p>
            <p><i>March Madness Bracket Predictor</i></p>
            <p><li>Used Python's Pandas and scikit-learn modules to organize and test data into a one-versus-rest (OvR) classification model to predict 2024's March Madness results.</li>
            <li>Applied several data science concepts to edit and analyze data, then using machine learning techniques to make educated predictions.</li></p>
            </li>
            <li><p><b>Cedar Crest High School</b></p>
            <p><i>2023 Pennsylvania Student Council Region F Conference Website</i></p>
            <p><li>Used JSON and an S3 Bucket through Amazon Web Services (AWS) to host a dynamic website.</li>
            <li>Collaborated with the heads of the conference to build an effective website from scratch using HTML, CSS, and PHP.</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Skills</h2>
          <ul>
            <li><b>Programming Languages:</b> Java, Python, C/C++, HTML5, CSS, PHP, JavaScript, SQL</li>
            <li><b>Libraries/Frameworks:</b> React, TensorFlow, SQLite3, BeautifulSoup, Pandas, sklearn, pygame, Bootstrap</li>
            <li><b>Techincal Skills:</b> Debugging, Linux, Machine Learning, Databases, Web Application Development, AWS</li>
            <li><b>Languages: English(native), Hungarian(conversational)</b></li>
          </ul>
          <hr/>
          <h2>Extracurriculars & Awards</h2>
          <ul>
          <li><p><b>Officer, Computer Science Club @ Pitt</b></p>
            <p><li>Help organize speakers from Microsoft and Amazon for the largest organization on campus.</li>
            <li>Organized University of Pittsburgh’s SteelHacks hackathon, with 250+ attendants and sponsors such as Google, PNC, and Eaton.</li></p>
            </li>
            <li><p><b>Officer, Quiz Bowl</b></p>
            <p><li>Competed against various colleges in quiz bowl tournaments and organized several tournaments for local high school teams.</li></p>
            </li>
            <li><p><b>Hungarian Room Scholarship</b></p>
            <p><li>Awarded $6,000 to fund traveling abroad in Debrecen, Hungary to study the History of Modern Hungary.</li></p>
            </li>
          </ul>
          <hr/>
          <h2>Citizenship</h2>
            <p><b>USA, Hungary</b></p>
          <hr/>
          <p>Check out the full PDF here: <a href="Daniel Peelen Resume.pdf">Daniel Peelen Resume</a></p>
        </div>
      </div>
    </div>
  );
  }