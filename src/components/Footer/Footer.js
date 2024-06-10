import { Grid } from "@mui/material";
import footerLogo from "../../Assets/footerLogo.png";
import insta from "../../Assets/insta.png";
import fb from "../../Assets/fb.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ backgroundColor: "#4E9DD6", marginTop: "40px" }} className="footer-main" justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={3} justifyContent={"center"}>
                    <img src={footerLogo} alt="logo" />
                </Grid>
                <Grid item xs={5}>

                    <div className="footer-links">

                        <span>&copy; 2022 Hashinclude</span>
                        <div class="footer-border"></div>
                        <span>About Us</span>
                        <div class="footer-border"></div>
                        <span>Privacy</span>
                        <div class="footer-border"></div>
                        <span>Terms</span>
                        <div class="footer-border"></div>
                        <span>FAQ</span>
                        <div class="footer-border"></div>
                    </div>
                </Grid>
                <Grid item xs={4} justifyContent={"center"}>

                    <div className="footer-icons">

                        <img src={fb} alt="fb" />
                        <img src={insta} alt="insta" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;