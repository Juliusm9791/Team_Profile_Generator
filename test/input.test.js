const Manager = require('../utils/manager');
const Enginner = require('../utils/engineer');
const Intern = require('../utils/intern');


describe("Employe Role", () => {
    describe("Should the rigt employee role", () => {
        it("Have to be 'Manager'", () => {

            const rigtRole = "Manager";
            const result = new Manager();
            result.getRoleMan(rigtRole);
            expect(result.role).toEqual("Manager");
        });
    });
        it("Have to be 'Enginner'", () => {

            const rigtRole = "Engineer";
            const result = new Enginner();
            result.getRoleEng(rigtRole);
            expect(result.role).toEqual("Engineer");
        });
        it("Have to be 'Intern'", () => {

            const rigtRole = "Intern";
            const result = new Intern();
            result.getRoleInt(rigtRole);
            expect(result.role).toEqual("Intern");
        });
        it("If it is not 'Manager'", () => {

            const falseRole = "Engineer";
            const result = new Manager();
            result.getRoleMan(falseRole);
            expect(result.role).toEqual("");
        });
        it("If it is not 'Intern'", () => {

            const falseRole = "Engineer";
            const result = new Intern();
            result.getRoleInt(falseRole);
            expect(result.role).toEqual("");
        });
        it("If it is not a 'Enginner'", () => {

            const falseRole = "Manager";
            const result = new Enginner();
            result.getRoleEng(falseRole);
            expect(result.role).toEqual("");
        });
  

});

