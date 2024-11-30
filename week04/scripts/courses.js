
// // Object Literal "aCourse"
// const aCourse = {
//     code: "CSE121b",
//     name: "Javascript Language",
//     sections: [
//         {
//             sectionNum: 1,
//             roomNum: 'STC 353',
//             enrolled: 26,
//             days: 'TTh',
//             instructor: 'Bro T'
//         },
//         {
//             sectionNum: 2,
//             roomNum: 'STC 347',
//             enrolled: 28,
//             days: 'TTh',
//             instructor: 'Sis A'},
//     ],
//     enrollStudent: function(sectionNum){
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >=0) {
//             this.sections[sectionIndex].enrolled++;
//             renderSections(this.sections);
//         }

//     },
//     dropStudent: function(sectionNum){
//     const sectionIndex = this.sections.findIndex(
//         (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >=0){
//         this.sections[sectionIndex].enrolled--;
//         renderSections(this.sections);
//     }
// }
// };



// // functions to manipulate the DOM
// function courseInfo(course){
//     const courseName = document.querySelector('#courseName');
//     const courseCode = document.querySelector('#courseCode');

//     courseName.textContent = course.name;
//     courseCode.textContent = course.code;
// }


// function renderSections(sections){

//     // map functions apply what's in the parenthesis to what preceeds the map
//     // so here ^ map applies the sectionTemplate to every sections array
//     // so that each section gets built as a table
//     const html = sections.map(
//         (section) => `<tr>
//     <td>${section.sectionNum}</td>
//     <td>${section.roomNum}</td>
//     <td>${section.enrolled}</td>
//     <td>${section.days}</td>
//     <td>${section.instructor}</td>`
//     );

//     // The Join functions converts the array of html strings into a single 
//     // concatenated string. The empty string "" ensures no separator is
//     // added between sections
//     document.querySelector("#sections").innerHTML = html.join("");
    
// }

// document.querySelector("#enrollStudent").addEventListener('click', function (){
//     const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
//     aCourse.enrollStudent(sectionNum);
// });

// document.querySelector("#dropStudent").addEventListener('click', function (){
//     const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
//     aCourse.enrollStudent(sectionNum);
// });


// courseInfo(aCourse);
// buildSections(aCourse.sections);



// THIS CODE DOESN'T WORK ^^^^
//  FIND OUT WHY







// THIS CODE WORKS


const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    enrollStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
      }
    },
    dropStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
    },
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);





