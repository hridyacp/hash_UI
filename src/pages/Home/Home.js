import { Grid } from '@mui/material';
import NavigationTab from '../../components/Navigation/Navigation';
import './Home.css';
import PlaceList from '../../components/PlaceList/PlaceList';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='main-container'>
    <div className="App">
      <Grid container  spacing={4} sx={{height:"100%"}}>
        <Grid item xs={12}>
        <NavigationTab />
        <PlaceList />
       
      </Grid>
      </Grid>
    </div>
    <Footer />
    </div>
  );
}

export default Home;
