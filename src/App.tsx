import { RouterProvider } from './contexts/Router';
import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-between min-h-[100dvh]'>
      <RouterProvider />
    </div>
  )
}

export default App
