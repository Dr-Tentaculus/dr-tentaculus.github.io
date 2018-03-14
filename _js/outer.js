$(window).load(function(){
	// yandex
	 (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter42911239 = new Ya.Metrika({
                    id:42911239,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { document.body.appendChild(s); /*n.parentNode.insertBefore(s, n);*/ };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
	
	// VK init
	VK.init({apiId: 6197190, onlyWidgets: true});
	
	// VK chat
	VK.Widgets.CommunityMessages("vk_community_messages", 67030284, {disableExpandChatSound: "1",disableButtonTooltip: "1"});
	
	// VK groups
	VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, height: "400"}, 67030284);
	
	let pageLink = pageID = window.location.href;
	let pageTitle = document.title;
	let pageImg = window.location.origin + "/" + $('meta[property="og:image"]').eq(0).attr('content')
	// VK likes
	VK.Widgets.Like("vk_like", {type: "full", pageUrl: pageLink, pageTitle: pageTitle, pageImage: pageImg},pageID);
	
	// VK comments
	VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*", pageUrl: pageLink}, pageID);
	
	// google
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;document.body.appendChild(a); /*m.parentNode.insertBefore(a,m)*/
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-94082824-1', 'auto');
  ga('send', 'pageview');
  
  
}); 