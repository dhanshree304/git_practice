function checkPalindrome(N, str) {
   
    let bag=""
    for(let i=N-1;i>=0;i--){
        bag+=str[i];
    
    }
    if(bag==str){
        console.log("Yes")
    }else{
        console.log("No")
    }
  
}
