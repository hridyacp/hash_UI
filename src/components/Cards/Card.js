import { Grid, makeStyles } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import maps from '../../Assets/map.png';
import fav from '../../Assets/favourite.png';
import temper from '../../Assets/temper.png';
import sight from '../../Assets/sight.png';
import current from '../../Assets/current.png';
import depth from '../../Assets/depth.png';
import './Card.css';

const Cards = ({ places }) => {
    console.log(places?.distance_img, "places")
    return (
        <Grid container xs={12}>
            <Card sx={{ display: "flex", width: "100%", backgroundImage: `url(${places?.featured_image})`, color: "white", borderRadius: "10px", height: "260px", padding: "10px", gap: "4px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", width: "60%", flexDirection: "column", justifyContent: "space-between" }}>
                    <div className="card-upper">
                        <div className="card-heading">
                            <div>{places?.name?.toUpperCase()}</div>
                            <div style={{ fontSize: "12px" }}>{places?.zone}</div>
                        </div>
                        <div className="card-favourite" style={{ background: 'rgba(255, 255, 255, 0.3)' }}>
                            <img src={fav} alt="fav" />
                        </div>

                    </div>
                    <div className="card-bottom">
                        <div className="card-left">
                            <div className="card-distance" >
                                <img width="18px" height="18px" src={maps} alt="maps" />
                                <span>Distance</span>
                                <span style={{ fontSize: "14px" }}>15<span style={{ fontSize: "12px" }}>Km</span></span>
                            </div>
                            <div className="card-distance">
                                <img width="18px" height="18px" src={places?.timer} alt="timeIcon" />
                                <span>Top Dive Time</span>
                                <span style={{ fontSize: "14px" }}>{places?.top_divetime_min}-{places?.top_divetime_max} <span style={{ fontSize: "12px" }}>Mn</span></span>
                            </div>
                        </div>
                        <div class="border"></div>
                        <div className="card-right">

                            <div className="card-distance">
                                <img width="18px" height="18px" src={places?.star} alt="star" />
                                <span style={{ fontSize: "24px" }}>{places?.sitecount}</span>
                            </div>
                            <div className="card-distance">
                                <span>Ratings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-big"></div>
                <div style={{ display: "flex", width: "fit-content", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                        <img src={depth} alt="depth" />
                        <div>{places?.depth_min}-{places?.depth_max} M</div>
                    </div>
                    <div>
                        <img src={temper} alt="temperature" />
                        <div>{places?.water_temp_min}-{places?.water_temp_max}&deg; C</div>
                    </div>
                    <div>
                        <img src={sight} alt="visibility" />
                        <div>{places?.visibility_min}-{places?.visibility_max} M</div>
                    </div>
                    <div>
                        <img src={current} alt="current" />
                        <div>{places?.current}</div>
                    </div>
                </div>


            </Card>
        </Grid>
    );
}
export default Cards;