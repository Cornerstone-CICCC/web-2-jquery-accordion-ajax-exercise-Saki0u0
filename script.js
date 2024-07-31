$(function() {
  // your code here

  const accordionHeader = $('.accordion-header')
  const accordionContent =$('.accordion-content')
  const loadTodos = $('.todos')


  accordionHeader.on('click',function(){
    const content = $(this).next('.accordion-content')
    if (content.is(':visible')) {
      content.slideUp();
  } else {
    accordionContent.slideUp(); 
    content.slideDown(); 
  }
  });

  $('.todos button').on('click',function(){
      $.ajax ({
        url:`https://dummyjson.com/todos`,
        type:`GET`,
        success: function(response){
          const todos = response.todos;
          const todoList = $('.todos ul');
          todos.forEach(function(todo) {
            todoList.append('<li>' + todo.todo + '</li>');
        });
        },
        error: function(error) {
          console.error(error);
        }
      })
 })
});
