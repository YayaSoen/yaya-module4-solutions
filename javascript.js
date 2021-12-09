var names=new Array();
names[0]="AAA";
names[1]="BBB";
names[2]="ACC";
names[3]="DDD";
names[4]="EEE";
names[5]="FFF";
names[6]="AGG";
names[7]="HHH";
names[8]="III";
names[9]="AJJ";
names[10]="KKKK";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='A'|| names[i].charAt(0)==='a'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}