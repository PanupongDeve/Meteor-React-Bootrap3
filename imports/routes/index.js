import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const indexRoutes = [
    { path: "/", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register }
];

export default indexRoutes;