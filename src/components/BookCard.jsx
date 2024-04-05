import { Chip, Rating, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookCard() {

    //Params for saving slug and using it to adjusting API calls and 2 variables for saving data received from those
    const {slug} = useParams()
    const [item, setItem] = useState()
    const [info, setInfo] = useState()
   
    const getBook = async () => {
        try {
          const response = await fetch(`https://openlibrary.org/search.json?q=${slug}`) //For some reason it returns also other keys than asked for, so I ended up doing includes() below
          const data = await response.json()
          console.log(data.docs.find(doc => doc.key.includes(slug)))
          setItem(data.docs.find(doc => doc.key.includes(slug)))
        } catch {
          console.error("Failed to fetch")
        }
      }

      //For some reason the normal api above call does not have an description for books, so I decided to make another call
      //I would use only this one, but this one provides only author key without the actual name, so it would need another api call anyhow
      const getInfo = async () => { 
        try {
          const response = await fetch(`https://openlibrary.org/works/${slug}.json`) 
          const data = await response.json()
          console.log(data)
          setInfo(data)
        } catch {
          console.error("Failed to fetch")
        }
      }
    
    //Two API calls with page start up
    useEffect(() => {
        getBook()
        getInfo()
    }, [])

    //This API is hard to work with as some of the fetched objects do not have some of the properties, not even as empty " "
    //Also some descriptions contain text and source lists, but it is too complicated to separate those, so they are just displayed in one <p>
    //API is quite messy and data seems to have really unorganized props
    return (
        <section>
            <div className="intro">
                <h1>Hello, it's me</h1>
            </div>
            <article className="singleBook"> 
                <h4>{item?.title}</h4>
                <img src={`https://covers.openlibrary.org/b/id/${item?.cover_i}-M.jpg`} alt="book picture" />
                <p>Author/s: {item?.author_name ? item?.author_name.join(", ") : "Unknown author"}</p>
                <p>First publish: {item?.first_publish_year}</p>
                <p>Description: {info?.description ? info?.description.value||info?.description : "No description"}</p>
                {info?.subjects ? 
                <Stack direction="row" spacing={1}><p>Hashtags: </p>{info?.subjects.map((hashtag) => (
                    <Chip label={hashtag} key={hashtag} color="primary" variant="outlined" />
                ))}</Stack>
                :
                null
                }
                {item?.ratings_average > 0 ? <p>Rating: {item?.ratings_average.toFixed(1)}<br />
                    <Rating name="read-only" value={item?.ratings_average} precision={0.5} readOnly className="rating" /></p>
                    :
                    <p>No rating given <br />
                        <Rating name="no-value" value={null} readOnly className="rating" /></p>}
                {item?.id_amazon?.[0]?.length > 0 ?
                    <button><a href={`https://www.amazon.com/s?k=${item?.id_amazon[0]}`}>Find on Amazon</a></button>
                    :
                    <button disabled>Out of stock</button>}
            </article>
        </section>
        )
}