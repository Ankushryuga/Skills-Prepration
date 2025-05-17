import {Routes, Route, BrowserRouter} from 'react-router-dom';
import DefultLayout from './layouts/layout';
import AboutMe from './components/about/aboutMe';
const App:React.FC=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<DefultLayout />}>
      </Route>
            <Route path="/aboutme" element={<AboutMe />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default  App;