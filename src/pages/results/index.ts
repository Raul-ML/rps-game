import {state} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage, rockImageBig, paperImageBig, scissorsImageBig} from "../../imgs/load_imgs.ts"


export function pageResults(params){
        const div =document.createElement("div")
        div.className="page-results"

        const divRPS=document.querySelector(".player");
        const thestatedata=state.getState()
        
        const finalPlay = thestatedata.currentGame.myPlay;
        const finalImage = 
        finalPlay=== "rock"? rockImageBig:
        finalPlay=== "paper"? paperImageBig:
        finalPlay=== "scissors"?scissorsImageBig:
        rockImageBig;
        
        const computerFinalPlay = thestatedata.currentGame.computerPlay;
        const computerFinalImage = 
        computerFinalPlay=== "rock"? rockImageBig:
        computerFinalPlay=== "paper"? paperImageBig:
        computerFinalPlay=== "scissors"?scissorsImageBig:
        rockImageBig;

        div.innerHTML=`
            <style>
            div.page-results{
                margin:100px;
                padding:0;
                display:flex;
                flex-direction: column;
                justify-content: center;
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
            div.computer{
                display: flex;
                flex-direction: row;
                gap: 40px;
                align-items: center;
                position: absolute;
                top: -15px;
                right: auto;
                left: auto;
                animation: movement 1s ease;
            }

            div.computer>my-play>img.invert{
                    width:150px;
                    height:250px;
                    transform: rotate(180deg);
                    }
                    
            @keyframes movement {
                from {
                    transform: translateY(-200px); 
                    }
                to {
                    transform: translateY(0); 
                    }
                }
                                
            div.player{
                display: flex;
                flex-direction: row;
                gap: 40px;
                align-items: center;
                position: absolute;
                bottom: -15px;
                right: auto;
                left: auto;
            }
            
            @keyframes slide-in {
                from {
                    transform: translateY(200px); 
                    }
                to {
                    transform: translateY(0); 
                    }
                }
            div.player>my-play>img{
                width:150px;
                height:250px;
                animation: slide-in 1s ease;
            }
            </style>


            <div class="bckg"></div>

            <div class="computer">
                <my-play class="${computerFinalPlay}">
                    <img src="${computerFinalImage}" alt="Image" class="invert">
                </my-play>
            </div>

            <my-button text="RESULT"></my-button>

            <div class="player">
                <my-play class="${finalPlay}">
                    <img src="${finalImage}" alt="Image" class="move">
                </my-play>
            </div>

        ` 
        const button=div?.querySelector("my-button")
        button?.addEventListener("click", () => {
            params.goTo("/instructions");
          });

        window.onload = () => {
        const movementImage=div.querySelector("img.invert");
        movementImage?.classList.add("moving");
        }

    return div
}

