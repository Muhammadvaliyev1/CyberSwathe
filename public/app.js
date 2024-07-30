document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активное состояние со всех кнопок
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('bg-cyanblue', 'text-white');
            btn.classList.add('bg-spaced-gray');
            btn.querySelector('span').classList.remove('text-white');
            btn.querySelector('span').classList.add('text-red-500');
            btn.querySelector('div').classList.remove('bg-white');
            btn.querySelector('div').classList.add('bg-gray');
            btn.querySelector('.font-medium').classList.remove('text-white');
            btn.querySelector('.font-medium').classList.add('text-gray');
            
            // Удаляем указанные классы
            btn.classList.remove('hover:bg-cyanblue', 'bg-opacity-20');
        });

        // Устанавливаем активное состояние для нажатой кнопки
        button.classList.remove('bg-spaced-gray');
        button.classList.add('bg-cyanblue');
        button.querySelector('span').classList.remove('text-red-500');
        button.querySelector('span').classList.add('text-white');
        button.querySelector('div').classList.remove('bg-gray');
        button.querySelector('div').classList.add('bg-white');
        button.querySelector('.font-medium').classList.remove('text-gray');
        button.querySelector('.font-medium').classList.add('text-white');

        // Удаляем указанные классы с нажатой кнопки
        button.classList.remove('hover:bg-cyanblue', 'bg-opacity-20');

        // Показываем соответствующий контент
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
    if (aside.classList.contains('max-w-ss')) {
        aside.classList.remove('max-w-ss')
        aside.classList.add('max-w-0');
    } else {
        aside.classList.remove('max-w-0');
        aside.classList.add('max-w-ss')
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


function showDropdownOptions(buttonId, optionsId, arrowUpId, arrowDownId) {
    // Hide other dropdowns
    if (buttonId === 'dropdownButton1') {
        document.getElementById("options2").classList.add("hidden");
        document.getElementById("arrow-up-2").classList.add("hidden");
        document.getElementById("arrow-down-2").classList.remove("hidden");
    } else {
        document.getElementById("options1").classList.add("hidden");
        document.getElementById("arrow-up-1").classList.add("hidden");
        document.getElementById("arrow-down-1").classList.remove("hidden");
    }
    
    // Toggle current dropdown
    document.getElementById(optionsId).classList.toggle("hidden");
    document.getElementById(arrowUpId).classList.toggle("hidden");
    document.getElementById(arrowDownId).classList.toggle("hidden");
}

function closeDropdownOptions(event) {
    if (!document.getElementById("dropdownButton1").contains(event.target) && !document.getElementById("options1").contains(event.target)) {
        document.getElementById("options1").classList.add("hidden");
        document.getElementById("arrow-up-1").classList.add("hidden");
        document.getElementById("arrow-down-1").classList.remove("hidden");
    }

    if (!document.getElementById("dropdownButton2").contains(event.target) && !document.getElementById("options2").contains(event.target)) {
        document.getElementById("options2").classList.add("hidden");
        document.getElementById("arrow-up-2").classList.add("hidden");
        document.getElementById("arrow-down-2").classList.remove("hidden");
    }
}

document.getElementById("dropdownButton1").addEventListener("click", function(event) {
    showDropdownOptions('dropdownButton1', 'options1', 'arrow-up-1', 'arrow-down-1');
    event.stopPropagation();
});

document.getElementById("dropdownButton2").addEventListener("click", function(event) {
    showDropdownOptions('dropdownButton2', 'options2', 'arrow-up-2', 'arrow-down-2');
    event.stopPropagation();
});

document.addEventListener("click", closeDropdownOptions);

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