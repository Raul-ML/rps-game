import {state, Play, Game} from "../../state.ts"
import {rpsImage, rockImage, paperImage, scissorsImage, rockImageBig, paperImageBig, scissorsImageBig} from "../../imgs/load_imgs.ts"


export function pageGame(params){
        let countdown="3"
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
            div.countdown>h1{
                font-size:100px;
                color: black;
                font-family: "American Typewriter";
            }
            my-play{
                margin:0;
                margin-top:20px;
                padding:0;
                heigth:100%;
                width:100%;
            }
            div.rps{
                height:30%;
                width:95%;
                max-width: 400px;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                bottom: -15px;
                position:absolute;
            }
            my-play.selected{
                margin-top:0;
            }
            my-play.notselected{
                margin-top:40px;
                filter: grayscale(100%);
            }
            </style>


            <div class="bckg"></div>

            <div class="countdown"><h1> ${countdown}</h1></div>
            
            <div class="rps">
                <my-play class="scissors">
                    <img src="${scissorsImageBig}" alt="Scissors image" class="scissors">
                </my-play>
                <my-play class="rock">
                    <img src="${rockImageBig}" alt="Rock image" class="rock">
                </my-play>
                <my-play class="paper">
                    <img src="${paperImageBig}" alt="Paper image" class="paper">
                </my-play>
            </div>

        ` ;
        const button=div?.querySelector("my-button")
        button?.addEventListener("click", () => {
            params.goTo("/instructions");
          });
          
        state.setComputerPlay();
        
        const arrayClasses= div.querySelectorAll("my-play");
        
        for (let i = 0; i < arrayClasses.length; i++) {
            arrayClasses[i].addEventListener("click", (e) => {
                const index=i                
                if (arrayClasses[i].classList.contains("notselected")){
                    arrayClasses[i].classList.remove("notselected"); 
                    arrayClasses[i].classList.add("selected"); 
                    
                    state.setMove(arrayClasses[i].classList[0] as Play);                      
                    
                    for (let j = 0; j < arrayClasses.length; j++) {
                        if (index!=j){
                            arrayClasses[j].classList.remove("selected")
                            arrayClasses[j].classList.add("notselected"); 
                        }                  
                    }
                }else{
                    arrayClasses[i].classList.add("selected"); 
                    state.setMove(arrayClasses[i].classList[0] as Play);                      

                    for (let j = 0; j < arrayClasses.length; j++) {
                        if (index!=j){
                            arrayClasses[j].classList.add("notselected"); 
                        }   }               
                    }
                    
                })
            }
            setTimeout(function (){
                const divCountdown= div.querySelector("div.countdown");
                countdown="2";
                divCountdown!.innerHTML=`<h1> ${countdown}</h1>`
            },1000);

            setTimeout(function (){
                const divCountdown= div.querySelector("div.countdown");
                countdown="1";
                divCountdown!.innerHTML=`<h1> ${countdown}</h1>`                
            },2000);

            setTimeout(function (){
                params.goTo("/results");
            },3000);
    return div
}



