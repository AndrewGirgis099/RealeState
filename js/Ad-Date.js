
// const currentDateSpan = document.querySelector('.currentDate');
        
// // Create a new Date object
// const currentDate = new Date();

// // Arabic month names
// const arabicMonthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

// // Format the date in Arabic
// const formattedDate = `${currentDate.getDate()} ${arabicMonthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

// // Set the innerHTML of the span element to the formatted date
// currentDateSpan.innerHTML = formattedDate;

function displayCurrentDate() {
    var currentDate = new Date();
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    
    var arabicDate = currentDate.toLocaleDateString('ar-EG', options);
    
    document.getElementById("date-h2").textContent = "اليوم هو " + arabicDate;
    document.getElementById("date-span").textContent = "تاريخ اليوم: " + arabicDate;
    document.getElementById("date-p").textContent = "التاريخ الحالي هو " + arabicDate;
  }
  
  // Call the function to display current date when the page loads
  displayCurrentDate();