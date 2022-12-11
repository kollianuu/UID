function calc() {
    var fix = 12;
    var principal = Number(document.getElementById('principal').value);
    var interest_rate = Number(document.getElementById('interest_rate').value);
    var time = Number(document.getElementById('time').value);
    if (principal >= 1 && interest_rate > 0 && time > 0); {
        var time = (time / fix); // Convert to years
        compound_interest = principal * Math.pow((1 + interest_rate / 100), time);
        x = parseFloat(compound_interest.toFixed(2)) ;
        document.getElementById('input_result').value = x;
        }
    }