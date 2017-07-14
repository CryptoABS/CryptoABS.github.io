(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

try {
  ga('create', 'UA-101869014-1', 'auto');
  ga('send', 'pageview');
} catch (e) { }

$('#timeline').verticalTimeline({
  // arrows: false,
  animate: 'fade'
});

/**
 * use Clipboard of contractAddress
 */

var contractAddress = '0xfd95392e1ce28a6debff90feb0a28a1392df738b';
var clipboard = new Clipboard('#contractAddressCopy', {
    text: function() {
        return contractAddress;
    }
});
