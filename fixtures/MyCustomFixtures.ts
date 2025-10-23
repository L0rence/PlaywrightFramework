import{test as baseTest}from'@playwright/test';

/* type MyCustomFixture={
  fixture1:any;
};

export const test = baseTest.extend<MyCustomFixture>({
  fixture1: async({},use)=>{
    const fixture1 ="I am fixture 1";
    console.log("before part of fixture1");
    await use(fixture1);
    console.log("after part of fixture1");

  }
  });
 */