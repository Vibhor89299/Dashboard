

var canvas = document.getElementById("text");
var ctx = canvas.getContext("2d");
ctx.font = "38px Arial black";
ctx.fillText("Last Hope K9", 5, 60);
ctx.font ="25px Arial";
ctx.fillText("Where last hope", 5,90);
ctx.font ="25px Arial";
ctx.fillText("becomes a new beginning", 5,120);



var canvas = document.getElementById("text2");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Avg Time to Adopt", 50, 120);

var canvas = document.getElementById("text3");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Characteristics ", 70, 120);









var ctx = document.getElementById("myChart").getContext("2d");
 
var myChart = new Chart(ctx,{
    type: "line",
    data: {
        labels:["2014","2016","2018","2020","2022"],
        datasets:[
            {
                data:[1000 ,3000,5000 ,7000,8000],
                label: "Lives Saved",
                borderWidth:1,
                borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'],
                backgroundColor: [
                    '#91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'
                ],
            },
        ],
        
    },
    
    options:{
        tension: 0.4,
        plugins:{
            tooltip: {
                enabled: false,
           },
            legend:false,
            title:{
                display:true,
                text:"Lives Saved",
                font:{
                    size:30,
                   
                },
                color:"black"
            },
    },
        
        responsive:false,
        layout:{
            padding:{
                top: 100,
            },
        },
    },
});

var ctx = document.getElementById("newChart").getContext("2d");
var newChart = new Chart(ctx,{
type:'bar',
data:{
    labels:['0-1 Puppy', '2-6 Adult', '7+ Senior'],
    datasets:[
    {
        data:[30, 85, 103],
    
        borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'],
        backgroundColor: [
            '#91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'
        ],
        
        
    },
    ],

},
plugins:[ChartDataLabels],
options: {

    responsive: false,
    layout:{
        margin:{
            top: 100,
        },
    },
    indexAxis:'y',
    plugins:{
        tooltip: {
            enabled: false,
       },
       
       legend:false,
       title:{
        display:true,
        text:"Avg Time to Adopt by Age Bucket ",
        font:{
            size: 20,
            
        },
    },
},
},
});


var ctx = document.getElementById("chart2").getContext("2d");
var chart2= new Chart(ctx,{
    type: "line",
    data: {
        labels:["2017","2018","2019","2020","2021" ,"2022"],
        datasets:[
            {
                data:[40 ,30,60 ,40,80,90],
                label: "Avg Time to Adopt in Time",
                borderWidth:1,
                borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'],
                backgroundColor: [
                    '#91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'
                ],
            },
        ],
        
    },

    options:{
        tension:0.4,
        layout:{
            padding:{
                top: 12,
                left:12,
                right:12,
                bottom:12,
            }
        },

        plugins:{
            legend:false,
            title:{
                display:true,
                text:" Avg Time to Adopt Over Time ",
                font:{
                    size: 20,
                    
                },
            },
        },
    },

});



var ctx = document.getElementById("charts").getContext("2d");
var charts = new Chart (ctx,{
type:"bar",
data:{
    labels:['Gets Along with Dogs', 'Gets Along with Cats', 'Gets Along with Kids','Are Housebroken'],
    datasets:[
    {
        data:[87, 29, 58,38],
        label:'Does/Are',
        
        borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'],
        backgroundColor: [
            '#91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'
        ],
        
        
    },
    {
        data:[0,7,3,6],
        label:'no',
        borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9',],
        backgroundColor: ['black','black','black','black'],
    },

    {
        
        data:[12,64,39,56],
        label:'not sure',
        borderColor:['black','black','black','black'],
        
    },
    
    ],
  
},
plugins:[ChartDataLabels],
options: {
    responsive:false,
    indexAxis:'y',
    scales:{
        x:{
            stacked:true,
        },
        y:{
            stacked:true,
        },
    },
    plugins:{
        title:{
            display:true,
            text:"Proposion of Dogs that..... ",
            font:{
                size: 20,
                
            },
        },
        legend:{
            labels:{
                boxHeight:10,
                borderWidth:5,
            },
            position:"bottom",
        }
    },
},
});

var ctx = document.getElementById("barchart").getContext("2d");
var barchart= new Chart(ctx,{
    type:"bar",
    data:{
        labels:['Labrador', 'Pit', 'Hound','Shepherd','Terrier','American','Catahoula','Hounds','Australian','Mountain'],
        datasets:[
        {
            data:[1422, 838, 400,376,306,157,155,150,126,108],
            
            borderColor: [' #91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'],
            backgroundColor: [
                '#91D9D9','#91D9D9','#91D9D9','#91D9D9','#91D9D9'
            ],
        },
    ],
      
    },
    plugins:[ChartDataLabels],
    options: {
        responsive:false,
        indexAxis:'y',
        scales:{
           display:false,
        },
        plugins:{
            title:{
                display:true,
                text:"Top 10 Primary Breeds(Including Mixes)",
                font:{
                    size: 20,
                    
                },
            },
            legend:false,
        },
        scales: {
            xAxes: [{
              display: false,
              gridLines: {}
            }],
            yAxes: [{
              display: false,
              gridLines: {}
            }]
           }
    },
})