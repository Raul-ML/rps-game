import {state} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage} from "../../imgs/load_imgs.ts"


export function pageInstructions(params){

    const div =document.createElement("div")
    div.className="page-instructions"
    div.innerHTML=`
            <style>
            div.page-instructions{
                margin:120px;
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
            div.title_and_button{
                top: 70px;
                display: flex;
                flex-direction: column;
                gap: 65px;
            }
            div.title{
                color: black;
                display: flex;
                font-size: 26px;
                text-align:center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width:322px;
                
            }
            div.title h1{
                margin: 0;
                padding: 0;
            }

            div.imgs_rps{
                display: flex;
                flex-direction: row;
                gap: 40px;
                align-items: center;
                position: absolute;
                bottom: -23px;
            }
            img.rock{
                margin-top: 23px;
            }
            </style>


            <div class="bckg"></div>
            <div class="title_and_button">
                <div class="title">
                    <h1>Press PLAY and choose: rock, paper or scissors before 3 seconds.</h1>
                </div>
                <my-button text="PLAY"></my-button>
            </div>
            <div class="imgs_rps">
                <img src="${scissorsImage}" alt="Scissors image" class="scissors">
                <img src="${rockImage}" alt="Rock image" class="rock">
                <img src="${paperImage}" alt="Paper image" class="paper">
            </div>

        ` 
    const button=div?.querySelector("my-button")
    button?.addEventListener("click", () => {
        state.resetGame();
        params.goTo("/game");
      });

return div
}

