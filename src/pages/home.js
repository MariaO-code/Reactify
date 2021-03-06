import React, { Fragment} from 'react';
import '../App';
import LayoutHome from '../components/layout-home';
import './pages.scss';
import '../components/search-home/search-home.scss';
import SearchBar from '../components/search-home';

const Home = () => {
 return(
  <Fragment>
    <LayoutHome>
    <div className="home__container">
      <div className="home">
        <div className="home__titles">
          <h2 className="home__h2">Welcome to</h2>
          <h1 className="home__h1">Spotisearch</h1>
        </div>
      </div>
      <div className="home__text--container">
        <p className="home__text">Search your favourite songs over Spotify, just enter an artist´s name in the following
        search box and enjoy!
        </p>
      </div>
      <div>
        <SearchBar type="text" placeholder="Type the name of your favourite artist" name="artist" classname="search" classnameWrite="search__write" button="search__button"/>
      </div>
    </div>       
   </LayoutHome>
  </Fragment>
 )
}

export default Home;