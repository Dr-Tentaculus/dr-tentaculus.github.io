$(document).ready(function(){

  /*
   * get hash 
   */
  function getHash(){
    $('html, body').animate({scrollTop:0}, 'fast');
    var sHash = window.location.hash.slice(1); // /archive#q=hashtag
    if(sHash && !/[^\w\d\/_=-]/.test(sHash)) {
      var sTags = sHash.match(/q=([\w\d]+)/);
      if(sTags && sTags[1]) {
        filterLists(sTags[1]);
        showClerFilter(sTags[1]);
      } else {
        $('html, body').animate({
          scrollTop: $("#"+sHash).offset().top
        }, 200);
      }
    } else {
      removeHash();
      hideClearFilter();
    }     
  }
  
  function removeHash() { 
    try{
      history.pushState("", document.title, window.location.pathname + window.location.search);
    } catch(err)
      {console.dir(err);}
    return false;
  }
  function showClerFilter(sTag){
    $("h1, h2").each(function(){
      if($(this).find("a.clearFilter").length < 1) {
        $(this).append("<a href='/archive' class='clearFilter'>Очистить фильтр</a>")
      } else {
        $(this).find("a.clearFilter").show();
      }
			$(this).find("a.clearFilter").text("Убрать фильтр '"+sTag+"'");
    });
  }
  function hideClearFilter(){
    $("a.clearFilter").hide();
  }
  
  function filterLists(sTag){
    if(sTag==''){
      $("#content li").show();
      return false;
    }
    $("ul.tagable li").each(function(li){
      var aTags = [];
      $(this).find('.taglist a').each(function(el){aTags.push($(this).text())});
      $(this).hide();
      if(aTags.indexOf(sTag)>-1) {
        $(this).show();
      }
    });
  }
   
  // hide article til date
  function showIfDate() {
    const sDt= new Date();
    const sDate = sDt.getFullYear() +"."+ sDt.getMonth() +"."+ sDt.getDate();
    $(".ephasizedPage li").each(function(){
      if($(this).attr("data-date")){
        const aDate = $(this).attr("data-date").split(".");
        const sDay = aDate[2];
        const sMonth = aDate[1]-1;
        const sYear = aDate[0];
        dateString = new Date(sYear, sMonth, sDay);
        
        if(dateString.getTime() > sDt.getTime()) {
          $(this).addClass("hidden");
        } else {
          $(this).removeClass("hidden");
        }        
      }
        
      
    });
  }
   
  $(".clearFilter").live('click', function(){
    removeHash();
    filterLists("");
    hideClearFilter();
    return false;
  });
  $(".tag").live('click', function(){
    var sURL = window.location.href; // "https://tentaculus.ru/archive/#q=DnD
    var sHash =  /#([\w\d_=,&-]+)/.exec($(this).attr('href'))[1];
    if(!/\/archive\/[\w\d_]+/.testsURL) {
      window.location.hash = sHash;
      return false;
    }
  });
  $(".section_link").live('click', function(){
    var sURL = window.location.href; // "https://tentaculus.ru/archive/#q=DnD
    var sHash =  /#([\w\d_=,&-]+)/.exec($(this).attr('href'))[1];
    if(!/\/archive\/[\w\d_]+/.testsURL) {
      window.location.hash = sHash;
      return false;
    }
  });
  
  window.onhashchange = getHash;
  getHash();
  
  showIfDate();
});
