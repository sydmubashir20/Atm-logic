// First face values
let Blanace=10000;
let Pin=document.getElementById('Pin');
let WrongPinE=document.getElementById('WrongPinError');
let PinBtn=document.getElementById('pinEnterBtn');
// First face values ends

// Second face values
let deposite=document.getElementById('cashDepo');
let widthD=document.getElementById('cashWidth');
let balCheck=document.getElementById('cashCheck');
let Goback=document.getElementById('Main')
let Exit=document.getElementById('exit1');
let Exit2=document.getElementById('exit2');
let Exit3=document.getElementById('exit3');

let checkPin=()=>{
if(Pin.value== 1234){

// Functionality will be implemented on first phase
 Pin.style.display='none';
 PinBtn.style.display='none';
 WrongPinE.style.display='none';
 Pin.style.borderColor='';
WrongPinE.value="";
//First phase end

// Functionality will be implemented on second phase
deposite.style.display='block';
widthD.style.display='block';
balCheck.style.display='block';
Goback.style.display='block';

}
else
{
// Functionality will be implemented on invalid values of first phase
Pin.style.borderWidth='1px';
Pin.style.borderColor='red';
WrongPinE.style.color='red';
WrongPinE.value="entered an invalid pin";
//invalid values of first phase end

}
}

//  Deposite functionality starts
let depositeValue=document.getElementById('depositeValue');
let ShowBal=document.getElementById('showBlance');

let depositeFunc=()=>{
deposite.style.display='none';
widthD.style.display='none';
balCheck.style.display='none';
Goback.style.display='none';
Exit.style.display='block';
depositeValue.style.display='block';
let depoBtn=document.getElementById('Enterdepo');
depoBtn.style.display='block';
}

let addBalance=()=>{
if(depositeValue.value%500==0){
    if(depositeValue.value!=0){
let blanace=Blanace+=parseInt(depositeValue.value);
ShowBal.style.display='block';
ShowBal.style.color='white';
ShowBal.value=`Cash deposite successful Your current balance is "Rs:${blanace}"`;
    }else{
        ShowBal.style.display='block';
    ShowBal.style.color='red';
    ShowBal.value="You can't leave this empty";
    }
}
else{
    ShowBal.style.display='block';
    ShowBal.style.color='red';
    ShowBal.value="This amount cannot be deposited";
}
}
//  Deposite functionality ends


// cash widthdrawal functionality starts
let widthdrawalValue=document.getElementById('widthdrawalValue');
let Showbal=document.getElementById('showblance');

let WidthFunc=()=>{
deposite.style.display='none';
widthD.style.display='none';
balCheck.style.display='none';
Goback.style.display='none';
Exit2.style.display='block';
widthdrawalValue.style.display='block';
let widthDBtn=document.getElementById('Enterwidth');
widthDBtn.style.display='block';
}

let subtractBalance=()=>{
if(widthdrawalValue.value%500==0){
    if(widthdrawalValue.value!=0){
    if(widthdrawalValue.value>=500 && widthdrawalValue.value<=Blanace){
        let blanace=Blanace-=parseInt(widthdrawalValue.value);
Showbal.style.display='block';
Showbal.style.color='white';
Showbal.value=`Transection successfull Your current balance is "Rs:${blanace}"`
}else{
    Showbal.style.display='block';
    Showbal.style.color='red';
    Showbal.value=`You have insufficent balance in your account "Rs:${Blanace}"`;
}
}else{
Showbal.style.display='block';
    Showbal.style.color='red';
    Showbal.value=`You can't leave this empty`;
}
}
else{
    Showbal.style.display='block';
    Showbal.style.color='red';
    Showbal.value="This amount cannot be transected sorry";
}
}
// cash widthdrawal functionality ends

//Balance check functionality
let CashCheckFunc=()=>{
deposite.style.display='none';
widthD.style.display='none';
balCheck.style.display='none';
Goback.style.display='none';
Exit3.style.display='block';
let seeBal=document.getElementById('showblanceb');
seeBal.style.display='block';
seeBal.style.color='white';
seeBal.value=`You balance is "Rs:${Blanace}"`;
}

//exit functionality from deposit
let ExitF=()=>{
deposite.style.display='block';
widthD.style.display='block';
balCheck.style.display='block';
Goback.style.display='block';
Exit.style.display='none';
depositeValue.style.display='none';
let depoBtn=document.getElementById('Enterdepo');
depoBtn.style.display='none';
ShowBal.style.display='none';

}
let ExitF2=()=>{
deposite.style.display='block';
widthD.style.display='block';
balCheck.style.display='block';
Goback.style.display='block';
widthdrawalValue.style.display='block';
Exit2.style.display='none';
let widthDBtn=document.getElementById('Enterwidth');
widthDBtn.style.display='none';
widthdrawalValue.style.display='none';
Showbal.style.display='none';
}

let ExitF3=()=>{
deposite.style.display='block';
widthD.style.display='block';
balCheck.style.display='block';
Goback.style.display='block';
let seeBal=document.getElementById('showblanceb');
seeBal.style.display='none';
Exit3.style.display='none';
}

let goBack=()=>{
deposite.style.display='none';
widthD.style.display='none';
balCheck.style.display='none';
Goback.style.display='none';
Pin.style.display='block';
Pin.value='';
 PinBtn.style.display='block';
 WrongPinE.style.display='block';
}