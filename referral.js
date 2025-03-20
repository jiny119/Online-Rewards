function generateReferralCode() {
    return "REF" + Math.floor(Math.random() * 10000);
}

function shareReferral() {
    let code = generateReferralCode();
    alert("Your Referral Code: " + code);
}
