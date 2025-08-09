import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
    const goToCse = () => {
        navigate('/Cse');
    };
    const goToEce = () => {
        navigate('/Ece');
    }
    const goToCivil = () => {
        navigate('/Civil'); 
    }
  return (
    <div className="Home">
        <h1>Welcome to E-Library Portal📚💻🌐</h1>
      <img src="https://thumbs.dreamstime.com/b/e-book-library-concept-laptop-computer-stack-books-wooden-table-72893651.jpg" 
      alt="Library" className="library-image" />
      <h2>Choose your department</h2>
      <p>Click the below button to go to your respective department page..</p>
      <div className="CSE">
        <h4>Computers Science and Engineering</h4>
      <button onClick={goToCse}>Click to go to CSE</button>
      </div>
      <div className="ECE">
        <h4>Electronics and Communication Engineering</h4>
      <button onClick={goToEce}>Click to go to ECE</button>
      </div>
      <div className="Mech">
        <h4>Mechanical Engineering Department</h4>
      <button onClick={() => navigate('/Mech')}>Click to go to Mech</button>
      </div>
      <div className="Civil">
        <h4>Civil Engineering Department</h4>
      <button onClick={goToCivil}>Click to go to Civil</button>
      </div>
    </div>
  );
}
export default Home;