class Player{
    hit():number{
        return Math.round(Math.random()*6);
    }  
}

class Team{
    getScore(){
        var total_score:number=0;
        for(let i=0;i<12;i++){
            let pObj=new Player();
            let player_score:number=0;
            for(let j=0;j<6;j++){
                player_score+=pObj.hit();
            }
            console.log("Player"+(i+1)+": "+player_score);
            total_score+=player_score;
        }
        return total_score;
    }
}

let team1= new Team();
console.log("Total score: "+team1.getScore());