import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddTools from './Pages/Dashboard/AddTools';
import ToolDetails from './Pages/Home/ToolDetails/ToolDetails';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Blog from './Pages/Home/Blog/Blog';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageTools from './Pages/Dashboard/ManageTools';
import AllTools from './Pages/Home/AllTools/AllTools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allTool" element={<AllTools />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/tool/:toolId' element={
          <RequireAuth>
            <ToolDetails></ToolDetails>
          </RequireAuth>
        }></Route>



        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='orders' element={<MyOrders></MyOrders>} ></Route>
          <Route path='reviews' element={<MyReview></MyReview>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>




          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>} ></Route>

          <Route path='addTool' element={<RequireAdmin>
            <AddTools></AddTools>
          </RequireAdmin>} ></Route>

          <Route path='manageOrder' element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>} ></Route>

          <Route path='manageTool' element={<RequireAdmin>
            <ManageTools></ManageTools>
          </RequireAdmin>} ></Route>

        </Route>





      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
