const buttonElement = document.querySelector('.button');
const blockElement = document.querySelector('.block');

buttonElement.addEventListener ('click', function (e) {
        blockElement.classList.toggle('visible');
        buttonElement.textContent = 'Закрыть';
        buttonElement.classList.toggle();
        if (buttonElement.classList.contains('visible')) {
                buttonElement.classList.remove('visible');
        //        тут меняем текст кнопки на одно значение
             } else {
                buttonElement.textContent = 'Войти';
        buttonElement.classList.toggle();
                // тут добавляем класс
                // и меняем значение на другое 
             }
        });

        