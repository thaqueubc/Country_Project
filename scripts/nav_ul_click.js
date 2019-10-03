onload=function(){
    var n = document.getElementById("nav-ul").getElementsByTagName("li");
    //this.console.log(n);
    for( i=0; i<n.length; i++){
        n[i].onclick= function(){
            this.style.color="white";
        }
    }
}