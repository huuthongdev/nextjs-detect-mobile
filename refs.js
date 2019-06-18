// Routes
import { Routes, Router, Link } from './routes';
// Configs
import * as configs from "./configs";
// Service
import { CookieService } from "./services/cookie.service";
import { RequestService } from "./services/request.service";
import DesktopWraper from "./pages/DesktopWraper";
import MobileWraper from "./pages/MobileWraper";

// ============================== EXPORT ==============================
export { Routes, Router, Link }
export { CookieService, RequestService, configs }
export { DesktopWraper, MobileWraper }
