function login(input){
    let index = 0;
    let user = (input[index]);
    index++
    let reverseUser = user.split('').reverse().join('');
    let counter = 0;
    let password = input[index];
         index++
    while(counter <= 4){
        
        if(password === reverseUser){
            console.log(`User ${user} logged in.`)
            break;
        }else{
            
            counter++
            if(counter === 4){
                console.log(`User ${user} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        }
        
           
        
         password = input[index];
         index++
           
        
    }
    
       
    }
   

login(['Acer','login','go','let me in','recA'])