/**
 * @param {character[][]} grid
 * @return {number}
 */
var biggestTable = function(grid) {
  function evaluateRow(row) {
      let room = {
          startX: null,
          endX: null,
          width: 0
      };
      let widestRoomRow = {
          startX: null,
          endX: null,
          width: 0
      };
      let evaluatingRoom = false;
      for (let x = 0; x < row.length; x++) {
          //console.log('pos: '+x);
          //console.log('tile: '+row[x]);
          //console.log('ev room?: '+ evaluatingRoom);
          if (row[x] === 1) {
              if (!evaluatingRoom) {
                  evaluatingRoom = true;
                  room.startX = x;
                  // console.log(room);
              }
              room.width++;
          } else {
              if (evaluatingRoom) {
                  room.endX = x-1;
                  evaluatingRoom = false;
                  if(room.width > widestRoomRow.width) {
                      widestRoomRow = room;
                      room = {};
                  }
              }
          }
      }
      return widestRoomRow;
  }

  let widestRoomHeight = 0;
  let widestRoom = evaluateRow(grid[0]);
  let evaluatedRow = {};
  console.log(widestRoom);
  /*for (let y = 1; y < grid.length; y++) {
      evaluatedRow = evaluateRow(grid[y]);
      if (evaluatedRow.startX === widestRoom.startX && evaluatedRow.endX === widestRoom.endX) {
          widestRoomHeight++;
      }
  }*/
return widestRoom.width * widestRoomHeight;
};

const grid = [
[1, 1, 1, 0 , 1],
[1, 1, 1, 0 , 0],
[0, 0, 0, 0 , 0],
[0, 0, 1, 0 , 0],
[0, 0, 1, 0 , 0],
[0, 0, 0, 0 , 1]
];

console.log(biggestTable(grid));
