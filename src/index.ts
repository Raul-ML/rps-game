//Router
import {initRouter} from "../src/router"

//Components
import "./components/button";

//Initialization of the Router
(function(){
    const containerRoot = document.querySelector(".root");    
    initRouter(containerRoot!);

})();