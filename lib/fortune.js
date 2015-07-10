var fortunes = [
	"Conquer your fears or they will conquer you",
	"Rivers need springs",
	"Do not fear what you don't know",
	"You will have a pleasant suprise.",
	"Whenver possible, keep it simple"
	]; 


exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length); 
	return fortuneCookies[idx];
};

//use exports since you will be requiring it elsewhere. 

