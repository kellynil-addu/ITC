const tab_file = document.getElementById("tab_file")
const tab_add = document.getElementById("tab_add")
const tab_delete = document.getElementById("tab_delete")
const nav = document.getElementsByTagName("nav")[0]
const table_content = document.getElementById("table_content")

const file_menu = {
    "btn_new": document.getElementById("btn_new"),
    "btn_save": document.getElementById("btn_save"),
    "btn_load": document.getElementById("btn_load"),
    "modal_new": document.getElementById("modal_new")
}

const add_menu = {
    "emp_name": document.getElementById("emp_name"),
    "emp_days": document.getElementById("emp_days"),
    "emp_dailyrate": document.getElementById("emp_dailyrate"),
    "emp_deduction": document.getElementById("emp_deduction"),
    "btn_add": document.getElementById("btn_add"),
    "btn_add_random": document.getElementById("btn_add_random")
}

const delete_menu = {
    "emp_delete": document.getElementById("emp_delete"),
    "btn_delete": document.getElementById("btn_delete"),
    "modal_delete": document.getElementById("modal_delete")
}

const tabs_correl = {
    "tab_file": "panel_file",
    "tab_add": "panel_add",
    "tab_delete": "panel_delete"   
}

let list = []

function changeTab(tab) {
    tab_file.classList.remove("active")
    tab_add.classList.remove("active")
    tab_delete.classList.remove("active")
    tab.classList.add("active")

    for (key in tabs_correl) {
        if (key == tab.id) {
            document.getElementById(tabs_correl[key]).classList.remove("hidden")
        } else {
            document.getElementById(tabs_correl[key]).classList.add("hidden")
        }
    }
}

changeTab(tab_file)

nav.addEventListener("click", (event) => {
    let target = event.target
    changeTab(target)
})

add_menu["btn_add"].addEventListener("click", () => {
    const employee = {
        "name": add_menu["emp_name"].value,
        "days": add_menu["emp_days"].value,
        "rate": add_menu["emp_dailyrate"].value,
        "deduction": add_menu["emp_deduction"].value
    }

    list.push(employee)
    updateTable()
})

add_menu["btn_add_random"].addEventListener("click", () => {
    const name_set = [
        "Albert", "Bob", "Charlie", "Dennis", "Erik",
        "Frank", "George", "Harry", "Isaac", "John",
        "Kevin", "Larry", "Michael", "Nathan", "Oscar",
        "Paul", "Ralph", "Sam", "Tom", "Victor",
        "Walter", "Xavier", "Yves", "Zack"
    ]

    add_menu["emp_name"].value = name_set[Math.floor(Math.random() * name_set.length)]
    add_menu["emp_days"].value = (Math.floor(Math.random() * 8) + 1) * 5
    add_menu["emp_dailyrate"].value = (Math.floor(Math.random() * 10) + 11) * 50
    add_menu["emp_deduction"].value = (Math.floor(Math.random() * 10)) * 5
})

delete_menu["btn_delete"].addEventListener("click", () => {
    const selected = delete_menu["emp_delete"].value
    const splitted = selected.split(",").sort() // TODO: Consider duplicated values

    let dynamic = delete_menu["modal_delete"].getElementsByClassName("modal_dynamic")[0]
    
    let content = ""
    for (number in splitted) {
        alert(number)
        content += splitted[number] + " (" + list[splitted[number] - 1].name + ") <br>"
    }

    dynamic.innerHTML = content

    delete_menu["modal_delete"].show()

    function listenOnClick(event) {
        let response = event.target.classList[0]
        if (response == "response_no") {
            delete_menu["modal_delete"].close()
            delete_menu["modal_delete"].removeEventListener("click", listenOnClick)
        } else if (response == "response_yes") {
            delete_menu["modal_delete"].close()
            delete_menu["modal_delete"].removeEventListener("click", listenOnClick)

            for (let i = splitted.length - 1; i >= 0; i--) {
                list.splice(splitted[i] - 1, 1)
            }

            updateTable()
        }
    }

    delete_menu["modal_delete"].addEventListener("click", listenOnClick)
})

file_menu["btn_new"].addEventListener("click", () => {
    file_menu["modal_new"].show()

    function listenOnClick(event) {
        let response = event.target.classList[0]
        if (response == "response_no") {
            file_menu["modal_new"].close()
            file_menu["modal_new"].removeEventListener("click", listenOnClick)
        } else if (response == "response_yes") {
            file_menu["modal_new"].close()
            file_menu["modal_new"].removeEventListener("click", listenOnClick)
            initList()
        }
    }

    file_menu["modal_new"].addEventListener("click", listenOnClick)
})

function initList() {
    list = []
    updateTable()
}

function updateTable() {
    table_content.replaceChildren()

    for (let i = 0; i < list.length; i++) {
        const employee = list[i]
        const row = document.createElement("tr")
        
        row.appendChild(document.createElement("td")).innerHTML = i + 1
        row.appendChild(document.createElement("td")).innerHTML = employee.name
        row.appendChild(document.createElement("td")).innerHTML = employee.days
        row.appendChild(document.createElement("td")).innerHTML = employee.rate
        row.appendChild(document.createElement("td")).innerHTML = employee.days * employee.rate
        row.appendChild(document.createElement("td")).innerHTML = employee.deduction
        row.appendChild(document.createElement("td")).innerHTML = (employee.days * employee.rate) - employee.deduction

        table_content.appendChild(row)
    }
}
