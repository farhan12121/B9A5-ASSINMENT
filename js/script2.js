function textSet(id, value){
    document.getElementById(id).innerText = value;
}
function setPriceSection(seatNumber){
    const setTBody = document.getElementById('t-body');
    const tList = document.createElement('tr');

    const seatNum = document.createElement('td');
    const seatClass = document.createElement('td');
    const seatPrice = document.createElement('td');

    SeatNum.classList.add('py-4' , 't-Data');
    seatPrice.classList.add('text-right');
    SeatNum.innerText = seatNumber;
    seatClass.innerText = 'Economy';
    seatPrice.innerText = '550';

    tList.appendChild(seatNum);
    tList.appendChild(seatClass);
    tList.appendChild(seatPrice);
    setTBody.appendChild(tList)

}

function elementValue(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}