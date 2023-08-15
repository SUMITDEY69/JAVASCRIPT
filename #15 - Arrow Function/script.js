const sayHello = () => {
  console.log("Hello");
};
sayHello();

const sentence = (fname, lname, greetings) => {
  console.log(greetings + ",", fname, lname);
};
sentence("Sumit", "Dey", "Good evening");

const resume = {
  fname: "Sumit",
  role: "Web Developer",
  exp: 20,
  show: function () {
    console.log(
      `My name is ${this.fname}\nThe role is ${this.role}\nI have ${this.exp} years of experience`
    );
  },
};
resume.show();
const resume1 = {
  fname1: "Sumit",
  role1: "Web Developer",
  exp1: 20,
  show1: function () {
    const that = this;
    console.log(
      `My name is ${that.fname1}\nThe role is ${that.role1}\nI have ${that.exp1} years of experience`
    );
  },
};
resume1.show1();
const resume2 = {
  fname2: "Sumit",
  role2: "Web Developer",
  exp2: 20,
  show2: function () {
    const that = this;
    setTimeout(()=> {console.log(
      `My name is ${that.fname2}\nThe role is ${that.role2}\nI have ${that.exp2} years of experience`
  )}, 2000)
  },
};
resume2.show2();
