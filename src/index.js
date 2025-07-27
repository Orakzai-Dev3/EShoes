import { console } from "inspector"

const data =[
    {
      id: 1,
      title: 'Frontend Developer',
      category: 'Development',
      company: 'Company 1',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
      salary: 'Rs. 50,500 - Rs. 60,500',
      description: 
        '      **Responsibilities:**\n' +
        '      - Develop and maintain responsive user interfaces.\n' +
        '      - Collaborate with designers and developers to ensure smooth functionality.\n' +
        '      - Debug and optimize performance in applications.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Strong expertise in frontend frameworks like React.\n' +
        '      - Solid understanding of modern development principles and tools.\n' +
        '      - Experience with version control systems like Git.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Competitive salary packages with growth opportunities.\n' +
        '      - Health insurance and flexible work hours.\n' +
        '      - Chance to work on exciting projects with skilled teams.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Send your application and resume to jobs@company1.com.\n' +
        '      - Include a cover letter explaining your suitability for the role.\n' +
        '    '
    },
    {
      id: 2,
      title: 'Backend Developer',
      category: 'IT',
      company: 'Company 2',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django', 'SQL' ],
      salary: 'Rs. 51,000 - Rs. 61,000',
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Build and maintain server-side logic using modern frameworks.\n' +
        '      - Collaborate with designers and developers to ensure smooth functionality.\n' +
        '      - Debug and optimize performance in applications.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Strong expertise in backend technologies like Django.\n' +
        '      - Solid understanding of modern development principles and tools.\n' +
        '      - Experience with version control systems like Git.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Competitive salary packages with growth opportunities.\n' +
        '      - Health insurance and flexible work hours.\n' +
        '      - Chance to work on exciting projects with skilled teams.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Send your application and resume to jobs@company2.com.\n' +
        '      - Include a cover letter explaining your suitability for the role.\n' +
        '    '
    },
    {
      id: 3,
      title: 'Frontend Developer',
      category: 'Development',
      company: 'Company 3',
      location: 'Lahore',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
      salary: 'Rs. 51,500 - Rs. 61,500',
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Develop and maintain responsive user interfaces.\n' +
        '      - Collaborate with designers and developers to ensure smooth functionality.\n' +
        '      - Debug and optimize performance in applications.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Strong expertise in frontend frameworks like React.\n' +
        '      - Solid understanding of modern development principles and tools.\n' +
        '      - Experience with version control systems like Git.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Competitive salary packages with growth opportunities.\n' +
        '      - Health insurance and flexible work hours.\n' +
        '      - Chance to work on exciting projects with skilled teams.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Send your application and resume to jobs@company3.com.\n' +
        '      - Include a cover letter explaining your suitability for the role.\n' +
        '    '
    },
    {
      id: 4,
      title: 'Backend Developer',
      category: 'IT',
      company: 'Company 4',
      location: 'Karachi',
      experienceRequired: '4-6 years',
      skillsRequired: [ 'Python', 'Django', 'SQL' ],
      salary: 'Rs. 52,000 - Rs. 62,000',
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Build and maintain server-side logic using modern frameworks.\n' +
        '      - Collaborate with designers and developers to ensure smooth functionality.\n' +
        '      - Debug and optimize performance in applications.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Strong expertise in backend technologies like Django.\n' +
        '      - Solid understanding of modern development principles and tools.\n' +
        '      - Experience with version control systems like Git.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Competitive salary packages with growth opportunities.\n' +
        '      - Health insurance and flexible work hours.\n' +
        '      - Chance to work on exciting projects with skilled teams.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Send your application and resume to jobs@company4.com.\n' +
        '      - Include a cover letter explaining your suitability for the role.\n' +
        '    '
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      category: 'Development',
      company: 'Company 5',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'JavaScript', 'Node.js', 'React', 'MongoDB' ],
      salary: 'Rs. 60,000 - Rs. 80,000',
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Develop and maintain both frontend and backend components.\n' +
        '      - Ensure seamless integration between client and server systems.\n' +
        '      - Debug and enhance application performance.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Strong expertise in JavaScript, Node.js, and React.\n' +
        '      - Knowledge of database systems like MongoDB.\n' +
        '      - Familiarity with cloud services and deployment strategies.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Attractive salary packages and bonuses.\n' +
        '      - Flexible working hours and remote options.\n' +
        '      - Opportunities for professional growth and certifications.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Submit your portfolio and resume to hr@company5.com.\n' +
        '      - Provide a brief on your previous full-stack development projects.\n' +
        '    '
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      category: 'Design',
      company: 'Company 6',
      location: 'Rawalpindi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Adobe XD', 'Figma', 'Sketch', 'HTML/CSS' ],
      salary: 'Rs. 45,000 - Rs. 65,000',
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Design engaging user interfaces and experiences.\n' +
        '      - Work closely with developers to ensure design feasibility.\n' +
        '      - Conduct user research and testing to refine designs.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Expertise in design tools like Adobe XD, Figma, and Sketch.\n' +
        '      - Understanding of HTML/CSS for design implementation.\n' +
        '      - Strong portfolio showcasing previous UI/UX projects.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Competitive salary with performance bonuses.\n' +
        '      - Health coverage and team-building activities.\n' +
        '      - Opportunity to lead creative design projects.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Email your portfolio and resume to design@company6.com.\n' +
        '      - Include a cover letter detailing your design process and experience.\n' +
        '    '
    },
    {
      id: 7,
      title: 'Project Manager',
      category: 'Management',
      company: 'Company 7',
      location: 'Faisalabad',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'Agile', 'Scrum', 'Leadership', 'JIRA' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
  
      description: '\n' +
        '      **Responsibilities:**\n' +
        '      - Lead project planning, execution, and delivery.\n' +
        '      - Coordinate between cross-functional teams to meet objectives.\n' +
        '      - Ensure projects are completed within scope and budget.\n' +
        '\n' +
        '      **Requirements:**\n' +
        '      - Proven experience in project management methodologies.\n' +
        '      - Expertise in tools like JIRA and Trello.\n' +
        '      - Excellent communication and leadership skills.\n' +
        '\n' +
        '      **Benefits:**\n' +
        '      - Attractive salary and performance incentives.\n' +
        '      - Professional training programs and workshops.\n' +
        '      - Collaborative work environment.\n' +
        '\n' +
        '      **How to Apply:**\n' +
        '      - Share your resume and project portfolio to jobs@company7.com.\n' +
        '      - Highlight your leadership experiences in previous roles.\n' +
        '    '
    },
    {
      id: 8,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 9,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 10,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 11,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 12,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 13,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 14,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 15,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 16,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 17,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 18,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 19,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 20,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 21,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 22,
      title: 'Data Scientist',
      category: 'Finance',
      company: 'CompanyB',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Data Scientist.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Python, Django.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyb.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 23,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 24,
      title: 'Data Scientist',
      category: 'Finance',
      company: 'CompanyB',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Data Scientist.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Python, Django.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyb.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 25,
      title: 'Data Scientist',
      category: 'Finance',
      company: 'CompanyB',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Data Scientist.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Python, Django.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyb.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 26,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 27,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 28,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 29,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 30,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 31,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 32,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 33,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 34,
      title: 'Data Scientist',
      category: 'Finance',
      company: 'CompanyB',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Data Scientist.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Python, Django.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyb.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 35,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 36,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 37,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 38,
      title: 'UX Designer',
      category: 'Education',
      company: 'CompanyD',
      location: 'Rawalpindi',
      experienceRequired: '5-7 years',
      skillsRequired: [ 'C#', '.NET' ],
      salary: 'Rs. 110,000 - Rs. 130,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for UX Designer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in C#, .NET.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyd.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 39,
      title: 'Product Manager',
      category: 'Healthcare',
      company: 'CompanyC',
      location: 'Islamabad',
      experienceRequired: '3-5 years',
      skillsRequired: [ 'Java', 'Spring' ],
      salary: 'Rs. 90,000 - Rs. 110,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Product Manager.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Java, Spring.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyc.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 40,
      title: 'DevOps Engineer',
      category: 'Marketing',
      company: 'CompanyE',
      location: 'Faisalabad',
      experienceRequired: '7-10 years',
      skillsRequired: [ 'SQL', 'NoSQL' ],
      salary: 'Rs. 130,000 - Rs. 150,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for DevOps Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in SQL, NoSQL.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companye.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 41,
      title: 'Software Engineer',
      category: 'IT',
      company: 'CompanyA',
      location: 'Lahore',
      experienceRequired: '1-3 years',
      skillsRequired: [ 'JavaScript', 'React' ],
      salary: 'Rs. 50,000 - Rs. 70,000',
      description: '\n' +
        '        **Responsibilities:**\n' +
        '        - Responsibilities for Software Engineer.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in JavaScript, React.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companya.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    },
    {
      id: 42,
      title: 'Data Scientist',
      category: 'Finance',
      company: 'CompanyB',
      location: 'Karachi',
      experienceRequired: '2-4 years',
      skillsRequired: [ 'Python', 'Django' ],
      salary: 'Rs. 70,000 - Rs. 90,000',
      description: '\n' +
        '        **Responsibilities:**\n' +


        '        - Responsibilities for Data Scientist.\n' +
        '        - Collaborate with team members.\n' +
        '        - Optimize applications for performance.\n' +
        '        - Debug and troubleshoot issues.\n' +
        '\n' +
        '        **Requirements:**\n' +
        '        - Proficient in Python, Django.\n' +
        '        - Strong understanding of relevant principles.\n' +
        '        - Experience with version control systems.\n' +
        '        - Knowledge of REST APIs and integration.\n' +
        '\n' +
        '        **Benefits:**\n' +
        '        - Competitive salary package.\n' +
        '        - Opportunity to work on challenging projects.\n' +
        '        - Health insurance and paid leave.\n' +
        '        - Flexible working hours.\n' +
        '\n' +
        '        **How to Apply:**\n' +
        '        - Send your resume to careers@companyb.com.\n' +
        "        - Include a cover letter explaining why you're a perfect fit for this role.\n" +
        '      '
    }]
    console.log(data.length + ' jobs loaded');
   