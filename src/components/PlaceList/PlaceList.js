import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ListLogo from '../../Assets/ListLogo.png';
import view from '../../Assets/view.png';
import './placeList.css';
import Cards from "../Cards/Card";
import CardRead from "../CardReads/CardRead";

const PlaceList = () => {
    const viewList = ["ALL", "NEOM", "AMAALA", "TDRSC", "MAKKAH", "UMLAJJ", "AL MADINAH", "ASIR", "JASAN"];
    const [firstPlaceList, setFirstPlaceList] = useState([]);
    const [secondPlaceList, setSecondPlaceList] = useState([]);
    useEffect(() => {
        getList();

    }, [])
    const getList = async () => {
        try {
            const response = await axios.get('http://54.211.157.92/diving/laravel2/api/V1/site/home?site=all');
            let data = response?.data?.data;
            const firstList = data.slice(0, 6);
            const secondList = data.slice(6, 12);
            setFirstPlaceList(firstList);
            setSecondPlaceList(secondList);
            console.log(firstList, secondList, "ddata")
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
                    <Grid container >
                        <Grid item xs={9} className="placelist-container">
                            <img src={ListLogo} alt="list" />
                            {viewList.map((places, index) => {
                                return (
                                    <div className="placelist-view" key={index}>
                                        {places}
                                    </div>)
                            })}
                        </Grid>
                        <Grid item xs={3} className="all-item">
                            <span>View All</span>
                            <img src={view} alt="view" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
                    <Grid container spacing={2} >
                        {firstPlaceList && firstPlaceList?.length > 0 && firstPlaceList?.map((places, index) => {
                            return (
                                <Grid item xs={4} key={index} >
                                    <Cards places={places} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

            </Grid>
            <Grid container className="main-list" >
                <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} >
                    <Grid container >
                        <Grid item xs={9} className="placelist-container">
                            <span className="all-item">Reads</span>

                        </Grid>
                        <Grid item xs={3} className="all-item">
                            <span>View All</span>
                            <img src={view} alt="view" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent={"center"} alignItems={"stretch"} sx={{ height: "100%"}}>
                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className="card-contain">
                                <CardRead places={secondPlaceList[0]} />
                            </Grid>
                            {secondPlaceList.slice(1, 3).map(places => (
                                <Grid item xs={6} key={places.id} className="card-contain">
                                    <CardRead places={places} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={3} height={"100%"} >
                        <Grid container spacing={2} sx={{ height: "inherit" }}>
                            {secondPlaceList.slice(3, 4).map(places => (
                                <Grid item xs={12} key={places.id} className="card-contain">
                                    <CardRead places={places} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} >
                        <Grid container spacing={2}>
                            {secondPlaceList.slice(4, 7).map(places => (
                                <Grid item xs={12} key={places.id} className="card-contain">
                                    <CardRead places={places} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
export default PlaceList;