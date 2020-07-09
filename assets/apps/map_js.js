ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.977756631169136,30.31474559391783],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([59.977756631169136,30.31474559391783], {
            hintContent: 'ТРЦ'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/sprite/map_placemark.svg',
            iconImageSize: [47, 68],
            iconImageOffset: [-17, -70]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
