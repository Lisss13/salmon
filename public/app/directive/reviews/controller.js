class Controller {
    constructor($scope, $timeout) {
        this.scope = $scope; this.timeout = $timeout;
        this.title = 'Почему сотрудничать с Salmon.su выгодно:';
        this.myClass = "";

        this.text = `
        <blockquote>
                <p>
                    Сотрудничая с нами, вы приобретаете всегда свежую рыбу, выращенную в экологически чистых
                    водах, широкий ассортимент продукции и оперативную доставку точно в срок.
                </p>
                <cite>Денис Войтенко</cite>
            </blockquote>
        `;

        this.db = {
            1: "<b>Наша продукция — это рыба и филе разных видов обработки. Это позволяет обеспечить потребности для приготовления самых разнообразных блюд азиатской и европейской кухонь</b>",
            2: "<b>Постоянный и жесткий контроль качества товаров</b>",
            3: "<b>Сотрудничество с крупными сетевыми ритейлерами</b>",
            4: "<b>Наши сотрудники — это компетентные специалисты, знающие толк в рынке охлажденной и замороженной рыбы</b>",
            5: "<b>Наша компания самостоятельно транспортирует охлажденную рыбу, что помогает ускорить доставку</b>",
            6: "<b>Мы не останавливаемся в своем развитие и постоянно расширяем рынок сбыта.</b>"
        };

    }
    guidance(namber) {
        this.text = this.db[namber];
        this.myClass = 'animated bounceIn';
        this.timeout(() => { this.myClass = ''; }, 700);
    }

}

Controller.$inject = ['$scope', '$timeout', '$document'];

export {Controller}