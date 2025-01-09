
import { state } from "../../state.ts";

class ComponentButton extends HTMLElement{
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
        this.shadow.innerHTML = `
            <style>
                div.button {
                    margin: 0;
                    padding: 0;
                    width: 90%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
    
                button.button {
                    font-size: 40px;
                    font-family: "Odibee Sans";
                    padding: auto 20px;
                    background-color: blue;
                    color: lightblue;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width:322px;
                    height:60px;
                    border: solid 5px darkblue
                }
    
                button.button:hover {
                    background-color: darkblue;
                    border: solid 5px blue;
                }
            </style>

            <div class="button">
                <button class="button"></button>
            </div>
        `;
        const button=this.shadow.querySelector("button")
        button!.textContent = this.getAttribute('text') || 'Default Text'
    }
}
customElements.define("my-button", ComponentButton);
