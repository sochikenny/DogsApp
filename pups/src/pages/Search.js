import React, {useState, useEffect} from "react"
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

export default function Search (){
    const [search, setSearch] = useState("")
    const [breeds, setBreeds] = useState([])
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    useEffect(()=> {
        API.getBaseBreedsList()
            .then(res => setBreeds(res.data.message))
            .catch(err => console.log(err))
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        API.getDogsOfBreed(search)
            .then(res => {
                if (res.data.status === "error"){
                    throw new Error(res.data.message)
                }
                setResults(res.data.message)
                setError("")
            })
            .catch(err => setError(err.message))
    }

    return(
        <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
          >
            {error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            value={search}
            handleChange={(e)=> setSearch(e.target.value)}
            breeds={breeds}
          />
          <SearchResults results={results} />
        </Container>
        </div>
    )
}