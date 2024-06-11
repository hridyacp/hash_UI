import { Grid } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import './CardRead.css';
import camelize from "../../Utils/Utils";

const CardRead = ({ places }) => {
    return (
        <Grid container justifyContent={"center"} alignItems={"stretch"} sx={{ height: "100%", flexGrow: 1 }}>
            <Card  sx={{ width: "100%", minHeight: "250px",  backgroundSize: "cover", color: "white", borderRadius: "10px", padding: "10px", gap: "4px", backgroundImage: `url(${places?.featured_image})`, }}>
                <div className="cardread-upper">
                    <div className="card-heading">
                        <div>{camelize(places?.name)}</div>
                        <div style={{ fontSize: "12px",fontFamily:"Gilroy-Medium" }}>{places?.zone}</div>
                    </div>
                </div>
            </Card>
        </Grid>
    );
}
export default CardRead;