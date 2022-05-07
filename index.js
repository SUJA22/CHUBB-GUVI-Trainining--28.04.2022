var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.hit = function () {
        return Math.random() * (7 - 0);
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team() {
    }
    Team.prototype.getScore = function () {
        var total_score = 0;
        for (var i = 1; i <= 12; i++) {
            var pObj = new Player();
            var player_score = 0;
            for (var j = 1; j <= 6; j++) {
                player_score += Math.round(pObj.hit());
            }
            console.log("Player" + i + ": " + player_score);
            total_score += player_score;
        }
        return total_score;
    };
    return Team;
}());
var team1 = new Team();
console.log("Total score: " + team1.getScore());
