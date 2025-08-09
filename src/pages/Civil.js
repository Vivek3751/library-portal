import { useNavigate } from 'react-router-dom';
import '../dept.css';

function Civil() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  const bookList=[{
        title: 'The Civil Engineering Handbook',
        author: 'Wai-Fah Chen',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400347261i/3965195.jpg',
        descrip: 'This comprehensive handbook serves as a vital reference for civil engineers, covering a vast spectrum of topics from structural design to environmental issues. It\'s packed with tables, charts, and equations, making it an indispensable resource for students and professionals.'
    },
    {
        title: 'To Engineer Is Human: The Role of Failure in Successful Design', author: 'Henry Petroski',
        descrip: ' This thought-provoking book explores the crucial role of failure in engineering and how analyzing mistakes leads to progress and successful designs. It uses real-life examples to illustrate this important lesson for any engineer.',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924016i/271495.jpg'
    },
    { 
        title: 'Structural Analysis', author: 'Russell C. Hibbeler',
        descrip: 'A widely used textbook that provides a clear and comprehensive introduction to structural analysis. It covers topics such as trusses, beams, and frames, with numerous examples and problems to reinforce understanding.',
        image: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9781292089461.jpg'
    }
  ];
  return (
    <div>
      <h1>Civil Engineering Department</h1>
      <p>Welcome to the Civil Engineering department.</p>
      <h2>Available Books</h2>

      <div className='book-container'>
        {bookList.map((book, index) => (
          <div className='book-card' key={index}>
            <img src={book.image} alt={book.title} />
            <strong>{book.title}</strong> by {book.author}
            <p>{book.descrip}</p>
          </div>
        ))}
      </div>

      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
}
export default Civil;