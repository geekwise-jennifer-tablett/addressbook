/**
click function:minus_container_
on click will delete selected main_label_container_
*/


var click_minus = function(){
      get_element('minus_container_'+i).addEventListener('click', function(){
            get_element('main_label_container_'+i).style.display = 'none';
        });
};
 click_minus();     
            