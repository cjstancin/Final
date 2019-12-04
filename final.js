function ready(){
    document.getElementById("AS1").style.display = "none";
    document.getElementById("AS2").style.display = "none";
    document.getElementById("energy").style.display = "none";
    document.getElementById("enequal").style.display = "none";
    document.getElementById("wavelength").style.display = "none";
    document.getElementById("calculate").style.display = "none";
    document.getElementById("calculatee").style.display = "none";
    document.getElementById("wavelengthh").style.display = "none";
    document.getElementById("spequal").style.display = "none";
    document.getElementById("energyy").style.display = "none";
    AS.onclick = function(){
        if (document.getElementById("AS1").style.display == "none") {
            document.getElementById("AS1").style.display = "block"; 
            console.log("Nas 1")
        } else if (document.getElementById("AS1").style.display == "block") {
            document.getElementById("AS1").style.display = "none";
            console.log("Nas 2")
        };
        if (document.getElementById("AS2").style.display == "none") {
            document.getElementById("AS2").style.display = "block"; 
            console.log("Nas 11")
        } else if (document.getElementById("AS2").style.display == "block") {
            document.getElementById("AS2").style.display = "none";
            console.log("Nas 22")
        };
        document.getElementById("energy").style.display = "none";
        document.getElementById("enequal").style.display = "none";
        document.getElementById("wavelength").style.display = "none";
        document.getElementById("calculate").style.display = "none";
    }
    AS1.onclick = function(){
        if (document.getElementById("energy").style.display == "none") {
            document.getElementById("energy").style.display = "inline"; 
            document.getElementById("enequal").style.display = "inline"; 
            document.getElementById("wavelength").style.display = "inline"; 
            document.getElementById("calculate").style.display = "inline"; 
            console.log("Nas 111");
        } else if (document.getElementById("energy").style.display == "inline") {
            document.getElementById("energy").style.display = "none";
            document.getElementById("enequal").style.display = "none";
            document.getElementById("wavelength").style.display = "none";
            document.getElementById("calculate").style.display = "none";
            console.log("Nas 222");
        };
    }
    AS2.onclick = function(){
        if (document.getElementById("energyy").style.display == "none") {
            document.getElementById("energyy").style.display = "inline"; 
            document.getElementById("spequal").style.display = "inline"; 
            document.getElementById("wavelengthh").style.display = "inline"; 
            document.getElementById("calculatee").style.display = "inline"; 
            console.log("Nas 111");
        } else if (document.getElementById("energyy").style.display == "inline") {
            document.getElementById("energyy").style.display = "none";
            document.getElementById("spequal").style.display = "none";
            document.getElementById("wavelengthh").style.display = "none";
            document.getElementById("calculatee").style.display = "none";
            console.log("Nas 222");
    }
    }
}

document.addEventListener("DOMContentLoaded", ready);