onload=function(){
    var n = document.getElementById("nav-ul").getElementsByTagName("a");
    //this.console.log(n);
    for( i=0; i<n.length; i++){
        n[i].onmouseover= function(){
            this.style.color="white";
            this.style.fontSize="150%"
        }
    }
}