// (function($, Drupal, drupalSettings) {
// // Your code...
// // New behavior
//     Drupal.behaviors.myBehave = {
//       //$('selector', context).command();
//     attach: function (context) {
//     console.log('hello');
//     }

//     Drupal.behaviors.externalblanck = {
//         attach: function (context) {
//         $("a[href^='http']").click(function() {

//             $(this).attr('target', '_blank')
//         });
//         }
//     }
// }
// })(jQuery, Drupal, drupalSettings);



(function($, Drupal, drupalSettings) {
    // Your code...
    // New behavior
    Drupal.behaviors.alert = {
      attach: function (context) {
        console.log("hello");
      }
      
    }

    Drupal.behaviors.external_links = {
        attach: function (context, settings) {
        $("a[href^='http']", context).addClass('external-links')
        $("a[href^='http']", context).click(function() {    
            $(this).attr('target', '_blank')
            });  
        }
        
      }

    Drupal.behaviors.plies = {
        attach: function (context) {
            $(".sidebar .block h2", context).click(function(){
                // if($('#search-block-form').is(':visible')){
                //     $("#search-block-form").slideUp();
                // }
                // if($('#search-block-form').is(':hidden')){
                //     $("#search-block-form").slideDown();
                // }
               
               $(this).next().next().slideToggle('slow');
            });
        }
        
      }
        
    Drupal.behaviors.tab = {
    attach: function (context) {
        $( "#tabs" ).tabs();
    }
    }  

})(jQuery, Drupal, drupalSettings);
