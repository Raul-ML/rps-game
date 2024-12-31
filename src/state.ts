type Play= "rock" | "paper" | "scissors"
type Game= {
    computerPlay: Play,
    myPlay: Play
}

const state={
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
            result: "",
        },
        playHistory: [],
        page: ""
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
        currentState.currentGame.myPlay=""
        currentState.currentGame.computerPlay=""
        currentState.currentGame.result=""
        this.setState(currentState);

    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
  
    getState(){
        return this.data
    },
    setMove(move:Play){
        const currentState=this.getState();
        currentState.currentGame.myPlay=move
    },
    setComputerPlay(){
        const currentState=this.getState();
        const playArray=["rock","paper","scissors"]
        const move=playArray[Math.floor(Math.random()*3)]
        currentState.currentGame.computerPlay=move
    },
    pushToHistory(gamePlayed:Game){
        const data=this.getState();
        const history=data.playHistory
        history.push(gamePlayed)
        
        this.data.playHistory=history
    },
    whoWins(myPlay:Play, computerPlay:Play){
        let win:boolean=false
        let draw:boolean=false
        if (myPlay!=computerPlay){
            win = (myPlay=="scissors"&&computerPlay=="paper")||(myPlay=="paper"&&computerPlay=="rock")||(myPlay=="rock"&&computerPlay=="scissors")
        }else{
            draw=true
        }

        const data=this.getState();
        if (win){
            data.currentGame.result="win"
        }else if (draw){
            data.currentGame.result="draw"
        }else{
            data.currentGame.result="lose"
        }

        this.setState(data);
    }

}

export {state, Play, Game};
