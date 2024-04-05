import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchResults({books}) {


    console.log(books)

    //Maping the array received from API call with specific query.
    return (
    <div>
        {books?.map(product =>
            <article key={product.key}>
                <h4>{product.title}</h4>
                <img src={`https://covers.openlibrary.org/b/id/${product.cover_i}-M.jpg`} alt="book picture" />
                <p>Author/s: {product.author_name ? product.author_name.join(", ") : "Unknown author"}</p> {/*Kept coming across "undefinied" error, so figured out it has to be some books without author */}
                <p>First publish: {product.first_publish_year}</p>
                {product.ratings_average > 0 ? <p>Rating: {product.ratings_average.toFixed(1)}<br />
                    <Rating name="read-only" value={product.ratings_average} precision={0.5} readOnly className="rating" /></p>
                    :
                    <p>No rating given <br />
                        <Rating name="no-value" value={null} readOnly className="rating" /></p>}
                    <div>
                        <Link to={product.key} >More about the book</Link>
                        {/*Some books have empty id amazon field or have multiple of ids, so simple length check and pointing at first index fixed lot of errors */}
                        {product.id_amazon?.[0]?.length > 0 ?
                        <button><a href={`https://www.amazon.com/s?k=${product.id_amazon[0]}`}>Find on Amazon</a></button>
                        :
                        <button disabled>Out of stock</button>}
                    </div>
            </article>
        )}
    </div>
    )
}