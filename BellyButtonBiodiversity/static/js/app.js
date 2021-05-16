// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
    console.log(data);
  });

// Populate dropdown
function dropdown(){
    var drop = d3.select("#selDataset")
    d3.json("samples.json").then((sampledata)=>{
        var names = sampledata.names;
        names.forEach((data)=>{
            drop.append("option")
            .text(data)
            .property("value",data);
        });
        var sample = names[0];
        metadata(sample);
        buildChart(sample);
    });
};
dropdown();

// Build metadata
function metadata(sampleID){
    d3.json("samples.json").then((sampledata)=>{
        var metaData = sampledata.metadata;
        var dataArray = metaData.filter(row=>row.id==sampleID);
        console.log(dataArray);
        var mainData = dataArray[0];
        var demoDisplay = d3.select("#sample-metadata");
        demoDisplay.html("");
        Object.entries(mainData).forEach(([key,value])=>{
            demoDisplay.append("h6").text(`${key} ${value}`);
    });
});
};


