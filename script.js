let list = document.querySelector('input');
let clear = document.querySelector(".x-button");
// document.querySelector(".add-button").addEventListener('click',()=>{
//     console.log(list.value);
// })
document.querySelector('.x-button').addEventListener('click',()=>{
    list.value = "";
})
const xButton = document.querySelector(".clear-icon");
xButton.addEventListener("mouseover", ()=> {
    xButton.src = "./Frame (2).svg";
});
xButton.addEventListener("mouseout",() =>{
    xButton.src = "./Frame (1).svg"; 
});

const arrowButton = document.querySelector(".arrow-icon");

arrowButton.addEventListener("mouseover", ()=> {
    arrowButton.src = "./Frame (4).svg";
});

arrowButton.addEventListener("mouseout",() =>{
    arrowButton.src = "./Frame.svg"; 
});

let saveButton = document.querySelector('.add-button');
let showButton = document.querySelector('.plus-button');
let dataList = document.querySelector('.dataList');


// Yeni tapşırıq əlavə edən funksiya
function addTask() {
    const inputField = document.querySelector(".input");
    const inputText = inputField.value.trim();

    if (inputText) {
        // Yeni tapşırıq yaratmaq
        const newItem = document.createElement("li");
        newItem.classList.add("task-item");

        // Mətn və sil düyməsi üçün konteyner yaratmaq
        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        // Tapşırıq mətnini əlavə etmək
        const taskText = document.createElement("span");
        taskText.textContent = inputText; // inputText istifadə edirik
        taskContent.appendChild(taskText); // Mətni konteynerə əlavə etmək

        // Sil düyməsi yaratmaq
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("x-button");
        deleteButton.innerHTML = '<img src="./Frame (1).svg" class="clear-icon" alt="Delete">';
        deleteButton.onclick = function () {
            newItem.remove();
        };

        // Sil düyməsini konteynerə əlavə etmək
        taskContent.appendChild(deleteButton);

        // Mətn və sil düyməsinin olduğu konteyneri `newItem`-ə əlavə etmək
        newItem.appendChild(taskContent);

        // Yeni tapşırığı `.dataList`-ə əlavə etmək
        document.querySelector(".dataList").appendChild(newItem);

        // Input sahəsini təmizləmək
        inputField.value = "";
    } else {
        alert("Tapşırıq daxil etmek ucun + buttonun klikleyin!!");
    }
}

// Add düyməsinə basıldığında input sahəsini gizlədərək to-do siyahısını göstərir
document.querySelector(".add-button").addEventListener("click", function () {
    const inputField = document.querySelector(".input");
    inputField.style.display = "none";
    document.querySelector('.x-button').style.display = "none";
    const dataList = document.querySelector(".todo-container");
    dataList.style.display = "block";
    dataList.style.marginTop = "20px";
    document.querySelector(".delete-button").style.marginTop="-10px";

    document.querySelector('.header-text').style.top = "-45px";
    document.querySelector('.x-button').style.marginTop = "-20px";
    document.querySelector('.container').style.height = "290px";
    document.querySelector('.todo-container').style.height = "190px";
    document.querySelector('.selection').style.marginTop = "-10px";
    document.querySelector('.arrow-icon').style.marginTop = "-20px";

    const container = document.querySelector('.container');
    container.style.display = "flex";
    document.querySelector('.header-text').style.marginTop = "35px";

    const xButton = document.querySelector(".clear-icon");
xButton.addEventListener("mouseover", ()=> {
    xButton.src = "./Frame (2).svg";
});
xButton.addEventListener("mouseout",() =>{
    xButton.src = "./Frame (1).svg"; 
});

});

// Plus düyməsinə basıldığında to-do siyahısını gizlədərək input sahəsini göstərir
document.querySelector(".plus-button").addEventListener("click", function () {
    document.querySelector(".input").style.display = "block"; // input sahəsini göstərir
    const inputField = document.querySelector(".input");
    document.querySelector('.todo-container').style.display = "none";
    document.querySelector(".clear-icon").style.margin = "0px";
    document.querySelector(".container").style.height = "236px";
    document.querySelector(".input").style.marginTop = "26px";
    document.querySelector(".arrow-icon").style.marginTop = "28px";
    document.querySelector(".delete-button").style.marginTop="-20px";
    document.querySelector('.header-text').style.top = "-15px";
    document.querySelector('.x-button').style.marginTop = "-10px";
    document.querySelector(".x-button").style.display = "block";
    document.querySelector(".x-button").style.marginRight = "-210px";
    document.querySelector(".selection").style.marginTop = "30px";

    const arrow = document.querySelector(".delete-button");
        // Klikləndikdə şəkli dəyişən hadisə dinləyicisi
        arrow.addEventListener("click", () => {
            const imgElement = arrow.querySelector("img");
            imgElement.src = "./Frame (2).svg"; // Yeni şəkil yolu
            } )
});

