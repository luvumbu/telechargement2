 
class Information {
	constructor(link) {
		this.link = link;
		this.identite = new FormData();
		this.req = new XMLHttpRequest();
		this.identite_tab = [
		];
	}
	info() {
		return this.identite_tab; 
	}
	add(info, text){
		this.identite_tab.push([info, text]); 
	}
	push(){
		for(var i = 0 ; i < this.identite_tab.length ; i++){
			console.log(this.identite_tab[i][1]);
			this.identite.append(this.identite_tab[i][0], this.identite_tab[i][1]);		 
		}		
		this.req.open("POST",this.link);
		this.req.send(this.identite);
		console.log(this.req);	 
	}
}

  


var  img = document.getElementsByTagName("img"); 
var  i = 0 ; 


 



setInterval(function(){ 
    
    
    
var ok = new Information("https://bokonzi.com/telechargement/php2.php"); // création de la classe 
ok.add("src", img[i].src); // ajout d'une deuxieme information denvoi  
console.log(ok.info()); // demande l'information dans le tableau
ok.push(); // envoie l'information au code pkp 

i++;



}, 1000);





























                                    