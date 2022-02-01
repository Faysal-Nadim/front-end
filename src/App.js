import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './containers/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions/auth.actions';
import PrivateRoute from './components/HOC/PrivateRoute'
import { Cart } from './containers/Cart';
import { Orders } from './containers/Order';
import { Signup } from './containers/Signup';
import { CreateRequest } from './containers/Requests/CreateRequest';
import { GetUser } from './containers/User/getuser';
import { ReqLayout } from './containers/Requests/ReqLayout';
import { Invoice } from './containers/Invoice';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/requests" element={<PrivateRoute> {<ReqLayout />} </PrivateRoute>} />
          <Route path="/user/cart" element={<PrivateRoute> {<Cart />} </PrivateRoute>} />
          <Route path="/user/order" element={<PrivateRoute> {<Orders />} </PrivateRoute>} />
          <Route path="/user/profile" element={<PrivateRoute> {<GetUser />} </PrivateRoute>} />
          <Route path="/user/request/new" element={<PrivateRoute> {<CreateRequest />} </PrivateRoute>} />
          <Route path="/user/invoice" element={<PrivateRoute> {<Invoice />} </PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
