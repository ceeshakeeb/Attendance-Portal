const calendar=document.getElementById('calendar');

for(let d=1; d<=30; d++){
 const div=document.createElement('div');
 div.className='day';

 if(d%7===0){
   div.classList.add('weekoff');
 }else if(d===5){
   div.classList.add('holiday');
 }else if(d===12){
   div.classList.add('leave');
 }else if(d===18){
   div.classList.add('paidleave');
 }else{
   div.classList.add('present');
 }

 div.textContent=d;
 calendar.appendChild(div);
}

document.getElementById('leaveBtn').onclick=()=>{
 alert('Leave request submitted for admin approval.');
};
