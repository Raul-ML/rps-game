class WelcomePage extends Element{
    constructor(){
        super()
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML=`
        <my-play class="paper"></my-play>
        <my-play class="rock"></my-play>
        <my-play class="scissors"></my-play>
        ` 
    }
}