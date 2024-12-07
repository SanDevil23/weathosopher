import React, { useEffect, useState } from 'react'
import SuggestionsList from './SuggestionsList';

const Autocomplete = ({
    staticData,
    fetchSuggestions,
    placeholder = "",
    customLoading = "Loading....",
    onSelect = () => {},
    onBlur = () => {},
    onFocus = () => {},
    onChange = () => {},
    customStyles = {},
    dataKey = "",
}) => {

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const getSuggestions = async(query) => {
        setError(null);
        setLoading(true);

        try {
            let result;
            if (staticData){
                result = staticData.filter((item)=>{
                    return item.toLowerCase().includes(query.toLowerCase());
                })
            }
            // else if (fetchSuggestions){
            //     result = await fetchSuggestions(query);
            // }

            setSuggestions(result);
        } catch (error) {
            setError("Failed to Fetch Suggestions");
            setSuggestions([]);
            console.log(suggestions);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length>1){
            getSuggestions(inputValue);
        }else{
            setSuggestions([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    const handleSuggestionClick = (suggestion) => {
        setInputValue(dataKey? suggestion[dataKey]: suggestion);
        onSelect(suggestion);
        setSuggestions([]);
    }
    
  return (
    <div>
      <input 
        className='block text-lg  bg-sky-900 opacity-90 text-slate-300 w-full p-2 focus:outline-none'
        type='text'
        value={inputValue}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
      />
    {(suggestions.length>0 || loading || error) && (
        <ul className='bg-sky-900 text-slate-200 cursor-pointer'>
            {error && <div>{error}</div>}
            {loading && <div>{customLoading}</div>}
            <SuggestionsList
                dataKey={""}
                highlight={inputValue}
                suggestions={(suggestions.length===0)?["Abu Dhabi", "Amsterdam", "Adelaide"]:suggestions}
                onSuggestionClick={handleSuggestionClick}
            />  
        </ul>
    )}

    </div>
  )
}

export default Autocomplete;

