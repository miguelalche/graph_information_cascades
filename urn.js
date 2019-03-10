function Urn (){
    this._skewedTorwardsBlue = Math.random() > 0.5 
    if(this._skewedTorwardsBlue){
        console.log("BLUE URN")
    } else {
        console.log("RED URN")
    }
}

Urn.prototype.draw = function (){
    if(this._skewedTorwardsBlue) {
        let isBlue = Math.random() > (1/3);
        return isBlue ? 'blue':'red'
    } else {
        let isRed = Math.random() > (1/3);
        return isRed ? 'red':'blue'
    }
}


module.exports = Urn;