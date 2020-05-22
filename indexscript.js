$(document).ready(function() {
   $('.pancake').hide();
   $('.spaghetti').hide();
   $('.spicypork').hide();
   $('.pasta').hide();
   $('.chickenpotato').hide();
   $('.potatofrittata').hide();
   $('.pizzatomato').hide();
   $('.vanillamilkshake').hide();
   $('.sausage_mushroom_pasta').hide();
   $('.sanchoybow').hide();
    $('.recipe-button').hide();
   $('.recipe_list').hide();
});

$(document).ready(function(){
  $("#flour,#sugar,#egg,#milk,#oil").change(function() {
    if (this.checked){
  $(".recipe-button").click(function(){
      $('.pancake').show();
      $('.recipe_list').show();
      $('.home').hide();
    })
  }})});

  $(document).ready(function(){
    $("#butter, #garlic, #oil").change(function() {
      if (this.checked){
    $(".recipe-button").click(function(){
        $('.spaghetti').show();
        $('.recipe_list').show();
        $('.home').hide();
      })
    }})});

    $(document).ready(function(){
      $("#oil").change(function() {
        if (this.checked){
      $(".recipe-button").click(function(){
          $('.spicypork').show();
          $('.recipe_list').show();
          $('.home').hide();
        })
      }})});

      $(document).ready(function(){
        $("#oil,#pasta,#garlic,#tomato").change(function() {
          if (this.checked){
        $(".recipe-button").click(function(){
            $('.pasta').show();
            $('.recipe_list').show();
            $('.home').hide();
          })
        }})});

      $(document).ready(function(){
          $("#oil, #potato, #tomato").change(function() {
            if (this.checked){
          $(".recipe-button").click(function(){
              $('.chickenpotato').show();
              $('.recipe_list').show();
              $('.home').hide();
            })
          }})});

      $(document).ready(function(){
              $("#potato,#egg").change(function() {
                if (this.checked){
              $(".recipe-button").click(function(){
                  $('.potatofrittata').show();
                  $('.recipe_list').show();
                  $('.home').hide();
                })
              }})});
        $(document).ready(function(){
          $("#tomato").change(function() {
            if (this.checked){
              $(".recipe-button").click(function(){
                $('.pizzatomato').show();
                $('.recipe_list').show();
                $('.home').hide();
            })
}})});

$(document).ready(function(){
  $("#milk").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.vanillamilkshake').show();
        $('.recipe_list').show();
        $('.home').hide();
    })
}})});

$(document).ready(function(){
  $("#pasta").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.sausage_mushroom_pasta').show();
        $('.recipe_list').show();
        $('.home').hide();
    })
}})});

$(document).ready(function(){
  $("#oil, #stock, #beans").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.sanchoybow').show();
        $('.recipe_list').show();
        $('.home').hide();
    })
}})});

$(document).ready(function(){
  $("#shallots, #bacon, #lemon, #rice, #cinnamon, #honey").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        alert("No recipes with selected ingredients are available.");
        location.reload();
    })
}})});

$(document).ready(function(){
$(".allrecipe").click(function(){
  $('.pancake').show();
  $('.spaghetti').show();
  $('.spicypork').show();
  $('.pasta').show();
  $('.chickenpotato').show();
  $('.potatofrittata').show();
  $('.pizzatomato').show();
  $('.vanillamilkshake').show();
  $('.sausage_mushroom_pasta').show();
  $('.sanchoybow').show();
  $('.recipe_list').show();
  $('.home').hide();
})});
$(document).ready(function(){
$("#garlic, #shallots, #potato, #tomato, #butter, #egg, #bacon, #lemon, #milk, #rice, #sugar, #oil,#stock,#pasta,#cinnamon,#beans,#honey,#flour ").change(function() {
if (this.checked){
$('.allrecipe').hide();
$('.recipe-button').show();

}})});
