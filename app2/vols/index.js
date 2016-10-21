module.exports=function(info){

var values={
	number: null,
	origin: null,
	destination: null,
	departs: null,
	arrives: null,
	actalDepart: null,
	actualArrive: null

};
//omplir objecte values

for(var prop in values){
	if (values[prop]!='undefined') {
		values[prop]=info[prop];

	};

};

	var functions={

	triggerDepart:function(){
		values.actualDepart=Date.now();

	},
	triggerArrive:function(){
		values.actualArrive=Date.now();

	},
	getInformation:function(){
		return values;
	}

};
return functions;

};
/*
exports.setNumber=function(num){
	number=num;
};


exports.setOrigin=function(o){
	origin=o;
};

exports.setDestination=function(d){
	destination=d;
};

exports.getInfo=function(){

	return {
		number: number, 
		origin: origin,
		destination: destination
	};

};

*/

























