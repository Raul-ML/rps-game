import { pageInstructions } from "./pages/instructions";
import { pageWelcome } from "./pages/welcome";
import { pageGame } from "./pages/game";
import { pageResults } from "./pages/results";
import {state} from "../src/state"



//Routes
const routes = [
    {
      path: /\/instructions/,
      component: pageInstructions,
    },
    {
      path: /\/welcome/,
      component: pageWelcome,
    },
    {
      path: /\/game/,
      component: pageGame,
    },
    {
      path: /\/results/,
      component: pageResults,
    },
  ];




  export function initRouter(container: Element) {
    function goTo(path: string) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
  
    function handleRoute(route) {
      for (const r of routes) {        
        if (r.path.test(route)) {
          const el = r.component({ goTo: goTo });
          container.firstChild?.remove();
          container.appendChild(el);    
        }
      }
    }
  
    if (location.pathname == "/") {
      goTo("/welcome");
    } else {
      handleRoute(location.pathname);
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
}