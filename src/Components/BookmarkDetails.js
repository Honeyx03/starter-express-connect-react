import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // This will allow us to use the URL parameters (in our app, this will be the index position of the array)
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BookmarkDetails() {
  const [bookmark] = useState([]);
  let { index } = useParams();

  useEffect(() => {}, []);
  const handleDelete = () => {};
  return (
    <article>
      <h3>
        {bookmark.isFavorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/bookmarks/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
