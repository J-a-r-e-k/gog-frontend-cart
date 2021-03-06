import gogShop from "./app";

describe("Cart directive", () => {
    let $compile;
    let $rootScope;

    beforeEach(angular.mock.module(gogShop));

    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      }));

      it('replaces element with the appropriate content', () => {
        $rootScope.products = [{
            "id": 1,
            "price": "1",
            "title": "Game"
        },
        {
            "id": 2,
            "price": "2",
            "title": "Game"
        }];
        let element = $compile(`<div cart products="products"><div>`)($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain(`<p class="ng-binding">Game</p>`);
        expect(element.html()).toContain(`<div class="cart-summary__price ng-binding">$3.00</div>`);
      });
});