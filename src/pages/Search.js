import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("Seacrh button hit >>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <form className='search'>
      <div className='search_input'>
        <SearchIcon className='search_inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='search_buttons'>
          <Button type='submit' variant='outlined' onClick={search}>
            Google Search
          </Button>
          {/* 'Button' here is used in caps as it is from materail ui */}
          {/* variant is property of materail-ui */}
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search_buttons'>
          <Button
            className='searchButtonsHidden'
            type='submit'
            variant='outlined'
            onClick={search}
          >
            Google Search
          </Button>
          {/* 'Button' here is used in caps as it is from materail ui */}
          {/* variant is property of materail-ui */}
          <Button className='searchButtonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
