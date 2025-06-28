import { before, after, beforeEach, afterEach, it, describe } from "mocha";
import { assert } from "chai";

let counter = 0;

const wait = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 10);
  });

before(async () => {
  await wait();
  console.log("top-level before", ++counter);
});

beforeEach(async () => {
  await wait();
  console.log("top-level beforeEach", ++counter);
});

afterEach(async () => {
  await wait();
  console.log("top-level afterEach", ++counter);
});

after(async () => {
  await wait();
  console.log("top-level after", ++counter);
});

describe("callback hook test", () => {
  before(async () => {
    await wait();
    console.log("main before", ++counter);
  });

  beforeEach(async () => {
    await wait();
    console.log("main beforeEach", ++counter);
  });

  afterEach(async () => {
    await wait();
    console.log("main afterEach", ++counter);
  });

  after(async () => {
    await wait();
    console.log("main after", ++counter);
  });

  it("main test 01", async () => {
    await wait();
    console.log("main test 01 counter = ", counter);
    assert.isTrue(true);
  });

  describe("nested test", () => {
    before(async () => {
      await wait();
      console.log("nested before", ++counter);
    });

    beforeEach(async () => {
      await wait();
      console.log("nested beforeEach", ++counter);
    });

    afterEach(async () => {
      await wait();
      console.log("nested afterEach", ++counter);
    });

    after(async () => {
      await wait();
      console.log("nested after", ++counter);
    });

    it("nested test 01", async () => {
      await wait();
      console.log("nested test 01 counter = ", counter);
      assert.isTrue(true);
    });

    it("nested test 02", async () => {
      await wait();
      console.log("nested test 02 counter = ", counter);
      assert.isTrue(true);
    });
  });

  it("main test 02", async () => {
    await wait();
    console.log("main test 02 counter = ", counter);
    assert.isTrue(true);
  });
});
