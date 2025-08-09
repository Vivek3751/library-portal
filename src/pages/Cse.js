import { useNavigate } from 'react-router-dom';
import '../dept.css';
function Cse() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }
  const bookList = [
    { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen' , image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387741681i/108986.jpg', 
        descrip: 'A comprehensive introduction to algorithms, covering a wide range of topics.' },
    { title: 'Clean Code', author: 'Robert C. Martin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwl10vVcp0DCzNcYoYKHNMVmomG26jexWE_T_xOvLGkx_XfJEFojDToZdZ8nV',
        descrip: 'A guide to writing clean, maintainable code with practical examples.' },
    { title: 'Data Structures and Algorithms Made Easy', author: 'Narasimha Karumanchi' , image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTZk6WDB3yWBvMWIKyfhnCvst6EJ-IWwpxD6niCjAjMhCaxvXe9j-IFIfpVCKU' ,
        descrip: 'A practical guide to data structures and algorithms with examples in Java.'
    },
    { title: 'Computer Networking: A Top-Down Approach', author: 'James Kuros' , image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9kYb71IEu2lrGp7fXhr5EJIkP6hx0CzDBn9Tcw-TVpKEztaXSlgXMIPI1pG_n' ,
        descrip: 'An introduction to computer networking, covering protocols, architectures, and applications.'
    }
]
  return (
    <div>
      <h1>CSE Department</h1>
      <p>Welcome to the Computer Science and Engineering department.</p>
      <h2>Available Books</h2>
      
      <div className='book-container'>
        {bookList.map((book, index) => (
          <div className='book-card' key={index}>  
            <img src={book.image} alt={book.title}/>
            <strong>{book.title}</strong> by {book.author}
            <p>{book.descrip}</p>
          </div>
        ))}
      </div>
        
          
      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
}
export default Cse;