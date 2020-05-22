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
   $('.card_available_items1').hide();
   $('.card_available_items2').hide();
   $('.card_available_items3').hide();
   $('.card_available_items4').hide();
   $('.card_available_items5').hide();
   $('.card_available_items6').hide();
   $('.card_available_items7').hide();
   $('.card_available_items8').hide();
   $('.card_available_items9').hide();
   $('.card_available_items10').hide();
});

$(document).ready(function(){
  $("#flour,#sugar,#egg,#milk,#oil").change(function() {
    if (this.checked){
  $(".recipe-button").click(function(){
      $('.pancake').show();
      $('.recipe_list').show();
      $('.card_available_items1').show();
      $('.home').hide();
    })
  }})});

  $(document).ready(function(){
    $("#garlic, #butter, #oil").change(function() {
      if (this.checked){
    $(".recipe-button").click(function(){
        $('.spaghetti').show();
        $('.recipe_list').show();
        $('.card_available_items2').show();
        $('.home').hide();
      })
    }})});

    $(document).ready(function(){
      $("#oil").change(function() {
        if (this.checked){
      $(".recipe-button").click(function(){
          $('.spicypork').show();
          $('.recipe_list').show();
          $('.card_available_items3').show();
          $('.home').hide();
        })
      }})});

      $(document).ready(function(){
        $("#oil,#pasta, #garlic, #tomato").change(function() {
          if (this.checked){
        $(".recipe-button").click(function(){
            $('.pasta').show();
            $('.recipe_list').show();
            $('.card_available_items4').show();
            $('.home').hide();
          })
        }})});

      $(document).ready(function(){
          $("#oil, #potato, #tomato").change(function() {
            if (this.checked){
          $(".recipe-button").click(function(){
              $('.chickenpotato').show();
              $('.recipe_list').show();
              $('.card_available_items5').show();
              $('.home').hide();
            })
          }})});

      $(document).ready(function(){
              $("#potato,#egg").change(function() {
                if (this.checked){
              $(".recipe-button").click(function(){
                  $('.potatofrittata').show();
                  $('.recipe_list').show();
                  $('.card_available_items6').show();
                  $('.home').hide();
                })
              }})});
        $(document).ready(function(){
          $("#tomato").change(function() {
            if (this.checked){
              $(".recipe-button").click(function(){
                $('.pizzatomato').show();
                $('.recipe_list').show();
                $('.card_available_items7').show();
                $('.home').hide();
            })
}})});

$(document).ready(function(){
  $("#milk").change(function() {
      $(".recipe-button").click(function(){
        $('.vanillamilkshake').show();
        $('.recipe_list').show();
        $('.card_available_items8').show();
        $('.home').hide();
    })
})});

$(document).ready(function(){
  $("#pasta").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.sausage_mushroom_pasta').show();
        $('.recipe_list').show();
        $('.card_available_items9').show();
        $('.home').hide();
    })
}})});

$(document).ready(function(){
  $("#oil, #stock, #beans").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.sanchoybow').show();
        $('.recipe_list').show();
        $('.card_available_items10').show();
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
  $('.card_available_items1').show();
  $('.card_available_items2').show();
  $('.card_available_items3').show();
  $('.card_available_items4').show();
  $('.card_available_items5').show();
  $('.card_available_items6').show();
  $('.card_available_items7').show();
  $('.card_available_items8').show();
  $('.card_available_items9').show();
  $('.card_available_items10').show();
  $('.home').hide();
})});
$(document).ready(function(){
$("#garlic, #shallots, #potato, #tomato, #butter, #egg, #bacon, #lemon, #milk, #rice, #sugar, #oil,#stock,#pasta,#cinnamon,#beans,#honey,#flour ").change(function() {
if (this.checked){
$('.allrecipe').hide();
$('.recipe-button').show();

}})});
