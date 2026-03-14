import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Row from './components/Row/Row'
import { ENDPOINTS } from './api/tmdb'
import './index.css'

function App() {
  return (
    <div style={{ background: '#111', minHeight: '100vh' }}>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={ENDPOINTS.fetchNetflixOriginals} endpointKey="fetchNetflixOriginals" isLargeRow />
<Row title="Trending Now"    fetchUrl={ENDPOINTS.fetchTrending}         endpointKey="fetchTrending" />
<Row title="Top Rated"       fetchUrl={ENDPOINTS.fetchTopRated}         endpointKey="fetchTopRated" />
<Row title="Action"          fetchUrl={ENDPOINTS.fetchActionMovies}     endpointKey="fetchActionMovies" />
<Row title="Comedy"          fetchUrl={ENDPOINTS.fetchComedyMovies}     endpointKey="fetchComedyMovies" />
<Row title="Horror"          fetchUrl={ENDPOINTS.fetchHorrorMovies}     endpointKey="fetchHorrorMovies" />
<Row title="Romance"         fetchUrl={ENDPOINTS.fetchRomanceMovies}    endpointKey="fetchRomanceMovies" />
<Row title="Documentaries"   fetchUrl={ENDPOINTS.fetchDocumentaries}    endpointKey="fetchDocumentaries" />
    </div>
  )
}

export default App