import {Routes, Route, BrowserRouter} from 'react-router-dom';
import DefultLayout from './layouts/layout';
const App:React.FC=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<DefultLayout />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default  App;