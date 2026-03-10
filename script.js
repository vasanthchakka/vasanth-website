const ctx1 = document.getElementById('incidentChart');

new Chart(ctx1, {

type: 'bar',

data: {

labels: ['Jan','Feb','Mar','Apr','May','Jun'],

datasets: [

{

label:'Minor incidents',

data:[5,2,4,1,6,2],

backgroundColor:'#00d4ff'

},

{

label:'Serious incidents',

data:[1,0,1,0,2,0],

backgroundColor:'#ffd166'

}

]

}

});



const ctx2 = document.getElementById('evacuationChart');

new Chart(ctx2, {

type: 'line',

data:{

labels:['Apr','Jul','Oct','Jan','Apr'],

datasets:[{

label:'Evacuation time',

data:[150,180,220,140,150],

borderColor:'#00d4ff',

fill:false,

tension:0.4

}]

}

});
