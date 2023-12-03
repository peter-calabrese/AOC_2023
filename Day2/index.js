const fs = require("fs");

fs.readFile("testInput.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  const arr = data
    .replace(/Game [0-9]: /g, "")
    .replaceAll(";", ",")
    .replaceAll(" ", "")
    .split("\n");
  console.log(`Part 1 Answer: ${partOne(arr, totalCubes)}`);
  console.log(`Part 2 Answer: ${partTwo(arr)}`);
});

var totalCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const playedGames = [];

function partOne(games, totalCubes) {
  var gameCount = 0;
  games.map((game) => {
    var gameCubeCount = {
      red: 0,
      green: 0,
      blue: 0,
    };
    console.log(game);
    for (const key in gameCubeCount) {
      game.split(",").forEach((cubes) => {
        if (cubes.includes(key)) {
          cubes = cubes.replace(key, "");
          gameCubeCount[key] += parseInt(cubes);
        }
      });
    }
    playedGames.push(gameCubeCount);
    console.log(playedGames);
  });
}

function partTwo(data) {
  return "part2";
}
