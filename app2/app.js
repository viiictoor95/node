var flight=require('./vols');

var pl_data1={
	number: 847,
	origin: 'BCN',
	destination: 'MAD'
};

var pl_data2={
	number: 848,
	origin: 'MAD',
	destination: 'BCN'
};



var pl1=flight(pl_data1);
pl1.triggerDepart();

console.log(pl1.getInformation());

var pl2=flight(pl_data2);
pl2.triggerArrive();

console.log(pl2.getInformation());




































































































