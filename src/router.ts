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


  const BASE_PATH = "/rps-game";

  function isGithubPages() {
    return location.host.includes("github.io");
  }
  
  export function initRouter(container: Element) {
    function goTo(path) {
      // el goTo va a recibir la ruta de siempre: /jugar
      // por eso, en el caso de GitHub Pages
      // debemos anteponerle el BASE_PATH para que funcione
      // en ese contexto
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      history.pushState({}, "", completePath);
      handleRoute(completePath);
    }
    function handleRoute(route) {
      const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

      for (const r of routes) {        
        if (r.path.test(newRoute)) {
          const el = r.component({ goTo: goTo });
          container.firstChild?.remove();
          container.appendChild(el);    
        }
      }
    }
  
    if (location.pathname == "/"||location.pathname == BASE_PATH+"/") {
      goTo("/welcome");
    } else {
      handleRoute(location.pathname);
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
}