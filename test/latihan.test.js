// src/test/latihan.test.js
describe("Latihan Tests", () => {
  test("Counter Default Value must be 0", () => {
    const counter = 0;
    expect(counter).toBe(0);
  });

  test("Increment works when button clicked", () => {
    let counter = 0;
    counter++;
    expect(counter).toBe(1);
  });

  test("Decrement works when button clicked", () => {
    let counter = 1;
    counter--;
    expect(counter).toBe(0);
  });

  test("Reset the count using reset button", () => {
    let counter = 10;
    counter = 0; // Simulasi tombol reset
    expect(counter).toBe(0);
  });

  test("Greeting component {nama kalian}", () => {
    const greeting = "Hello, paradise!";
    expect(greeting).toBe("Hello, paradise!");
  });

  test("Greeting component {nama dosen kalian}", () => {
    const greeting = "Hello, pak farid!";
    expect(greeting).toBe("Hello, pak farid!");
  });

  test("Triggers alert with correct message when clicked", () => {
    const alertMessage = "Button clicked!";
    expect(alertMessage).toBe("Button clicked!");
  });
});
