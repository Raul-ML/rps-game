function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,a={},i={},s=t.parcelRequire94c2;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire94c2=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,i=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.882fedf4.js","9DPJ0","rps.23e0cebf.png","4tgEk","rock.766e706f.png","q8zCW","paper.da8a5be9.png","2Ux6A","scissors.9d554740.png","eOhh4","rockbig.fe372684.png","3F9rZ","paperbig.e4e8221d.png","cyWtd","scissorsbig.c380f4d9.png"]'));const r={data:{currentGame:{computerPlay:"rock",myPlay:"rock",result:"DRAW"},playHistory:JSON.parse(localStorage.getItem("playHistory")||"[]"),summary:{wins:0,loses:0,draws:0},page:"welcome"},listeners:[],setState(e){for(let t of(this.data=e,this.listeners))t();console.log("Soy el state, he cambiado ",this.data)},setLocalStorage(){console.log("setlocalstorage activado"),console.log("soy el local storage:",localStorage);let e=this.data;localStorage.setItem("playHistory",JSON.stringify(e.playHistory))},resetGame(){let e=this.getState();e.currentGame.myPlay="rock",e.currentGame.computerPlay="rock",e.currentGame.result="DRAW",e.summary.wins=0,e.summary.loses=0,e.summary.draws=0,this.setState(e)},subscribe(e){this.listeners.push(e)},getState(){return this.data},setMove(e){let t=this.getState();t.currentGame.myPlay=e,this.setState(t)},setComputerPlay(){let e=this.getState();var t=["rock","paper","scissors"][Math.floor(3*Math.random())];e.currentGame.computerPlay=t,this.setState(e)},pushToHistory(e){let t=this.getState(),a=[...t.playHistory,structuredClone(e)];t.playHistory=a,this.setState(t),this.setLocalStorage()},whoWins(e,t){let a=!1,i=!1,s=this.getState();e!=t?a="scissors"==e&&"paper"==t||"paper"==e&&"rock"==t||"rock"==e&&"scissors"==t:e===t?i=!0:(i=!0,s.currentGame.myPlay="rock",s.currentGame.computerPlay="rock"),a?s.currentGame.result="WIN":i?s.currentGame.result="DRAW":s.currentGame.result="LOSE",this.setState(s)},setResult(){let e=this.getState();for(let t of e.playHistory)t&&("WIN"===t.result?e.summary.wins++:"LOSE"===t.result?e.summary.loses++:"DRAW"===t.result&&e.summary.draws++);this.setLocalStorage(),this.setState(e)}};var o={};o=new URL("rps.23e0cebf.png",import.meta.url).toString();var n={};n=new URL("rock.766e706f.png",import.meta.url).toString();var l={};l=new URL("paper.da8a5be9.png",import.meta.url).toString();var c={};c=new URL("scissors.9d554740.png",import.meta.url).toString();var d={};d=new URL("rockbig.fe372684.png",import.meta.url).toString();var p={};p=new URL("paperbig.e4e8221d.png",import.meta.url).toString();var m={};m=new URL("scissorsbig.c380f4d9.png",import.meta.url).toString();const u=[{path:/\/instructions/,component:function(t){let a=document.createElement("div");a.className="page-instructions",a.innerHTML=`
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
                background-image: url(${e(o)});
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
                <my-button text="PLAY!"></my-button>
            </div>
            <div class="imgs_rps">
                <img src="${e(c)}" alt="Scissors image" class="scissors">
                <img src="${e(n)}" alt="Rock image" class="rock">
                <img src="${e(l)}" alt="Paper image" class="paper">
            </div>

        `;let i=a?.querySelector("my-button");return i?.addEventListener("click",()=>{r.resetGame(),r.data.page="game",t.goTo("/game")}),a}},{path:/\/welcome/,component:function(t){let a=document.createElement("div");a.className="page-welcome",a.innerHTML=`
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
                background-image: url(${e(o)});
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
                <img src="${e(c)}" alt="Scissors image" class="scissors">
                <img src="${e(n)}" alt="Rock image" class="rock">
                <img src="${e(l)}" alt="Paper image" class="paper">
            </div>

        `;let i=a?.querySelector("my-button");return i?.addEventListener("click",()=>{r.data.page="instructions",t.goTo("/instructions")}),a}},{path:/\/game/,component:function(t){let a="3",i=document.createElement("div");i.className="page-game",i.innerHTML=`
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
                background-image: url(${e(o)});
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
            div.please>h1{
                font-size:50px;
                color: black;
                font-family: "American Typewriter";
                margin:0;
                padding:0;
                text-align:center;
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
            my-play.rock.selected{
                margin-top:10px;
            }
            my-play.notselected{
                margin-top:40px;
                filter: grayscale(100%);
            }
            </style>


            <div class="bckg"></div>
            
            <div class="please"><h1> Please select a play in </h1></div>
            <div class="countdown"><h1> ${a}</h1></div>
            
            <div class="rps">
                <my-play class="scissors">
                    <img src="${e(m)}" alt="Scissors image" class="scissors">
                </my-play>
                <my-play class="rock">
                    <img src="${e(d)}" alt="Rock image" class="rock">
                </my-play>
                <my-play class="paper">
                    <img src="${e(p)}" alt="Paper image" class="paper">
                </my-play>
            </div>

        `,r.setComputerPlay();let s=i.querySelectorAll("my-play");r.setMove("rock");for(let e=0;e<s.length;e++)s[e].addEventListener("click",t=>{let a=e;if(s[e].classList.contains("notselected")){s[e].classList.remove("notselected"),s[e].classList.add("selected"),r.setMove(s[e].classList[0]);for(let e=0;e<s.length;e++)a!=e&&(s[e].classList.remove("selected"),s[e].classList.add("notselected"))}else{s[e].classList.add("selected"),r.setMove(s[e].classList[0]);for(let e=0;e<s.length;e++)a!=e&&s[e].classList.add("notselected")}});return setTimeout(function(){let e=i.querySelector("div.countdown");a="2",e.innerHTML=`<h1> ${a}</h1>`},1e3),setTimeout(function(){let e=i.querySelector("div.countdown");a="1",e.innerHTML=`<h1> ${a}</h1>`},2e3),setTimeout(function(){r.data.page="results",t.goTo("/results")},3e3),i}},{path:/\/results/,component:function(t){let a=document.createElement("div");a.className="page-results";let i=r.getState(),s=i.currentGame.myPlay,n="rock"===s?e(d):"paper"===s?e(p):"scissors"===s?e(m):e(d),l=i.currentGame.computerPlay,c="rock"===l?e(d):"paper"===l?e(p):"scissors"===l?e(m):e(d);a.innerHTML=`
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
                background-image: url(${e(o)});
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
                bottom: -20px;
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
                top:40px;
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
                top: 20px;
                -webkit-text-stroke: 1px black;
            }

            .results_info{
                width: 240px;
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
            div.buttons{
                display:flex;
                flex-direction:row;
                gap: 50px;
            }
            @media (width<750px){
                div.buttons{
                flex-direction:column;
                gap:20px;
                }
            }

            </style>


            <div class="bckg"></div>

            <div class="computer">
                <my-play class="${l}">
                    <img src="${c}" alt="Image" class="invert">
                </my-play>
            </div>

            <div class="player">
                <my-play class="${s}">
                    <img src="${n}" alt="Image" class="move">
                </my-play>
            </div>

            <div class="results"></div>

        `,window.onload=()=>{let e=a.querySelector("img.invert");e?.classList.add("moving")},r.whoWins(s,l);let u=i.currentGame;return r.pushToHistory(u),r.setResult(),setTimeout(function(){document.querySelector("div.results").innerHTML=`
            <div class="background_results ${r.data.currentGame.result}"></div>
            <h1 class="winlosedraw">${r.data.currentGame.result}</h1>
            <div class="results_info">
                <h1> SCORE</h1>
                <p>YOU: ${r.data.summary.wins} </p>
                <p>COMPUTER: ${r.data.summary.loses} </p>
                <p>DRAWS: ${r.data.summary.draws} </p>
                </div>
            <div class="buttons">    
                <my-button class="play_again" text="PLAY AGAIN"></my-button>            
                <my-button class="reset_score"text="RESET SCORE"></my-button>            
            </div>
            `;let e=a?.querySelector("my-button.play_again");e?.addEventListener("click",()=>{r.resetGame(),r.data.page="game",t.goTo("/game")});let i=a?.querySelector("my-button.reset_score");i?.addEventListener("click",()=>{localStorage.clear(),r.resetGame(),r.data.playHistory=[],r.data.page="instructions",t.goTo("/instructions")})},3e3),a}}],g="/rps-game";function y(){return location.host.includes("github.io")}class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){r.subscribe(()=>{this.render()})}render(){this.shadow.innerHTML=`
            <style>
                div.button {
                    margin: 0 auto;
                    padding: 0;
                    width: 90%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
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
        `,this.shadow.querySelector("button").textContent=this.getAttribute("text")||"Default Text"}}customElements.define("my-button",h),function(e){function t(e){let t=y()?g+e:e;history.pushState({},"",t),a(t)}function a(a){let i=y()?a.replace(g,""):a;for(let a of u)if(a.path.test(i)){let i=a.component({goTo:t});e.firstChild?.remove(),e.appendChild(i)}}"/"==location.pathname||location.pathname==g+"/"?t("/welcome"):a(location.pathname),window.onpopstate=function(){a(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.882fedf4.js.map
