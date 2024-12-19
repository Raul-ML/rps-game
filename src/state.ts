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
        playHistory: [],
        page: ""
    },
    setState(newState) {
        this.data=newState;
        for (const cb of this.listeners){
        cb();
        }
        console.log("Soy el state, he cambiado ", this.data )
        

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
    pushToHistory(gamePlayed:Game){
        const data=this.getState();
        const history=data.playHistory
        history.push(gamePlayed)
        
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

export {state};
