
import { state } from "../../state.ts";

class ComponentStart extends HTMLElement{
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
        const list = state.getState().list;
        this.shadow.innerHTML = `
            <style>
                div.start-button {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    background-color: aqua;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
    
                button.start {
                    font-size: 16px;
                    padding: 10px 20px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
    
                button.start:hover {
                    background-color: darkblue;
                }
            </style>
            <div class="start-button">
                <button class="start">START</button>
            </div>
        `;
    }
}
customElements.define("start-button", ComponentStart);
