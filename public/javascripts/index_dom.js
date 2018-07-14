var reservationForm = document.getElementById('reservationForm');
var cancelButton = document.getElementById('cancel');

cancelButton.addEventListener('click', function(){
    reservationForm.reset();
});