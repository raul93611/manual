$(document).ready(function(){
  $('#htmlContent, #cssContent, #jqueryContent').hide();
  $('#htmlButton').click(function(){
    $('#htmlContent').slideToggle(1500);
  });
  $('#cssButton').click(function(){
    $('#cssContent').slideToggle(1500);
  });
  $('#jqueryButton').click(function(){
    $('#jqueryContent').slideToggle(1500);
  });
});
