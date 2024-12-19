import {state} from "../../state.ts"

export function pageWelcome(params){
        const root=document.querySelector(".root")
        const div =document.createElement("div")
        div.className="page-welcome"
        div.innerHTML=`
            <style>
            .bckg{
                position: fixed; /* Para que cubra todo el fondo */
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(../src/rps.png);
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
            .title{
                color: green;
                display: flex;
                font-size: 40px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .title h1{
                margin: 0;
                padding: 0;
            }

            .imgs_rps{
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
                <start-button></start-button>
            </div>
            <div class="imgs_rps">
                <img src="../src/scissors.png" alt="Scissors image" class="scissors">
                <img src="../src/rock.png" alt="Rock image" class="rock">
                <img src="../src/paper.png" alt="Paper image" class="paper">
            </div>

        ` 
        root?.appendChild(div)
        const button=root?.querySelector("start-button")
        button?.addEventListener("click", () => {
            params.goTo("/instructions");
          });
}

