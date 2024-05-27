import expresss from 'express';
import db from '../config/Database.js';
import { getUsers, createUser, loginUser } from '../controllers/Users.js';
import { loginFilter } from '../filters/LoginFilter.js';
import { getSmartphones } from '../controllers/Smartphones.js';

const $routes = expresss.Router();

$routes.get('/users', getUsers);
$routes.get('/smartphones', getSmartphones);
$routes.post('/users', createUser);
$routes.post('/login', loginUser);

// routes

export default $routes;