let age_1 = 10 
let age_2 = 18 
let age_3 = 60 

const checkAge = function(age) {

    if (age ==Number)
    console.log ("Error") 
    
       else{ 

        Number(checkAge)
        Number(age)

        if  (age < age_2) {
            console.log("You dont have access cause your age is " + age + "Its less then " + age_2) 
        }   
        else if (age >= age_2 && age < age_3) {
            console.log("Welcome !")
        }

        else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
        }    
        else{
            console.log("Technical work") 
        } 
    }
}

checkAge (17)
checkAge (18)
checkAge (61)
checkAge ('2')
