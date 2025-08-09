import { useNavigate } from 'react-router-dom';
import '../dept.css';

function Ece() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  const bookList = [
    { title: 'Electronic Devices and Circuit Theory', author: ' Robert L. Boylestad and Louis Nashelsky', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1186770238i/1679601.jpg',
        descrip: 'This classic textbook provides a comprehensive introduction to electronic devices, including diodes, transistors (BJT, FET), and their circuit applications. Its known for its clear explanations and numerous examples.' },
    { title: 'Microelectronic Circuits', author: 'Adel S. Sedra and Kenneth C. Smith', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388544445i/198582.jpg',
        descrip:'this book is a foundational text for analog and digital integrated circuit design. It offers a thorough treatment of circuit analysis and design, from basic principles to advanced topics like operational amplifiers.'
    } ,
    {title: 'Signals and Systems', authpr: 'Alan V. Oppenheim, Alan S. Willsky, and S. Hamid Nawab', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348706550i/166327.jpg',
        descrip:' This is the definitive textbook for signals and systems, covering continuous and discrete-time signals, Fourier analysis, Laplace transforms, and Z-transforms. '
    },
    { title:'Analog and Digital Communication Systems', author: 'Simon Haykin'
      , image: 'https://pictures.abebooks.com/isbn/9788126509324-us.jpg',
        descrip: 'This book provides a comprehensive introduction to both analog and digital communication systems, including modulation techniques, noise analysis, and information theory. It is widely used in undergraduate and graduate courses.'
    }
  ];
  return (
    <div>
        <h1>ECE Department</h1>
        <p>Welcome to the Electronics and Communication Engineering department.</p>
        <h2>Available Books</h2>

        <div className='book-container'>
          {bookList.map((book, index) => (
            <div className='book-card' key={index}>
              <img src={book.image} alt={book.title} />
              <strong>{book.title}</strong> by {book.author}
              <p>{book.descrip}</p>
            </div>
          )
        )}
        </div>
        <button onClick={goToHome}>Back to Home</button>
    </div>
  );
}
export default Ece;