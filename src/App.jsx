import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage } from '@routes'

function App() {
    return (
        <BrowserRouter>
            <div className="app bg-primary min-h-screen w-full">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
