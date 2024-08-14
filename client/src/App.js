import React from "react";

import { Routes, Route } from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => (
    <Routes>
        <Route path='/' exact element={<Join />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
    </Routes>
)

export default App;