function getScore(arr){
    let score = 0;
    let frame;
    let turn;
    let previous;
    let frameSums = [];
    for(turn = 0; turn < 10; turn++){
        console.log(previous)
        console.log(turn);
        frameSums[turn] = 0;
        let i;
        
        for(i = turn*2; i <= ((turn*2)+ 1) ; i++){
            console.log("   ",i);
            frameSums[turn] += arr[i];
        }

        console.log("value of i",i)


        //Bonus score adding when strike or spare
        if(previous === "strike"){
            frameSums[turn-1] += frameSums[turn]
        }
        else if(previous === "spare"){
            frameSums[turn-1] += arr[i-2]
        }

        //Checking if current is strike or spare
        previous = ""
        if(frameSums[turn]===10){
            if(arr[i-1]!=0){
                previous = "spare"
            }
            else{
                previous = "strike"
            }
        }
        console.log("      ", frameSums[turn])

    }

    console.log(frameSums);

    for(i=0;i<frameSums.length;i++){
        score += frameSums[i]
    }

    

    return score;
}



module.exports = getScore;