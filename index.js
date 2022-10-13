let entriesEl = document.getElementById("entries-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let entries = count + " - "
    entriesEl.textContent += entries
    countEl.textContent = 0
    count = 0
    
}
