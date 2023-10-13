import { useState, useRef, useEffect } from "react";
import './CitySearch.css';

const CitySearch = () => {
    const [search, setSearch] = useState(null);
    const API_KEY = 'b508e50d7be6a66ece81ea9edbcb8415';

    const handleOnSubmit = (searchData) => {
        console.log('Search pressed')
        // setSearch(searchData);
        console.log(search);
    }

    const fetchWeather = async () => {
        const URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;
    }

    return (
        <div>
            <div className="searchbar">
                <label htmlFor="input">Enter City</label>
                <input type="text" placeholder="Search city..." onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleOnSubmit}>Search</button>
            </div>
        </div>
    )

}

export default CitySearch;