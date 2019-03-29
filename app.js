
const form = document.getElementById('entry-form');
const entryInput = document.getElementById('entry');
const entryList = document.getElementById('collection');
const clearBtn = document.getElementById('clearBtn');


loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addEntry);
    entryList.addEventListener('click', removeEntry);
    clearBtn.addEventListener('click', removeAll);
}

function addEntry(e) {
    if (entryInput.value === '') {
        alert('Eintrag darf nicht leer sein');
        entryInput.focus();
        entryInput.select();
    } else {
        const li = document.createElement('li');
        const text = document.createTextNode(entryInput.value);
        li.appendChild(text);
        const link = document.createElement('a');
        link.className = 'u-pull-right delete-item'
        link.innerHTML = '<i class="far fa-trash-alt"></i>';
        li.appendChild(link);
        entryList.appendChild(li);
        entryInput.value = '';
    }
    e.preventDefault();
}

function removeEntry(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
    }
}

function removeAll(e) {
    console.log('remove all')
    while(entryList.firstChild) {
        entryList.removeChild(entryList.firstChild);
    }
}