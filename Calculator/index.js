document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.entry');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.value === '=') {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (this.value === 'c') {
                result.value = '';
            } else {
                result.value += this.value;
            }
        });
    });
});