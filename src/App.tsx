import type { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";
import { Root } from "./components/pages/Root";
import { Users } from "./components/pages/Users";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export { App };
