import { setRegisterFormListener } from "./handlers/register.mjs";
import * as modals from "./pages/home/index.mjs";

modals.registerModalActions();
modals.loginModalActions();
modals.visitModalActions();

setRegisterFormListener();
