
import { state } from "../../state.ts";
import {rpsImage, rockImage, paperImage, scissorsImage} from "../../imgs/load_imgs.ts"

class ComponentPlay extends HTMLElement{
    shadow = this.attachShadow({ mode: "open"});
    
    constructor(){
        super();
        this.render()
    }
    connectedCallback(){
        state.subscribe(()=>{
            this.render();
        })
    }
    render() {
        const play=this.classList.contains("rock") ? "rock" : 
        this.classList.contains("paper") ? "paper" : 
        this.classList.contains("scissors") ? "scissors" : "test";

        console.log(play)
        
        if (play=="rock"){
            this.shadow.innerHTML = `
                <style>
                div{
                    background-image: url(${rockImage});
                    background-size:cover;
                }
                .selected{
                    margin:0;
                }
                </style>
                <div></div>
            `;
        }else if (play=="paper"){
            this.shadow.innerHTML = `
                <style>
                img{
                    width:100%;
                    height:100%;
                }
                </style>

                <div class="play">
                    <img src="${paperImage}" alt="Paper image" class="paper">
                </div>

            `;
        }else if (play=="scissors"){
            this.shadow.innerHTML = `
                <div class="play">
                    <img src="${scissorsImage}" alt="Scissors image" class="scissors">
                </div>

            `;
        }else{
            this.shadow.innerHTML = `
                <img src="${rpsImage}">
            `
        }

    }
}
customElements.define("my-play", ComponentPlay);
