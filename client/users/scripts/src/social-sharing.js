///**
// * Main script created to manage the {SocialSharing} Component
// * @author Harrisson Restrepo
// * @version 1.0
// */
//var SocialSharing = (function(_this, $) {
//  "use strict";
//
//  var _config = {
//    elem: '',
//    sharingURL: 'http://www.saulemendez.com/estilosaul',
//    sharingDesc: 'Moda y Gastronomia',
//    sharingMedia: 'http://www.saulemendez.com/dam/saulemendez-assets/plantilla-inicio/logos-iconos-pagina-inicio/logotipo-principal-saulemendez-201x108.png'
//  };
//  var _TWITTER_SHARING_URL,
//    _GOOGLE_SHARING_URL,
//    _FACEBOOK_SHARING_URL,
//    _PINTEREST_SHARING_URL,
//    _BUFFER_SHARING_URL,
//    _EMAIL_SHARING_URL;
//  var _sharingHref, _facebookGraph = 'http://graph.facebook.com/',
//    _pinterestAPI = 'http://api.pinterest.com/v1/urls/count.json?&url=',
//    _googleAPI = 'https://clients6.google.com/rpc';
//
//  /**
//   * Initializes the main methods of the component.
//   * @param {Object} _options - The custom options for the component
//   * @returns {Function}
//   */
//  _this.init = function(_options) {
//    for (var prop in _options) {
//      if (_options.hasOwnProperty(prop)) {
//        _config[prop] = _options[prop];
//      }
//    }
//    _TWITTER_SHARING_URL = 'http://twitter.com/share?url=' + _config.sharingURL + '&amp;text=' + _config.sharingDesc;
//    _GOOGLE_SHARING_URL = 'https://plus.google.com/share?url=' + _config.sharingURL;
//    _FACEBOOK_SHARING_URL = 'http://www.facebook.com/sharer.php?u=' + _config.sharingURL;
//    _PINTEREST_SHARING_URL = 'http://pinterest.com/pin/create/bookmarklet/?is_video=false&amp;url=' + _config.sharingURL + '&amp;media=' + _config.sharingMedia + '&amp;description=' + _config.sharingDesc;
//    _BUFFER_SHARING_URL = 'https://bufferapp.com/add?url=' + _config.sharingURL + '&amp;text=' + _config.sharingDesc;
//    _EMAIL_SHARING_URL = 'mailto:?subject=' + _config.sharingDesc + '&amp;body=%20' + _config.sharingURL;
//    _this.openSharingWindow();
//    _this.getFacebookCounter();
//    _this.getPinterestCounter();
//    _this.getGoogleCounter();
//  };
//
//  /**
//   * Open windows with sharing social page
//   */
//  _this.openSharingWindow = function() {
//
//    $('body').on('click', _config.elem.find('a').selector, function(_e) {
//      // don't go the the href yet
//      _e.preventDefault();
//
//      switch ($(this).data('site')) {
//        case 'twitter':
//          _sharingHref = _TWITTER_SHARING_URL;
//          break;
//        case 'google':
//          _sharingHref = _GOOGLE_SHARING_URL;
//          break;
//        case 'facebook':
//          _sharingHref = _FACEBOOK_SHARING_URL;
//          break;
//        case 'pinterest-featured':
//          _sharingHref = _PINTEREST_SHARING_URL;
//          break;
//        case 'buffer':
//          _sharingHref = _BUFFER_SHARING_URL;
//          break;
//        case 'email':
//          _sharingHref = _EMAIL_SHARING_URL;
//          break;
//        default:
//          _sharingHref = '#';
//          break;
//      };
//
//      // these share options don't need to have a popup
//      if ($(this).data('site') == 'email' || $(this).data('site') == 'print' || $(this).data('site') == 'pinterest') {
//        // just redirect
//        window.location.href = _sharingHref;
//      } else {
//        // prepare popup window
//        var width = 575,
//          height = 520,
//          left = ($(window).width() - width) / 2,
//          top = ($(window).height() - height) / 2,
//          opts = 'status=1' +
//            ',width=' + width +
//            ',height=' + height +
//            ',top=' + top +
//            ',left=' + left;
//        // open the share url in a smaller window
//        window.open(_sharingHref, 'share', opts);
//      }
//
//    });
//  };
//
//  /**
//   * Get the Facebook counter updated
//   */
//  _this.getFacebookCounter = function() {
//    $.get(_facebookGraph + _config.sharingURL, function(data) {
//      $(_config.elem.selector).find('.facebook_counter').html(data.shares);
//    });
//  };
//
//  /**
//   * Get the Pinterest counter updated
//   */
//  _this.getPinterestCounter = function() {
//    $.ajax({
//      url: _pinterestAPI + _config.sharingURL,
//      dataType: 'html'
//    }).done(function(res){
//      var resObj = $.parseJSON(res.toString().replace(/receiveCount|[(]|[)]/g, ''));
//      $(_config.elem.selector).find('.pinterest_counter').html(resObj.count);
//    });
//  };
//
//  /**
//   * Get the Google counter updated
//   */
//  _this.getGoogleCounter = function() {
//    $.ajax({
//      type: 'POST',
//      url: _googleAPI,
//      processData: true,
//      contentType: 'application/json',
//      data: JSON.stringify({
//        'method':'pos.plusones.get',
//        'id': _config.sharingURL,
//        'params':{
//          'nolog':true,
//          'id': _config.sharingURL,
//          'source':'widget',
//          'userId':'@viewer',
//          'groupId':'@self'
//        },
//        'jsonrpc':'2.0',
//        'key':'p',
//        'apiVersion':'v1'
//      })
//    }).done(function(res){
//      $(_config.elem.selector).find('.google_counter').html(res.result.metadata.globalCounts.count);
//    });
//  };
//
//  /**
//   * Public methods and properties are inside return
//   * @public
//   */
//  return {
//    init: _this.init
//  };
//
//}(SocialSharing || {}, jQuery));
//
//$(function() {
//  var socialSharingEl = $('.ssba-wrap');
//  SocialSharing.init({
//    elem: socialSharingEl,
//    sharingURL: socialSharingEl.data('url'),
//    sharingDesc: socialSharingEl.data('desc'),
//    sharingMedia: socialSharingEl.data('media')
//  });
//});