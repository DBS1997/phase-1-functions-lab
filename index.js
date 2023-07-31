// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    return Math.abs(blockNum-42)
}

function distanceFromHqInFeet(blockNum){
    return (distanceFromHqInBlocks(blockNum)*264)
}

function distanceTravelledInFeet(startingBlock, endingBlock){
    return Math.abs(distanceFromHqInFeet(startingBlock)-distanceFromHqInFeet(endingBlock))
}

function calculatesFarePrice(startingBlock, endingBlock){
    const distance=distanceTravelledInFeet(startingBlock, endingBlock)
    if(distance<400){
        return 0
        }else if (distance<2000){
            return ((distance-400)*0.02)
        }else if (distance<2500){
            return 25
        }else {
            return "cannot travel that far"}}
