const company = {
  id: 101,
  name: "TechNova Solutions",
  founded: 2018,
  isHiring: true,

  ceo: {
    name: "Amit Sharma",
    age: 40,
    email: "amit@technova.com",
    phone: "9876543210"
  },

  address: {
    office: {
      building: "Sky Tower",
      floor: 12,
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: 411001
    }
  },

  departments: [
    {
      id: 1,
      name: "Frontend",
      head: "Rahul",
      employees: [
        {
          id: 101,
          name: "Omkar",
          role: "Frontend Developer",
          salary: 50000,
          skills: ["HTML", "CSS", "JavaScript", "React"],
          projects: [
            {
              name: "E-Commerce",
              status: "Completed"
            },
            {
              name: "Portfolio",
              status: "In Progress"
            }
          ]
        },
        {
          id: 102,
          name: "Neha",
          role: "UI Developer",
          salary: 48000,
          skills: ["HTML", "CSS", "Bootstrap"]
        }
      ]
    },

    {
      id: 2,
      name: "Backend",
      head: "Priya",
      employees: [
        {
          id: 201,
          name: "Rohan",
          role: "Node.js Developer",
          salary: 70000,
          skills: ["Node.js", "Express", "MongoDB"]
        }
      ]
    }
  ],

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ],

  socialMedia: {
    linkedin: "https://linkedin.com/company/technova",
    github: "https://github.com/technova",
    website: "https://technova.com"
  },

  benefits: {
    workFromHome: true,
    healthInsurance: true,
    freeSnacks: true,
    paidLeaves: 20
  },

  getCompanyInfo() {
    return `${this.name} was founded in ${this.founded}`;
  }
};


// 1. Print the company name.

console.log(company.name);


// 2. Print the CEO email.


console.log(company.ceo.email);

// 3. Print the office city.


console.log(company.address.office.city);

// 4. Print the second technology.

console.log(company.departments[0].employees[0].skills[1]);

// 5. Print the first department name.

console.log(company.departments[0].name);


// 6. Print the head of the Backend department

console.log(company.departments[1].head);

// 7. Print Omkar's salary

console.log(company.departments[0].employees[0].salary);


// 9. Print the name of Omkar's first project

console.log(company.departments[0].employees[0].projects[0].name);



// 10. Print all department names

company.departments.forEach((dept)=>{
    console.log(dept.name);
    
});


// 11. Print all employee names

 company.departments.forEach((department) => {
  department.employees.forEach((employee) => {
    console.log(employee.name);
  });
});






