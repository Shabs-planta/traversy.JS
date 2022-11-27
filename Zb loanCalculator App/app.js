// listen for submit...
document.getElementById('loan-form').addEventListener('submit', function(e){
   // hide results
   document.getElementById('results').style.display = 'none';
   // show loading
   document.getElementById('loading').style.display = 'block';

   setTimeout(calculateResults, 2000);

   e.preventDefault();
});


// Create function for calculateResult
function calculateResults(){
   // hide Result
   document.getElementById('loading').remove();

   // list UI vars
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment');
   const totalInterest = document.getElementById('total-interest');

   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
   const calculatedPayments = parseFloat(years.value) * 12;

   // compute Monthly payment
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (principal*x*calculatedInterest)/(x-1);

   if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

      // show Result
      document.querySelector('#results').style.display = 'block';
   }
    else{
      // call function 
      showError('Please check your numbers!');
   }
}

// Show Error
function showError(error){
   // create a div
   const errorDiv = document.createElement('div');

   // Get elements
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');


   // Add class
   errorDiv.className = 'alert alert-danger';
   // create text node and append to "Div"
   errorDiv.appendChild(document.createTextNode(error));

   // insert Error above Heading...
   card.insertBefore(errorDiv, heading);
   // clear error after 3seconds.
   setTimeout(clearError, 3000);
}

function clearError(){
   document.querySelector('.alert').remove();
}