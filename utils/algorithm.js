var kdt = require('kd.tree')
let Dealers = require("../models/Dealers");

const nearest_neighbors =  (user_coords) => new Promise(async(resolve, reject) => {
  const coords = await Dealers.find({}, { loc: 1, _id: 0, Name: 1 });

  let dealer_coords = coords.map(function (v) {
    return v.loc
  });
  console.log(dealer_coords);
  var distance = function (a, b) {
    return Math.pow(a.lat - b.lat, 2) + Math.pow(a.long - b.long, 2);
  }

  var tree = kdt.createKdTree(dealer_coords, distance, ['lat', 'long'])

  var nearest = tree.nearest(user_coords, 1);

  let data;
  console.log(nearest);
  if (nearest.length) {
    data = coords.find(resp => resp.loc.lat === nearest[0][0].lat && resp.loc.long === nearest[0][0].long);
  }
  else {
    data = {}
  }
  resolve(data);
})

module.exports = nearest_neighbors;