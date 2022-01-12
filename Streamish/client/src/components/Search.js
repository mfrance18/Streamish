import React, { useEffect, useState } from "react";
import Video from "./Video";
import { searchVideos } from "../modules/VideoManager";


const SearchBar = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredSearch, setFilteredSearch] = useState([])

    const HandleSearchInput = (event) => {
        event.preventDefault();
        setSearchTerms(event.target.value);
    };

    const handleClickSearch = (event) => {
        event.preventDefault();
        searchVideos(searchTerms)
            .then(res => {
                setFilteredSearch(res)
            })
    };



    return (
        <div className="container">
            <label>Search for video </label>
            <input
                className="send_input"
                type="text"
                id="inputSearch"
                value={searchTerms}
                onChange={HandleSearchInput}
            />
            <button onClick={handleClickSearch}>Search</button>

            <>{filteredSearch.map(s => {
                return <Video key={s.id} video={s} />
            })}
            </>
        </div>)

}

export default SearchBar;