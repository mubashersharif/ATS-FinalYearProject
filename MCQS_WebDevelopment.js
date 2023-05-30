$(document).ready(function() {
    $('#MCQS_MSoffice').submit(function(e) {
      e.preventDefault();
      var ObtainedMarks = 0;
   
      // Answer Key Using Array
      var answers = ['d','d','a','b','b','a','c','d','b','b']; // Correct answers for each question
   
      // Question 1
      var q1Answer = $('input[name=question1]:checked').val();
      if (q1Answer === answers[0]) {
        ObtainedMarks++;
      }
      
      // Question 2
      var q2Answer = $('input[name=question2]:checked').val();
      if (q2Answer === answers[1]) {
        ObtainedMarks++;
      }
      
      // Question 3
      var q3Answer = $('input[name=question3]:checked').val();
      if (q3Answer === answers[2]) {
        ObtainedMarks++;
      }
      
      // Question 4
      var q4Answer = $('input[name=question4]:checked').val();
      if (q4Answer === answers[3]) {
        ObtainedMarks++;
      }
      
      // Question 5
      var q5Answer = $('input[name=question5]:checked').val();
      if (q5Answer === answers[4]) {
        ObtainedMarks++;
      }
      
      // Question 6
      var q6Answer = $('input[name=question6]:checked').val();
      if (q6Answer === answers[5]) {
        ObtainedMarks++;
      }
      
      // Question 7
      var q7Answer = $('input[name=question7]:checked').val();
      if (q7Answer === answers[6]) {
        ObtainedMarks++;
      }
      
      // Question 8
      var q8Answer = $('input[name=question8]:checked').val();
      if (q8Answer === answers[7]) {
        ObtainedMarks++;
      }
      
      // Question 9
      var q9Answer = $('input[name=question9]:checked').val();
      if (q9Answer === answers[8]) {
        ObtainedMarks++;
      }
      
      // Question 10
      var q10Answer = $('input[name=question10]:checked').val();
      if (q10Answer === answers[9]) {
        ObtainedMarks++;
      }
   
      // Add more if statements for each question
   
      // Display the score
      var TotalMarks = 10;
      alert("Test Submitted Successfully!!! Click OK To Check Your Result");
         alert("Your Marks are " + ObtainedMarks + " Out of " + TotalMarks);
         var GoToHomePage = './Notifications.html';
        window.location.href = GoToHomePage;
     //  $('#result').html('<h2 class="text-danger text-center"> Your Marks are ' + ObtainedMarks + ' out of ' + TotalMarks +' </h2>');
    });
   });
   
   