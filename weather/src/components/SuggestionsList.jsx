import React from 'react'

const SuggestionsList = ({
    suggestions = ["Abu Dhabi", "Adelaide"],
    highlight,
    dataKey,
    onSuggestionClick,
}) => {
  console.log(suggestions);
  console.log(Array.isArray(suggestions));

  const getHighlightedText = (text, highlight) => {
     const parts = text.split(new RegExp(`(${highlight})`, "gi"));
     console.log(parts)
     return (
      <span>
        {parts.map((part, index)=> {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ):(
            part
          );
      })}
     </span>
     );
  }
  return (
    <React.Fragment>
    {suggestions.map((suggestion, index  )=>{
        const currSuggestion = suggestion;

        return (
          <li 
            key={index}
            onClick = {()=> onSuggestionClick(suggestion)}
          >
            {getHighlightedText(currSuggestion, highlight)}
          </li> 
        ) 
    })}
  </React.Fragment>
  );
}

export default SuggestionsList
