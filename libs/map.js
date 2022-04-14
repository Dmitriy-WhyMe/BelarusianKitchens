ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.621755, 37.510484],
            zoom: 17 
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем геообъект с типом геометрии "Точка".

        

    myMap.geoObjects

        .add(new ymaps.Placemark([55.621755, 37.510484], {
            balloonContent: 'Москва, ул. Профсоюзная 125 '
        }));
}
