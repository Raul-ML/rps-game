import {state} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage} from "../../imgs/load_imgs.ts"


export function pageGame(params){
        const div =document.createElement("div")
        div.className="page-game"
        div.innerHTML=`
            <style>
            div.page-game{
                margin-top:100px;
                height: 100vh;
                padding:0;
                display:flex;
                flex-direction: column;
                align-items:center;
            }
            div.bckg{
                position: fixed; 
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(${rpsImage});
                background-repeat: repeat;
                background-size: 110px;
                z-index: -1; 
                opacity: 0.2;
            }
            img.rock{
                height:auto;
                width:30%;   
            }
            img.paper, img.scissors{
                height:auto;
                width:30%;                
            }
            div.rps{
                height:33%;
                width:100%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                bottom: -15px;
                position:absolute;
            }

            </style>


            <div class="bckg"></div>

            <my-button text="TEST"></my-button>
            
            <div class="rps">
                <img src="${scissorsImage}" alt="Scissors image" class="scissors">
                <img src="${rockImage}" alt="Rock image" class="rock">
                <img src="${paperImage}" alt="Paper image" class="paper">
            </div>

        ` 
        const button=div?.querySelector("my-button")
        button?.addEventListener("click", () => {
            params.goTo("/instructions");
          });

    return div
}



``
