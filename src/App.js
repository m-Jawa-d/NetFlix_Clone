import React from 'react'
import movies_requests from './movies_requests';
import Row from './Row';
import Banner from './Banner'
import Footer from './Footer'
import NavBar from "./NavBar";
function App() {


  return (
    <div className="App_class_Bgblack">
      <NavBar />
      <Banner />
      <Row isLargerRow title='NetflxOrignals' url={`${movies_requests.fetchNetflixOriginals}`} />
      <Row title='Trending Now' url={`${movies_requests.fetchTrending}`} />
      <Row title='Top Rated' url={`${movies_requests.fetchTopRated}`} />
      <Row title='Horror Movies' url={`${movies_requests.fetchHorrorMovies}`} />
      <Row title='Acton Movies' url={`${movies_requests.fetchActionMovies}`} />
      <Row title='Comedy Movies' url={`${movies_requests.fetchComedyMovies}`} />
      <Row title='Romance Movies' url={`${movies_requests.fetchRomanceMovies}`} />
      <Row title='Documentaries' url={`${movies_requests.fetchDocumentaries}`} />
      <Footer />
    </div>
  )
}

export default App
