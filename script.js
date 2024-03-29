const sipAmountInput = document.getElementById('sip-amount');
const rateInput = document.getElementById('rate');
const tenureInput = document.getElementById('tenure');
const maturityValueSpan = document.getElementById('maturity-value');

function calculateMaturityValue() {
    const sipAmount = parseFloat(sipAmountInput.value);
    const rate = parseFloat(rateInput.value) / 100;
    const tenure = parseFloat(tenureInput.value);
    
    const periods = tenure * 12; // Assuming monthly SIP
    
    const maturityValue = sipAmount * (((Math.pow(1 + rate, periods) - 1) / rate) * (1 + rate));
    
    maturityValueSpan.textContent = `₹ ${maturityValue.toFixed(2)}`;
}

sipAmountInput.addEventListener('input', calculateMaturityValue);
rateInput.addEventListener('input', calculateMaturityValue);
tenureInput.addEventListener('input', calculateMaturityValue);

// Initial calculation
calculateMaturityValue();
