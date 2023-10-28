import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import UserRoute from './routes/UserRoute';
import AdminRoutes from './routes/AdminRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element = {<UserRoute />} />
        <Route path='/admin/*' element = {<AdminRoutes />} />
      </Routes>
    </Router>
  )
}