// X düyməsi funksiyası: Input sahəsini təmizləyir
document.querySelector(".x-button").addEventListener("click", function () {
    document.querySelector(".input").value = ""; // Input sahəsini təmizləyirik
});

// Arrow düyməsi ilə sıralama
document.querySelector(".arrow-icon").addEventListener("click", () => {
    const taskList = document.querySelector(".dataList");
    let tasks = Array.from(taskList.children); 

    for (let i = 0; i < tasks.length; i++) {
        for (let j = 0; j < tasks.length - i - 1; j++) {
            if (tasks[j].textContent > tasks[j + 1].textContent) {
                let temp = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }

    // Yeni sıralanmış tapşırıqları yenidən `.dataList`-ə əlavə edirik
    taskList.innerHTML = ''; // Mövcud siyahını təmizləyirik
    tasks.forEach(task => taskList.appendChild(task)); // Yeni sıralanmış elementləri əlavə edirik
});


// /////////////////////////////////////////




        //     let inputFields = document.querySelectorAll(".inputData");
        //     let storedData = JSON.parse(localStorage.getItem("dataList")) || [];

        //     inputFields.forEach(input => {
        //         if (input.value) {
        //             storedData.push(input.value);
        //             input.value = ""; // Giriş sahəsini təmizlə
        //         }
        //     });

        //     localStorage.setItem("dataList", JSON.stringify(storedData));
        //     alert("Məlumat yadda saxlanıldı!");
        // })

        // // Göstər funksiyası
        // function goster() {
        //     let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
        //     let dataListElement = document.getElementById("dataList");
        //     dataListElement.innerHTML = ""; // Siyahını təmizlə

        //     if (dataList.length > 0) {
        //         dataList.forEach(function(data) {
        //             let listItem = document.createElement("li");
        //             listItem.textContent = data;
        //             dataListElement.appendChild(listItem);
        //         });
        //     } else {
        //         alert("Heç bir məlumat tapılmadı.");
        //     }
        // }

        // // Yeni input əlavə edən funksiya
        // function yeniInputElaveEt() {
        //     const inputContainer = document.getElementById("inputContainer");
        //     let yeniInput = document.createElement("input");
        //     yeniInput.type = "text";
        //     yeniInput.className = "inputData";
        //     yeniInput.placeholder = "Məlumatı daxil edin";
        //     inputContainer.appendChild(yeniInput);
        // }

        // // Səhifə yüklənəndə yadda saxlanılan məlumatları göstər
        // document.addEventListener("DOMContentLoaded", goster);

        // // Event listener-lərin təyin edilməsi
        // saveButton.addEventListener("click", yeniInputElaveEt);
        // showButton.addEventListener("click", goster);


/* 
 // Elementləri seçmək
 
        // Elementləri seçmək
        const saveButton = document.getElementById("saveButton");
        const showButton = document.getElementById("showButton");

        // Yadda saxla funksiyası
        function yaddaSaxla() {
            let data = document.getElementById("inputData").value;
            if (data) {
                let storedData = JSON.parse(localStorage.getItem("dataList")) || [];
                storedData.push(data);
                localStorage.setItem("dataList", JSON.stringify(storedData));
                document.getElementById("inputData").value = ""; // Girişi təmizlə
                alert("Məlumat yadda saxlanıldı!");
            } else {
                alert("Zəhmət olmasa məlumatı daxil edin.");
            }
        }

        // Göstər funksiyası
        function goster() {
            let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
            let dataListElement = document.getElementById("dataList");
            dataListElement.innerHTML = ""; // Siyahını təmizlə

            if (dataList.length > 0) {
                dataList.forEach(function(data) {
                    let listItem = document.createElement("li");
                    listItem.textContent = data;
                    dataListElement.appendChild(listItem);
                });
            } else {
                alert("Heç bir məlumat tapılmadı.");
            }
        }

        // Səhifə yüklənəndə yadda saxlanılan məlumatları göstər
        document.addEventListener("DOMContentLoaded", goster);

        // Event listener-lərin təyin edilməsi
        saveButton.addEventListener("click", yaddaSaxla);
        showButton.addEventListener("click", goster);
    */