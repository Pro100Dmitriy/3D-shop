import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import CategoryPage from '../../pages/category/CategoryPage'
import Authorization from '../../pages/authorization/Authorization'
import MainPage from '../../pages/main/MainPage'

function App() {
    const location = useLocation()

    return (
        <div className='app'>
            <main>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={ location } key={ location.pathname }>
                        <Route path="/" element={ <CategoryPage/> } >
                            <Route path="authorization" element={ <Authorization/> }/>
                        </Route>
                        <Route path="/main/:categoryName" element={ <MainPage/> }/>
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
