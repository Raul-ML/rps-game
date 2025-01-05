import {state, Play, Game} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage, rockImageBig, paperImageBig, scissorsImageBig} from "../../imgs/load_imgs.ts"


export function pageResults(params){
        const div =document.createElement("div")
        div.className="page-results"

        const thestatedata=state.getState()
        
        const finalPlay = thestatedata.currentGame.myPlay;
        // console.log("este es finalPlay:", finalPlay);
        
        const finalImage = 
        finalPlay=== "rock"? rockImageBig:
        finalPlay=== "paper"? paperImageBig:
        finalPlay=== "scissors"?scissorsImageBig:
        rockImageBig;
        
        const computerFinalPlay = thestatedata.currentGame.computerPlay ;
        // console.log("este es computerfinalPlay:", computerFinalPlay);

        const computerFinalImage = 
        computerFinalPlay=== "rock"? rockImageBig:
        computerFinalPlay=== "paper"? paperImageBig:
        computerFinalPlay=== "scissors"?scissorsImageBig:
        rockImageBig;

        div.innerHTML=`
            <style>
            div.page-results{
                margin:0;
                padding:0;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                height: 100vh;
                width: 100vw;
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
            div.results{
                margin:0;
                padding:0;
                position:absolute;
                z-index:10;
                display:flex;
                flex-direction:column;
                align-items:center;
                gap:30px;                
            }
            div.background_results{
                height:100vh;
                width:100vw;
                position: fixed;
                margin:0;
                padding:0;
                top:0;
                left: 0;
                z-index:-1;
                }
            div.background_results.WIN{
                background-color: green;
                opacity: 0.8;                
            }
            div.background_results.LOSE{
                background-color: #894949E5;
                opacity: 0.8;
            }
            div.background_results.DRAW{
                background-color: yellow;
                opacity: 0.8;
            }
            h1.winlosedraw{
                font-size:100px;
                text-align:center;
                color:white;
                position:relative;
                z-index:50;
                margin:0;
                padding:0;
                margin-bottom:40px;
                -webkit-text-stroke: 1px black;
            }

            .results_info{
                width: 90%;
                height: 60%;
                border:solid;
                border-radius:15px;
                background-color:white;
                color: black;
                position:relative;
                z-index:90;
                text-align:center;
                padding:10px;
            }
            div.results_info>h1{
                font-size:60px;
                margin:10px;
                padding:0;
                color: grey;
            }
            p{
                font-size:30px;
                margin:3px;
                padding:0;
            }
            button{
                position:relative;
                z-index:100;
            }

            </style>


            <div class="bckg"></div>

            <div class="computer">
                <my-play class="${computerFinalPlay}">
                    <img src="${computerFinalImage}" alt="Image" class="invert">
                </my-play>
            </div>

            <div class="player">
                <my-play class="${finalPlay}">
                    <img src="${finalImage}" alt="Image" class="move">
                </my-play>
            </div>

            <div class="results"></div>

        ` 
        window.onload = () => {
        const movementImage=div.querySelector("img.invert");
        movementImage?.classList.add("moving");
        }
        
        state.whoWins(finalPlay, computerFinalPlay);
        const gamePlayed=thestatedata.currentGame
        state.pushToHistory(gamePlayed)
        state.setResult();
            
    
        setTimeout(function (){

            const divResults=document.querySelector("div.results");
            divResults!.innerHTML=`
            <div class="background_results ${state.data.currentGame.result}"></div>
            <h1 class="winlosedraw">${state.data.currentGame.result}</h1>
            <div class="results_info">
                <h1> SCORE</h1>
                <p>YOU: ${state.data.summary.wins} </p>
                <p>COMPUTER: ${state.data.summary.loses} </p>
                <p>DRAWS: ${state.data.summary.draws} </p>
                </div>
            <my-button text="PLAY AGAIN"></my-button>            
            `
            const button=div?.querySelector("my-button")
            button?.addEventListener("click", () => {
                state.resetGame();
                state.data.page="game"
                params.goTo("/game");
            });
        },3000)

    return div
}

