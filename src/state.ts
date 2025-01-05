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
        playHistory : [],
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
    },
    setComputerPlay(){
        const currentStateData=this.getState();
        const playArray=["rock","paper","scissors"]

        var move=playArray[Math.floor(Math.random()*3)]
        
        currentStateData.currentGame.computerPlay=move
    },
    pushToHistory(gamePlayed:Game){
        const currentStateData=this.getState();
        const history=currentStateData.playHistory;
        console.log("este es el historial inicial: ", history);
        
        const newGamePlayed = structuredClone(gamePlayed);
        
        const newHistory = [...history, newGamePlayed];        
        console.log("este es el historial final: ", newHistory);

        currentStateData.playHistory=newHistory;

        this.setState(currentStateData)
        
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
    }

}

export {state, Play, Game};
