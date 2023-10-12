import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import React from "react";
import {NewNote} from "./components/notes/NewNote";
import {Home} from "./views/Home";
import {AllNotes} from "./views/AllNotes";
import {Portfolio} from "./views/Portfolio";

export function AppRoutes() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/notes" element={<AllNotes />} />
        <Route path="/new" element={<NewNote />}/>

        <Route path="/portfolio" element={<Portfolio />}/>

        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Container>
  )
}
