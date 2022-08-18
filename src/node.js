// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if(value === ""){
  delete recordCollection[id][prop];
  console.log("1111111111111:      ",recordCollection[id][prop]);
  }
  else if(prop !== "tracks" && value != ""){
    
   recordCollection[id][prop] = value;
   console.log("2222222222222:      ",recordCollection[`${id}`][prop]);
  }
  else if(prop === "tracks" && recordCollection[id].hasOwnProperty(prop) ){
    recordCollection[id][prop].push(value);
    console.log("3333333333333:      ",recordCollection[id][prop]);
  }
  else if(prop === "tracks"){
     recordCollection[id][prop] = [];
    recordCollection[id][prop].push(value);
    console.log("4444444444444:      ",recordCollection[id][prop]);

  }
  
  return records;
}
  const abc = updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

  console.log(abc);
