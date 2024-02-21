const allSeats = document.getElementsByClassName('seats');
let count = 0;
function setClickHandler(event) {
    count = count + 1;
    textSet('seat-count', count);

    const totalSeat = document.getElementById('total-seats');
    const totalSeatText = totalSeat.innerText;
    const leftSeat = parseInt(totalSeatText);
    const remainingSeat = leftSeat - 1;
    textSet('total-seats', remainingSeat);


    const seatName = this.innerText;
    setPriceSection(seatName);

    const seatPriceText = document.getElementById('seat-price').innerText;
    const seatPrice = parseFloat(seatPriceText);
    const totalTicketPrice = count * seatPrice;
    textSet('total-price', totalTicketPrice);
    textSet('grand-total', totalTicketPrice);
    if (count <= 4) {
        this.classList.add('bg-[#1dd100]');

    }
    if (count === 4) {
        for (const seat of allSeats) {
            seat.removeEventListener('click', setClickHandler)
        }
    }
}
for (const seat of allSeats) {
    seat.addEventListener('click', setClickHandler);
}


const couponBtn = document.getElementById('apply-btn');
couponBtn.addEventListener('click', function () {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    let discountAmount = 2200;
    if (count === 4) {
        if (inputValue === 'NEW15') {
            let discountPrice = discountAmount - (discountAmount * 0.85)
            textSet('grand-total', discountPrice);
            const discountContainer = document.getElementById('priceDiscountContainer');
            const fH1 = document.createElement('h1');
            fH1.textContent('Discount Price');
            const sH1 = document.createElement('h1');
            sH1.textContent('BDT 330');
            discountContainer.appendChild(fH1);
            discountContainer.appendChild(sH1);

            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
            

        } else if (inputValue === 'COUPLE20') {
            let discountPrice = discountAmount - (discountAmount * 0.8);
            textSet('grand-total', discountPrice);
            const discountContainer = document.getElementById('priceDiscountContainer');
            const fH1 = document.createElement('h1');
            fH1.textContent('Discount Price');
            const sH1 = document.createElement('h1');
            sH1.textContent('BDT 440');
            discountContainer.appendChild(fH1);
            discountContainer.appendChild(sH1);

            const labelHide = document.getElementById('label-hide');
            labelHide.classList.add('hidden');
        }
        else{
            alert('Please Input a valid coupon')
        }
        
    } else{
        alert('Please At last buy 4 tickets')
            
    }
})

function formSubmit(e) {
    e.preventDefault();
  
    let name = document.getElementById('name');
    let nameValue = name.value;
    let number = document.getElementById("phone-number");
    let numberValue = number.value;
    let email = document.getElementById("email");
    let emailValue = email.value;
    let value = elementValue("seat-count");
  
    if (numberValue.length == 11 && numberValue > 0 && value > 0 && nameValue !== "" &&  emailValue !== "") {
      modal.showModal()
      let inputs = document.querySelectorAll("input");
      inputs.forEach(function(input) {
        input.value = '';
      });
    } else {
      alert("Please fill in all required fields.");
    }
  }