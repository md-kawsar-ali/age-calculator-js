function calculation() {
    const showResult = document.querySelector('#result');
    const showErorr = document.querySelector('#error');

    // Current Date
    const today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1; // Month Start Counting from 0 index
    let currentYear = today.getFullYear();

    // Date Of Birth
    let birthDay = document.querySelector('#birthDay').value;
    let birthMonth = document.querySelector('#birthMonth').value;
    let birthYear = document.querySelector('#birthYear').value;

    if(birthYear < currentYear && 31 >= birthDay != 0 && 12 >= birthMonth != 0 && birthYear != 0) {
        // If Birth Day is Greater than Current Day
        if(birthDay > currentDay){
            currentDay += 30; // + 1 month = 30 days
            currentMonth -= 1; // -1 month (we added to the day)
        }

        // If Birth Month is Greater than Current Month
        if(birthMonth > currentMonth) {
            currentMonth += 12;
            currentYear -= 1;
        }

        let ageDay = currentDay - birthDay + 1; // Adding extra 1 day
        let ageMonth = currentMonth - birthMonth;
        let ageYear = currentYear - birthYear;

        // Print Result
        showResult.textContent = 'Your age is: ' + ageYear + ' Year, ' + ageMonth + ' Month, ' + ageDay + ' Day';
        showResult.classList.remove('hidden');
        showErorr.classList.add('hidden');

    }else {
        showResult.classList.add('hidden');
        showErorr.classList.remove('hidden');
    }
}