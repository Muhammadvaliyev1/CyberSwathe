document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('bg-cyanblue', 'text-white');
            btn.classList.add('bg-spaced-gray');
            btn.querySelector('span').classList.remove('text-white');
            btn.querySelector('span').classList.add('text-red-500');
            btn.querySelector('div').classList.remove('bg-white');
            btn.querySelector('div').classList.add('bg-gray');
            btn.querySelector('.font-medium').classList.remove('text-white');
            btn.querySelector('.font-medium').classList.add('text-gray');
        });
        button.classList.remove('bg-spaced-gray');
        button.classList.add('bg-cyanblue');
        button.querySelector('span').classList.remove('text-red-500');
        button.querySelector('span').classList.add('text-white');
        button.querySelector('div').classList.remove('bg-gray');
        button.querySelector('div').classList.add('bg-white');
        button.querySelector('.font-medium').classList.remove('text-gray');
        button.querySelector('.font-medium').classList.add('text-white');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('grid');
        });
        document.getElementById(button.getAttribute('data-content')).classList.remove('hidden');
        document.getElementById(button.getAttribute('data-content')).classList.add('grid');
    });
});