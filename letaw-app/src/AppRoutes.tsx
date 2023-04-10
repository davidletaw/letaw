import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import React from "react";
import {NewNote} from "./notes/NewNote";

export function AppRoutes() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/new" element={<NewNote />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}/>
          <Route path="edit" element={<h1>Edit</h1>}/>
        </Route>
      </Routes>
    </Container>
  )
}
