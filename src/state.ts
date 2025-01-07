type Play= "rock" | "paper" | "scissors";
type Result = "WIN" | "LOSE" | "DRAW";
type Game= {
    computerPlay: Play,
    myPlay: Play,
    result: Result,
};


const state={
    data: {
        currentGame: {
            computerPlay: "rock" as Play,
            myPlay: "rock" as Play,
            result: "DRAW" as Result,
        } as Game,
        playHistory : JSON.parse(localStorage.getItem("playHistory")||"[]"),
        summary: {
            wins: 0 as Number,
            loses: 0 as Number,
            draws: 0 as Number
        },
        page: "welcome",
    },
    listeners: [],

    setState(newState) {
        this.data=newState;
        for (const cb of this.listeners){
        cb();
        }
        
        console.log("Soy el state, he cambiado ", this.data )
        
        
    },
    setLocalStorage(){
        console.log("setlocalstorage activado");
        console.log("soy el local storage:", localStorage);
        
        const stateData=this.data;
        localStorage.setItem("playHistory", JSON.stringify(stateData.playHistory))

    },
    resetGame() {
        const currentState=this.getState();
        currentState.currentGame.myPlay="rock"
        currentState.currentGame.computerPlay="rock"
        currentState.currentGame.result="DRAW"
        currentState.summary.wins=0
        currentState.summary.loses=0
        currentState.summary.draws=0
        this.setState(currentState);

    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
  
    getState(){
        return this.data
    },
    setMove(move:Play){
        const currentStateData=this.getState();
        currentStateData.currentGame.myPlay=move
        this.setState(currentStateData)

    },
    setComputerPlay(){
        const currentStateData=this.getState();
        const playArray=["rock","paper","scissors"]

        var move=playArray[Math.floor(Math.random()*3)]
        
        currentStateData.currentGame.computerPlay=move
        this.setState(currentStateData)
    },
    pushToHistory(gamePlayed:Game){
        const currentStateData=this.getState();
        const history=currentStateData.playHistory;
        
        const newGamePlayed = structuredClone(gamePlayed);
        
        const newHistory = [...history, newGamePlayed];        

        currentStateData.playHistory=newHistory;

        this.setState(currentStateData)
        this.setLocalStorage()
        
    },
    whoWins(myPlay:Play, computerPlay:Play){
        let win:boolean=false
        let draw:boolean=false
        const currentStateData=this.getState();

        if (myPlay!=computerPlay){
            win = (myPlay=="scissors"&&computerPlay=="paper")||(myPlay=="paper"&&computerPlay=="rock")||(myPlay=="rock"&&computerPlay=="scissors")
        }else if (myPlay===computerPlay ){
            draw=true
        }else {
            draw=true
            currentStateData.currentGame.myPlay="rock"
            currentStateData.currentGame.computerPlay="rock"
        }

        if (win){
            currentStateData.currentGame.result="WIN"
        }else if (draw){
            currentStateData.currentGame.result="DRAW"
        }else{
            currentStateData.currentGame.result="LOSE"
        }
        this.setState(currentStateData)
    },
    setResult(){
        const currentState=this.getState();
        
        for (const element of currentState.playHistory) {            
            if (element){
                if ( element.result==="WIN"){
                    currentState.summary.wins++
                }else if (element.result==="LOSE"){
                    currentState.summary.loses++
                }else if (element.result==="DRAW"){
                    currentState.summary.draws++
                }
                
            }
        }
        this.setLocalStorage()

        this.setState(currentState)
    }

}

export {state, Play, Game};
