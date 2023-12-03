// autotest for method {{host}}/api/planets/7/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});

pm.test("Response terrain of Endor is forests, mountains, lakes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.terrain).to.eql("forests, mountains, lakes");
});