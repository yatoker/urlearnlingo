import { substractDays, addDays, currentDate } from "../app/core/Helpers/date-helper";
describe("Helper functions testing", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("Add 5 days to the given data", function() {

    // Arrange
    const date = new Date(2030, 4, 15);

    // Act
    const addedDay = addDays(date, 5);

    // Assert
    expect(addedDay).toBe("Mon May 20 2030");

  });

  it("Substract 20 days from the given date", function() {

    // Arrange
    const date = new Date(2028, 2, 15);

    // Act
    const addedDay = substractDays(date, 20);

    // Assert
    expect(addedDay).toBe("Thu Feb 24 2028");

  });
});
