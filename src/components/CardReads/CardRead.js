import { Grid, makeStyles } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import './CardRead.css';

const CardRead = ({ places }) => {
    console.log(places?.distance_img, "places")
    return (
        <Grid container xs={12}>
            <Card sx={{ display: "flex", width: "100%", backgroundImage: `url(${places?.featured_image})`, color: "white", borderRadius: "10px", height: "260px", padding: "10px", gap: "4px", justifyContent: "space-between" }}>
                    <div className="card-upper">
                        <div className="card-heading">
                            <div>{places?.name?.toUpperCase()}</div>
                            <div style={{ fontSize: "12px" }}>{places?.zone}</div>
                        </div>
                </div>
            </Card>
        </Grid>
    );
}
export default CardRead;