const seatPlan = document.querySelectorAll('.seat-plan');
for (let i = 0; i < seatPlan.length; i++) {
    const seat = seatPlan[i];
    // console.log(seat ,'clicked');
    seat.addEventListener('click', function () {
        const seatNum = seat.innerText;
        
    })
}