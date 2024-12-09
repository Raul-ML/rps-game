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
        },
        playHistory: []
    },
    getState(){
        return this.data
    },
    setMove(move:Play){
        const currentState=this.getState();
        currentState.currentGame.myPlay=move
    },
    pushToHistory(gamePlayed:Game){
        const data=this.getState();
        const history=data.playHistory
        history.push(gamePlayed)
        console.log(history);
        
        this.data.playHistory=history
    },
    whoWins(myPlay:Play, computerPlay:Play){
        if (myPlay!=computerPlay){
            const win:boolean = (myPlay=="scissors"&&computerPlay=="paper")||(myPlay=="paper"&&computerPlay=="rock")||(myPlay=="rock"&&computerPlay=="scissors")
        }else{
            const empate=true
        }
        
    }

}

state.pushToHistory({computerPlay:"rock", myPlay:"paper"})