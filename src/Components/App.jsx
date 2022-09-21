import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actors, Movies, Moviesinformation, Navbar, Profile } from "./index";
import useStyles from './styles'

export default function App() {
const classes = useStyles();

  return (
    <div className = {classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route exact path="/movies/:id" element={<Moviesinformation/>}/>
            <Route exact path="/actors/:id" element={<Actors/>}/>
            <Route exact path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}
