import { setRegisterFormListener, setLoginFormListener} from "./handlers/index.mjs";
import * as homeModals from "./pages/home/index.mjs";
import { navAction } from "./handlers/navigation.mjs"; 

const path = location.pathname;


if (path === "/")  {
homeModals.registerModalActions();
homeModals.loginModalActions();
homeModals.visitModalActions();
setRegisterFormListener();
setLoginFormListener();
}

if (path !== "/") {
  navAction();
}
