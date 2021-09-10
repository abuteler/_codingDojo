/**
 * @param {character[][]} grid
 * @return {number}
 */
function numOffices(grid) {
    let result = 0;
    let roomTilesTracker = [];
    let roomsInRow = [];
    let rowsRoomsTracker = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                roomTilesTracker.push(j);
            } else {
                if (roomTilesTracker.length > 0) {
                    roomsInRow.push(roomTilesTracker);
                    roomTilesTracker = [];
                }
            }
            if (j === grid[i].length - 1) { //last col
                if (roomTilesTracker.length > 0) {
                    roomsInRow.push(roomTilesTracker);
                    roomTilesTracker = [];
                }
            }
        }
        rowsRoomsTracker[i] = roomsInRow;
        roomsInRow = [];
    }
    if (rowsRoomsTracker.length > 0) {
        // [[0,1,2], [4]]
        // [[0,1], [3]]
        // []
        // [[2]]
        // [[2]]
        // [[4]]
        rowsRoomsTracker.forEach((row, index) => {
            let rooms = row.length;
            for (let i = 0; i < rooms; i++) {
                rooms[i].forEach(tilePos => {
                    let stillGoing = true;
                    // need to check how far down the room goes
                    for(let j = index + 1; j < rowsRoomsTracer.length; j++) {
                        let nextRowDownRooms = rowsRoomsTracker[j];
                        let nextRoomDown = nextRowDownRooms[i];
                        stillGoing = nextRoomDown.findIndex(tilePos) > -1;
                        //no se como terminarlo
                    };
                });
                
            } 
        });
        //------
    }
    return result;
};

const grid = [
    [1, 1, 1, 0 , 1],
    [1, 1, 0, 1 , 0],
    [0, 0, 0, 0 , 0],
    [0, 0, 1, 0 , 0],
    [0, 0, 1, 0 , 0],
    [0, 0, 0, 0 , 1]
];

console.log(numOffices(grid));

//Solution: https://stackoverflow.com/questions/58528043/algorithm-in-javascript-2d-array