import React from 'react';
import "./App.css";
import Header from './components/Header.js';
import PostList from './components/Post/PostList.js';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default App;