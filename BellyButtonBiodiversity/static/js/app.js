const data = samples.json;

// Fetch the JSON data and console log it
d3.json(data).then(function(sampleData) {
    console.log(sampleData);
  });