function playButtonSound()
{
    var buttonSound = document.getElementById('buttonSound');
    buttonSound.play();
}

function showPopup()
{
    var email = document.getElementById('email').value;
    var successMessage = document.getElementById('success-message');
    successMessage.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;

    playButtonSound();

    var svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>';

    var titleWithIcon = '<div class="title-with-icon">' +
        '<div class="svg-icon">' + svgIcon + '</div>' +
        '<div class="title-text">Thanks for Subscribing!</div>' +
        '</div>';


    Swal.fire({
        title: titleWithIcon,
        html: document.getElementById('popup').innerHTML,
        icon: 'success',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Dismiss Message',
        confirmButtonClass: 'my-confirm-button',
        customClass: {
            popup: 'my-popup-container',
            container: 'swal2-container',
            message: 'success-message',
            title: 'title',
            icon: 'svg-icon'
        }
    });
}

function closePopup()
{
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function isValidEmail(email)
{
    // Regular expression for strict email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validateEmail()
{
    var email = document.getElementById('email').value;
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('email-error');

    if (!isValidEmail(email))
    {
        emailError.innerText = 'Valid email required.';
        emailError.style.display = 'block';
        emailInput.classList.add('input-error'); // Add the class to change background and border
        return false;
    } else
    {
        emailError.style.display = 'none';
        emailInput.classList.remove('input-error'); // Remove the class
        showPopup(); // Call the showPopup function if validation passes
        return false; // Return false to prevent form submission
    }
}