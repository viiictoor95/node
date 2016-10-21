var Flight=function(){
//atributs
this.data={
	number: null,
	origin: null,
	destination: null,
	departs: null,
	arrives: null,
	actalDepart: null,
	actualArrive: null

};
//definicio de funcions o metodes
//omplir objecte values
/*
*
*		fill: omplir atributs
*
*/

this.fill=function(info){
	for(var prop in this.data){
		if (this.data[prop]!='undefined') {
		this.data[prop]=info[prop];

	};

};
};




	this.triggerDepart=function(){
		this.data.actualDepart=Date.now();

	};
	this.triggerArrive=function(){
		this.data.actualArrive=Date.now();

	};
	this.getInformation=function(){
		return this.data;
	};





};


module.exports=Flight;


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

























