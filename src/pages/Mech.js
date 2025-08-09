import {useNavigate} from 'react-router-dom';
import '../dept.css';

function Mech() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    const bookList = [{
            title: 'Shigley\'s Mechanical Engineering Design',
            author: 'Richard G. Budynas, J. Keith Nisbett',
            image: 'https://m.media-amazon.com/images/I/91nknEz3tXL._UF1000,1000_QL80_.jpg',
            descrip: 'This book provides a comprehensive introduction to the principles of mechanics, covering both statics and dynamics. It includes numerous examples and problems to help students understand the concepts and apply them effectively.'
        },
        {
            title: 'An Introduction to Mechanical Engineering',
            author: 'Jonathan Wickert, Kemper Lewis',
            image: 'https://m.media-amazon.com/images/I/51EdWkcR3XL._UF1000,1000_QL80_.jpg',
            descrip: 'Ideal for first-year students, this book covers the basics of thermodynamics, fluid mechanics, and mechanical systems.'
        },
        {
            title: 'Mechanical Engineering: Conventional and Objective Type',
            author:'R.S. Khurmi, J.K. Gupta ',
            image:'https://m.media-amazon.com/images/I/71Bj17-ZlnL._UF1000,1000_QL80_.jpg',
            descrip:'A comprehensive book with over 6000 questions, perfect for competitive exams like GATE, IES, and SSC JE.'
        },];
    return (
        <div>
            <h1>Mechanical Engineering Department</h1>
            <p>Welcome to the Mechanical Engineering department.</p>
            <h2>Available Books</h2>

            <div className='book-container'>
                {bookList.map((book, index) => (
                    <div className='book-card' key={index}>
                        <img src={book.image} alt={book.title} />
                        <strong>{book.title}</strong>
                        <p>{book.descrip}</p>
                    </div>
                ))}
            </div>
            <button onClick={goToHome}>Back to Home</button>
        </div>    
    );
}
export default Mech;