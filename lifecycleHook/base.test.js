let counter = 0;

const wait = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 10);
  });

beforeAll(async () => {
  await wait();
  console.log("top-level beforeAll", ++counter);
});

beforeEach(async () => {
  await wait();
  console.log("top-level beforeEach", ++counter);
});

afterEach(async () => {
  await wait();
  console.log("top-level afterEach", ++counter);
});

afterAll(async () => {
  await wait();
  console.log("top-level afterAll", ++counter);
});

describe("callback hook test", () => {
  beforeAll(async () => {
    await wait();
    console.log("main beforeAll", ++counter);
  });

  beforeEach(async () => {
    await wait();
    console.log("main beforeEach", ++counter);
  });

  afterEach(async () => {
    await wait();
    console.log("main afterEach", ++counter);
  });

  afterAll(async () => {
    await wait();
    console.log("main afterAll", ++counter);
  });

  it("main test 01", async () => {
    await wait();
    console.log("main test 01 counter = ", counter);
    expect(true).toBe(true);
  });

  describe("nested test", () => {
    beforeAll(async () => {
      await wait();
      console.log("nested beforeAll", ++counter);
    });

    beforeEach(async () => {
      await wait();
      console.log("nested beforeEach", ++counter);
    });

    afterEach(async () => {
      await wait();
      console.log("nested afterEach", ++counter);
    });

    afterAll(async () => {
      await wait();
      console.log("nested afterAll", ++counter);
    });

    it("nested test 01", async () => {
      await wait();
      console.log("nested test 01 counter = ", counter);
      expect(true).toBe(true);
    });

    it("nested test 02", async () => {
      await wait();
      console.log("nested test 02 counter = ", counter);
      expect(true).toBe(true);
    });
  });

  it("main test 02", async () => {
    await wait();
    console.log("main test 02 counter = ", counter);
    expect(true).toBe(true);
  });
});
