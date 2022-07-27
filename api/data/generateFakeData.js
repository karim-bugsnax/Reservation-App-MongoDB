// Randomly generate a fake allTables JSON file

const fs = require("fs");
const numTables = 4;

let fakeTables = [];
for (i = 1; i < numTables; i++) {
  const chairs = 2; // 2-8 (exclusive) wanted to do this but thought it was a bit too much
  const name = `Table ${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const location = ["Office", "Client Office", "Restaurant"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  fakeTables.push({
    name: name,
    capacity: chairs,
    // isAvailable: availability,
    isAvailable: true,
    location: location
  });
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);
