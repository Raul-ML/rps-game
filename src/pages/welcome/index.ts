import {state} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage} from "../../imgs/load_imgs.ts"


export function pageWelcome(params){
        const div =document.createElement("div")
        div.className="page-welcome"
        div.innerHTML=`
            <style>
            div.page-welcome{
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
            div.title_and_button{
                top: 70px;
                display: flex;
                flex-direction: column;
                gap: 50px;
            }
            div.title{
                color: green;
                display: flex;
                font-size: 40px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
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
                bottom: -25px;
                right: auto;
                left: auto;
            }
            img.rock{
                margin-top: 23px;
            }
            </style>


            <div class="bckg"></div>
            <div class="title_and_button">
                <div class="title">
                    <h1>Rock</h1>
                    <h1>Paper</h1>
                    <h1>Scissors</h1>
                </div>
                <my-button text="START"></my-button>
            </div>
            <div class="imgs_rps">
                <img src="${scissorsImage}" alt="Scissors image" class="scissors">
                <img src="${rockImage}" alt="Rock image" class="rock">
                <img src="${paperImage}" alt="Paper image" class="paper">
            </div>

        ` 
        const button=div?.querySelector("my-button")
        button?.addEventListener("click", () => {
            state.data.page="instructions"
            params.goTo("/instructions");
          });

          
    return div
}

