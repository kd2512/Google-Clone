import React from "react";
import Response from "../Response";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import google_logo from "../images/google_logo.png";
import Search from "./Search.js";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live API call
  const { data } = useGoogleSearch(term);
  console.log(data);

  /* // Mock API CALL
  const data = Response;
  console.log(data); */

  return (
    <div className='searchPage'>
      <div className='searchPage_Header'>
        <Link to='/'>
          <img
            className='searchPage_logo'
            src={google_logo}
            alt='Google logo'
          ></img>
        </Link>
        <div className='searchPage_HeaderBody'>
          <Search hideButtons />

          <div className='searchPage_options'>
            <div className='searchPage_optionsLeft'>
              <div className='searchPage_option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage_option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage_option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage_option'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchPage_option'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchPage_option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='searchPage_optionsRight'>
              <div className='searchPage_option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage_option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchPage_Results'>
          <p className='searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage_result'>
              <a className='searchPage_resultDisplayLink' href={item.link}>
                {item.displayLink}{" "}
              </a>
              <a href={item.link} className='searchPage_resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
