
document.addEventListener('turbolinks:load', function() {
    document.querySelectorAll('td').forEach(function(td){
      td.addEventListener('mouseover', function(e){
        e.currentTarget.style.backgroundColor = '#eff';
    });
    td.addEventListener('mouseover', function(e) {
      e.currentTarget.style.backgroundColor = '';
    });
  });
});


document.addEventListener('turbolinks:load', function(){
  document.querySelectorAll('.delete').forEach(function(a) {
    a.addEventListener('ajax:success', function() {
      var td = a.parentNode;
      var ur = td.parentNode;
      true.style.display = 'none';
    });
  });
});
