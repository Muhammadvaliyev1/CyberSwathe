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

document.getElementById('aside-button').addEventListener('click', function() {
    const aside = document.getElementById('aside');
    const main = document.getElementById('main');
    const asbutton = document.getElementById('asbutton');

    // Toggle classes on aside
    if (aside.classList.contains('max-w-[0px]')) {
        aside.classList.remove('max-w-[0px]');
    } else {
        aside.classList.add('max-w-[0px]');
    }

    // Toggle classes on main
    if (main.classList.contains('w-full')) {
        main.classList.remove('w-full');
    } else {
        main.classList.add('w-full');
    }
    
    if (asbutton.classList.contains('-rotate-180')) {
        asbutton.classList.remove('-rotate-180');
    } else {
        asbutton.classList.add('-rotate-180');
    }
});


function showDropdownOptions() {
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
}

function showDropdownOptions1() {
    document.getElementById("options1").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
}
function action() {
    document.getElementById("action").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
}

function toggleAccordion(button) {
    const allContents = document.querySelectorAll('.accordion-content');
    const allButtons = document.querySelectorAll('button[type="button"] svg');
    const content = button.nextElementSibling;
    const svg = button.querySelector('svg');

    allContents.forEach(c => {
        if (c !== content) {
            c.classList.add('hidden');
            c.classList.remove('show');
        }
    });

    allButtons.forEach(s => {
        if (s !== svg) {
            s.classList.remove('rotate-180');
        }
    });

    content.classList.toggle('hidden');
    content.classList.toggle('show');
    svg.classList.toggle('rotate-180');
}