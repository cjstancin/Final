function ready(){
    no_display();
    AS.onclick = function(){
        if (document.getElementById("AS1").style.display == "none") {
            document.getElementById("AS1").style.display = "block"; 
            console.log("Atomic Structure first open")
        } else if (document.getElementById("AS1").style.display == "block") {
            document.getElementById("AS1").style.display = "none";
            console.log("Atomic Structure first close")
        };
        if (document.getElementById("AS2").style.display == "none") {
            document.getElementById("AS2").style.display = "block"; 
            console.log("Atomic Structure second open")
        } else if (document.getElementById("AS2").style.display == "block") {
            document.getElementById("AS2").style.display = "none";
            console.log("Atomic Structure second closed")
        };
        no_display_after_close_as();
    }
    AS1.onclick = function(){
        if (document.getElementById("energy").style.display == "none") {
            document.getElementById("energy").style.display = "inline"; 
            document.getElementById("enequal").style.display = "inline"; 
            document.getElementById("frequency").style.display = "inline"; 
            document.getElementById("ecalculate1").style.display = "inline"; 
            console.log("Atomic Structure first open");
        } else if (document.getElementById("energy").style.display == "inline") {
            document.getElementById("energy").style.display = "none";
            document.getElementById("enequal").style.display = "none";
            document.getElementById("frequency").style.display = "none";
            document.getElementById("ecalculate1").style.display = "none";
            
            console.log("Atomic Structure first close");
        };
    }
    AS2.onclick = function(){
        if (document.getElementById("frequencyy").style.display == "none") {
            document.getElementById("frequencyy").style.display = "inline"; 
            document.getElementById("spequal").style.display = "inline"; 
            document.getElementById("wavelength").style.display = "inline"; 
            document.getElementById("ecalculate2").style.display = "inline"; 
            console.log("Atomic Structure second open");
        } else if (document.getElementById("frequencyy").style.display == "inline") {
            document.getElementById("frequencyy").style.display = "none";
            document.getElementById("spequal").style.display = "none";
            document.getElementById("wavelength").style.display = "none";
            document.getElementById("ecalculate2").style.display = "none";
            console.log("atomic structure second close");
        }
    }

    AB.onclick = function(){
        if (document.getElementById("ph1").style.display == "none") {
            document.getElementById("ph1").style.display = "block"; 
            console.log("Acid Bases first open")
        } else if (document.getElementById("ph1").style.display == "block") {
            document.getElementById("ph1").style.display = "none";
            console.log("Acid Bases first close")
        };
        if (document.getElementById("ph2").style.display == "none") {
            document.getElementById("ph2").style.display = "block"; 
            console.log("Acid Bases second open")
        } else if (document.getElementById("ph2").style.display == "block") {
            document.getElementById("ph2").style.display = "none";
            console.log("Acid Bases second closed")
        };
        no_display_after_close_ab();
    }
    
    ph1.onclick = function(){
        if (document.getElementById("phequal").style.display == "none") {
            document.getElementById("phequal").style.display = "inline";
            document.getElementById("ph_input").style.display = "inline";
            document.getElementById("add_ph").style.display = "inline";
            document.getElementById("poh_input").style.display = "inline";
            document.getElementById("pcalculate1").style.display = "inline";
            console.log("ph show");
        } else if (document.getElementById("phequal").style.display == "inline") {
            document.getElementById("phequal").style.display = "none";
            document.getElementById("ph_input").style.display = "none";
            document.getElementById("add_ph").style.display = "none";
            document.getElementById("poh_input").style.display = "none";
            document.getElementById("pcalculate1").style.display = "none";
            console.log("ph hide");
        }
    }

    ph2.onclick = function(){
        if (document.getElementById("ph_input2").style.display == "none") {
            document.getElementById("ph_input2").style.display = "inline";
            document.getElementById("phequals").style.display = "inline";
            document.getElementById("h_plus").style.display = "inline";
            document.getElementById("pcalculate2").style.display = "inline";
            console.log("Acid Bases second open")
        } else if (document.getElementById("ph_input2").style.display == "inline") {
            document.getElementById("ph_input2").style.display = "none";
            document.getElementById("phequals").style.display = "none";
            document.getElementById("h_plus").style.display = "none";
            document.getElementById("pcalculate2").style.display = "none";
            console.log("Acid Bases second close")
        }
    }

    GLS.onclick = function(){
        if (document.getElementById("gls1").style.display == "none") {
            document.getElementById("gls1").style.display = "block"; 
            console.log("Gases Liquids first open")
        } else if (document.getElementById("gls1").style.display == "block") {
            document.getElementById("gls1").style.display = "none";
            console.log("Gases Liquids first close")
        };
        if (document.getElementById("gls2").style.display == "none") {
            document.getElementById("gls2").style.display = "block"; 
            console.log("Gases Liquids second open")
        } else if (document.getElementById("gls2").style.display == "block") {
            document.getElementById("gls2").style.display = "none";
            console.log("Gases Liquids second close")
        };
        no_display_after_close_gls();
    }

    gls1.onclick = function(){
        if (document.getElementById("p").style.display == "none") {
            document.getElementById("p").style.display = "inline";
            document.getElementById("v").style.display = "inline";
            document.getElementById("glequal").style.display = "inline";
            document.getElementById("n").style.display = "inline";
            document.getElementById("r").style.display = "inline";
            document.getElementById("t").style.display = "inline";
            document.getElementById("gcalculate1").style.display = "inline";
        } else if (document.getElementById("p").style.display == "inline") {
            document.getElementById("p").style.display = "none";
            document.getElementById("v").style.display = "none";
            document.getElementById("glequal").style.display = "none";
            document.getElementById("n").style.display = "none";
            document.getElementById("r").style.display = "none";
            document.getElementById("t").style.display = "none";
            document.getElementById("gcalculate1").style.display = "none";
        };
    }

    gls2.onclick = function(){
        if (document.getElementById("k").style.display == "none") {
            document.getElementById("k").style.display = "inline"
            document.getElementById("glequals").style.display = "inline";
            document.getElementById("c").style.display = "inline";
            document.getElementById("c_plus").style.display = "inline";
            document.getElementById("gcalculate2").style.display = "inline";
        } else if (document.getElementById("k").style.display == "inline") {
            document.getElementById("k").style.display = "none"
            document.getElementById("glequals").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("c_plus").style.display = "none";
            document.getElementById("gcalculate2").style.display = "none";
        };
    }

    TD.onclick = function(){
        if (document.getElementById("td1").style.display == "none") {
            document.getElementById("td1").style.display = "block"; 
            console.log("Thermodynamics first open")
        } else if (document.getElementById("td1").style.display == "block") {
            document.getElementById("td1").style.display = "none";
            console.log("Thermodynamics first close");
        };
        if (document.getElementById("td2").style.display == "none") {
            document.getElementById("td2").style.display = "block"; 
            console.log("Thermodynamics second open")
        } else if (document.getElementById("td2").style.display == "block") {
            document.getElementById("td2").style.display = "none";
            console.log("Thermodynamics second close");
        };
        no_display_after_close_td();
    }

    td1.onclick = function(){
        if (document.getElementById("q").style.display == "none") {
            document.getElementById("q").style.display = "inline"
            document.getElementById("tequal").style.display = "inline";
            document.getElementById("m").style.display = "inline";
            document.getElementById("sp").style.display = "inline";
            document.getElementById("ct").style.display = "inline";
            document.getElementById("tcalculate1").style.display = "inline";
        } else if (document.getElementById("q").style.display == "inline") {
            document.getElementById("q").style.display = "none"
            document.getElementById("tequal").style.display = "none";
            document.getElementById("m").style.display = "none";
            document.getElementById("sp").style.display = "none";
            document.getElementById("ct").style.display = "none";
            document.getElementById("tcalculate1").style.display = "none";
    };
    }

    td2.onclick = function(){
        if (document.getElementById("l").style.display == "none") {
            document.getElementById("l").style.display = "inline"
            document.getElementById("tequals").style.display = "inline";
            document.getElementById("char").style.display = "inline";
            document.getElementById("tim").style.display = "inline";
            document.getElementById("tcalculate2").style.display = "inline";
        } else if (document.getElementById("l").style.display == "inline") {
            document.getElementById("l").style.display = "none"
            document.getElementById("tequals").style.display = "none";
            document.getElementById("char").style.display = "none";
            document.getElementById("tim").style.display = "none";
            document.getElementById("tcalculate2").style.display = "none";
        };
    }

    function no_display(){
        no_display_for_as();
        no_display_for_ab();
        no_display_for_gls();
        no_display_for_td();
    }

    function no_display_for_as(){
        document.getElementById("AS1").style.display = "none";
        document.getElementById("AS2").style.display = "none";
        document.getElementById("energy").style.display = "none";
        document.getElementById("enequal").style.display = "none";
        document.getElementById("frequency").style.display = "none";
        document.getElementById("wavelength").style.display = "none";
        document.getElementById("spequal").style.display = "none";
        document.getElementById("frequencyy").style.display = "none";
        document.getElementById("ecalculate1").style.display = "none";
        document.getElementById("ecalculate2").style.display = "none";
    }

    function no_display_for_ab(){
        document.getElementById("ph1").style.display = "none";
        document.getElementById("ph2").style.display = "none";
        document.getElementById("phequal").style.display = "none";
        document.getElementById("ph_input").style.display = "none";
        document.getElementById("add_ph").style.display = "none";
        document.getElementById("poh_input").style.display = "none";
        document.getElementById("ph_input2").style.display = "none";
        document.getElementById("phequals").style.display = "none";
        document.getElementById("h_plus").style.display = "none";
        document.getElementById("pcalculate1").style.display = "none";
        document.getElementById("pcalculate2").style.display = "none";
    }

    function no_display_for_gls(){
        document.getElementById("gls1").style.display = "none";
        document.getElementById("gls2").style.display = "none";
        document.getElementById("p").style.display = "none";
        document.getElementById("v").style.display = "none";
        document.getElementById("glequal").style.display = "none";
        document.getElementById("n").style.display = "none";
        document.getElementById("r").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("k").style.display = "none";
        document.getElementById("glequals").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("c_plus").style.display = "none";
        document.getElementById("gcalculate1").style.display = "none";
        document.getElementById("gcalculate2").style.display = "none";
    }

    function no_display_for_td(){
        document.getElementById("td1").style.display = "none";
        document.getElementById("td2").style.display = "none";
        document.getElementById("q").style.display = "none";
        document.getElementById("tequal").style.display = "none";
        document.getElementById("m").style.display = "none";
        document.getElementById("sp").style.display = "none";
        document.getElementById("ct").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("tequals").style.display = "none";
        document.getElementById("char").style.display = "none";
        document.getElementById("tim").style.display = "none";
        document.getElementById("tcalculate1").style.display = "none";
        document.getElementById("tcalculate2").style.display = "none";
    }

    function no_display_after_close_as(){
        document.getElementById("energy").style.display = "none";
        document.getElementById("enequal").style.display = "none";
        document.getElementById("frequency").style.display = "none";
        document.getElementById("ecalculate1").style.display = "none";
        document.getElementById("ecalculate2").style.display = "none";
        document.getElementById("wavelength").style.display = "none";
        document.getElementById("spequal").style.display = "none";
        document.getElementById("frequencyy").style.display = "none";
    }

    function no_display_after_close_ab(){
        document.getElementById("phequal").style.display = "none";
        document.getElementById("ph_input").style.display = "none";
        document.getElementById("add_ph").style.display = "none";
        document.getElementById("poh_input").style.display = "none";
        document.getElementById("ph_input2").style.display = "none";
        document.getElementById("phequals").style.display = "none";
        document.getElementById("h_plus").style.display = "none";
        document.getElementById("pcalculate2").style.display = "none";
        document.getElementById("pcalculate1").style.display = "none";
    }

    function no_display_after_close_gls(){
        document.getElementById("p").style.display = "none";
        document.getElementById("v").style.display = "none";
        document.getElementById("glequal").style.display = "none";
        document.getElementById("n").style.display = "none";
        document.getElementById("r").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("k").style.display = "none";
        document.getElementById("glequals").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("c_plus").style.display = "none";
        document.getElementById("gcalculate1").style.display = "none";
        document.getElementById("gcalculate2").style.display = "none";
    }

    function no_display_after_close_td(){
        document.getElementById("q").style.display = "none";
        document.getElementById("tequal").style.display = "none";
        document.getElementById("m").style.display = "none";
        document.getElementById("sp").style.display = "none";
        document.getElementById("ct").style.display = "none";
        document.getElementById("l").style.display = "none";
        document.getElementById("tequals").style.display = "none";
        document.getElementById("char").style.display = "none";
        document.getElementById("tim").style.display = "none";
        document.getElementById("tcalculate1").style.display = "none";
        document.getElementById("tcalculate2").style.display = "none";
    }

    ecalculate1.onclick = function(){
        let energy = document.getElementById('energy').value;
        let frequency = document.getElementById('frequency').value;
        energy = parseFloat(energy);
        frequency = parseFloat(frequency);
        if (isNaN(energy) && !isNaN(frequency)) {
            let eng = frequency * 6.626*(10**-34);
            document.getElementById('energy').value = eng;
            console.log(eng);
        } else if (!isNaN(energy) && isNaN(frequency)) {
            let fre = energy / 6.626*(10**-34);
            document.getElementById('frequency').value = fre;
            console.log(fre);
        };
    }

    ecalculate2.onclick = function(){
        let wavelength = document.getElementById('wavelength').value;
        let frequencyy = document.getElementById('frequencyy').value;
        wavelength = parseFloat(wavelength);
        frequencyy = parseFloat(frequencyy);
        if (!isNaN(wavelength) && isNaN(frequencyy)) {
            let freq = 2.998*(10**8) / wavelength;
            document.getElementById('frequencyy').value = freq;
            console.log(freq);
        } else if (isNaN(wavelength) && !isNaN(frequencyy)) {
            let wav = 2.998*(10**8) / frequencyy;
            document.getElementById('wavelength').value = wav;
            console.log(wav);   
        };
    }

    pcalculate1.onclick = function(){
        let ph = document.getElementById('ph_input').value;
        let poh = document.getElementById('poh_input').value;
        ph = parseFloat(ph);
        poh = parseFloat(poh);
        if (!isNaN(ph) && isNaN(poh)) {
            let poh_val = 14 - ph;
            document.getElementById('poh_input').value = poh_val;
            console.log(poh); 
        } else if (isNaN(ph) && !isNaN(poh)) {
            let ph_val = 14 - poh;
            document.getElementById('ph_input').value = ph_val;
            console.log(ph); 
        }
    }

    pcalculate2.onclick = function(){
        let ph2 = document.getElementById('ph_input2').value;
        let h_plus = document.getElementById('h_plus').value;
        ph2 = parseFloat(ph2);
        hplus = parseFloat(h_plus);
        console.log(`hplus is ${hplus}`)
        if (isNaN(h_plus) && !(isNaN(ph2))) {
            let h_value = 10**(-1*ph2)
            document.getElementById('h_plus').value = h_value;
            console.log(h_value);
        } else if (isNaN(ph2) && !isNaN(h_plus)) {
            let ph_value = -1*Math.log10(hplus)
            document.getElementById('ph2').value = ph_value;
            console.log(ph_value);
        }else {
            console.log('ligma')
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);