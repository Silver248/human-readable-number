module.exports = function toReadable (number) {
    let a;
    let ss = number +'';
    let rr = ss.split('');


    if (rr.length==3) {






        if (rr[0]==1) {
            rr.splice(0,1,"one hundred");
        } else if (rr[0]==2) {
            rr.splice(0,1,"two hundred");
        } else if (rr[0]==3) {
            rr.splice(0,1,"three hundred");
        } else if (rr[0]==4) {
            rr.splice(0,1,"four hundred");
        } else if (rr[0]==5) {
            rr.splice(0,1,"five hundred");
        } else if (rr[0]==6) {
            rr.splice(0,1,"six hundred");
        } else if (rr[0]==7) {
            rr.splice(0,1,"seven hundred");
        } else if (rr[0]==8) {
            rr.splice(0,1,"eight hundred");
        } else if (rr[0]==9) {
            rr.splice(0,1,"nine hundred");
        };
        
        if (rr[1]==1) {
            if (rr[2]==0){
                rr.splice(1,2,"ten");
            } else if (rr[2]==1) {
                rr.splice(1,2,"eleven");
            } else if (rr[2]==2) {
                rr.splice(1,2,"twelve");
            } else if (rr[2]==3) {
                rr.splice(1,2,"thirteen");
            } else if (rr[2]==4) {
                rr.splice(1,2,"fourteen");
            } else if (rr[2]==5) {
                rr.splice(1,2,"fifteen");
            } else if (rr[2]==6) {
                rr.splice(1,2,"sixteen");
            } else if (rr[2]==7) {
                rr.splice(1,2,"seventeen");
            } else if (rr[2]==8) {
                rr.splice(1,2,"eighteen");
            } else if (rr[2]==9) {
                rr.splice(1,2,"nineteen");
            };
            
        } else if (rr[1]==2) {
            rr.splice(1,1,"twenty");
        } else if (rr[1]==3) {
            rr.splice(1,1,"thirty");
        } else if (rr[1]==4) {
            rr.splice(1,1,"forty");
        } else if (rr[1]==5) {
            rr.splice(1,1,"fifty");
        } else if (rr[1]==6) {
            rr.splice(1,1,"sixty");
        } else if (rr[1]==7) {
            rr.splice(1,1,"seventy");
        } else if (rr[1]==8) {
            rr.splice(1,1,"eighty");
        } else if (rr[1]==9) {
            rr.splice(1,1,"ninety");
        };
    




        if (rr[2]==1) {
            rr.splice(2,1,"one");
        } else if (rr[2]==2) {
            rr.splice(2,1,"two");
        } else if (rr[2]==3) {
            rr.splice(2,1,"three");
        } else if (rr[2]==4) {
            rr.splice(2,1,"four");
        } else if (rr[2]==5) {
            rr.splice(2,1,"five");
        } else if (rr[2]==6) {
            rr.splice(2,1,"six");
        } else if (rr[2]==7) {
            rr.splice(2,1,"seven");
        } else if (rr[2]==8) {
            rr.splice(2,1,"eight");
        } else if (rr[2]==9) {
            rr.splice(2,1,"nine");
        } else if (rr[2]==0) {
            rr.splice(2,1)
        };


        if (rr[1]==0) {
            rr.splice(1,1)
        };


    } else if (rr.length==2) {
        if (rr[0]==1) {
            if (rr[1]==0){
                rr.splice(0,2,"ten");
            } else if (rr[1]==1) {
                rr.splice(0,2,"eleven");
            } else if (rr[1]==2) {
                rr.splice(0,2,"twelve");
            } else if (rr[1]==3) {
                rr.splice(0,2,"thirteen");
            } else if (rr[1]==4) {
                rr.splice(0,2,"fourteen");
            } else if (rr[1]==5) {
                rr.splice(0,2,"fifteen");
            } else if (rr[1]==6) {
                rr.splice(0,2,"sixteen");
            } else if (rr[1]==7) {
                rr.splice(0,2,"seventeen");
            } else if (rr[1]==8) {
                rr.splice(0,2,"eighteen");
            } else if (rr[1]==9) {
                rr.splice(0,2,"nineteen");
            };
            
        } else if (rr[0]==2) {
            rr.splice(0,1,"twenty");
        } else if (rr[0]==3) {
            rr.splice(0,1,"thirty");
        } else if (rr[0]==4) {
            rr.splice(0,1,"forty");
        } else if (rr[0]==5) {
            rr.splice(0,1,"fifty");
        } else if (rr[0]==6) {
            rr.splice(0,1,"sixty");
        } else if (rr[0]==7) {
            rr.splice(0,1,"seventy");
        } else if (rr[0]==8) {
            rr.splice(0,1,"eighty");
        } else if (rr[0]==9) {
            rr.splice(0,1,"ninety");
        };
    




        if (rr[1]==1) {
            rr.splice(1,1,"one");
        } else if (rr[1]==2) {
            rr.splice(1,1,"two");
        } else if (rr[1]==3) {
            rr.splice(1,1,"three");
        } else if (rr[1]==4) {
            rr.splice(1,1,"four");
        } else if (rr[1]==5) {
            rr.splice(1,1,"five");
        } else if (rr[1]==6) {
            rr.splice(1,1,"six");
        } else if (rr[1]==7) {
            rr.splice(1,1,"seven");
        } else if (rr[1]==8) {
            rr.splice(1,1,"eight");
        } else if (rr[1]==9) {
            rr.splice(1,1,"nine");
        } else if (rr[1]==0) {
            rr.splice(1,1)
        };


        if (rr[1]==0) {
            rr.splice(1,1)
        };


    } else if (rr.length==1) {
        if (rr[0]==1) {
            rr.splice(0,1,"one");
        } else if (rr[0]==2) {
            rr.splice(0,1,"two");
        } else if (rr[0]==3) {
            rr.splice(0,1,"three");
        } else if (rr[0]==4) {
            rr.splice(0,1,"four");
        } else if (rr[0]==5) {
            rr.splice(0,1,"five");
        } else if (rr[0]==6) {
            rr.splice(0,1,"six");
        } else if (rr[0]==7) {
            rr.splice(0,1,"seven");
        } else if (rr[0]==8) {
            rr.splice(0,1,"eight");
        } else if (rr[0]==9) {
            rr.splice(0,1,"nine");
        } else if (rr[0]==0) {
            rr.splice(0,1, "zero");
        }




    }






    let aa = rr.join(' ');   
    return aa;
}
