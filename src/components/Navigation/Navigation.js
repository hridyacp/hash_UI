import { Grid } from "@mui/material";
import Logo from "../../Assets/logo.png";
import search from "../../Assets/search.png";
import notification from "../../Assets/notification.png";
import profile from "../../Assets/profile.png";
import browser from "../../Assets/browser.png";
import './Navigation.css';
const NavigationTab = () => {
    return (
        <Grid container xs={12} >

            <Grid item xs={9} className="logo-nav" justifyContent={"flex-start"} alignItems={"flex-start"}>
                <img width="130px" src={Logo} alt="logo" />
            </Grid>

            <Grid item xs={3}>
                <div className="right-nav">
                    <img width="54px" height="54px" src={search} alt="search" />
                    <img width="100px" height="54px" src={browser} alt="browse" />
                    <img width="54px" height="54px" src={notification} alt="notification" />
                    <img width="100px" height="54px" src={profile} alt="profile" />
                </div>
            </Grid>
        </Grid>
    )
}
export default NavigationTab;