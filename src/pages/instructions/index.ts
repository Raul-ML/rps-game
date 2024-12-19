import {state} from "../../state.ts"


export function pageInstructions(params){

    const div =document.createElement("div")
    div.className="page-instructions"
    div.innerHTML=`<start-button></start-button>` 
    const button=div?.querySelector("start-button")
    button?.addEventListener("click", () => {
        params.goTo("/welcome");
      });

return div
}

