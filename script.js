document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('تمت إضافة المنتج إلى السلة!');
        });
    });
});
