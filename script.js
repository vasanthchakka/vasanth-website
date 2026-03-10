const today = new Date();

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("date").innerHTML =
today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

document.getElementById("day").innerHTML =
days[today.getDay()];


// Temperature chart
const ctx1 = document.getElementById('tempChart');

new Chart(ctx1, {

type: 'line',

data:{

labels:['6AM','9AM','12PM','3PM','6PM'],

datasets:[{

label:'Temperature',

data:[26,29,32,31,28],

borderColor:'#00e5ff',

tension:0.4

}]

}

});


// Humidity chart
const ctx2 = document.getElementById('humidityChart');

new Chart(ctx2, {

type:'bar',

data:{

labels:['Morning','Noon','Evening','Night'],

datasets:[{

label:'Humidity',

data:[70,65,68,72],

backgroundColor:'#4cafef'

}]

}

});
