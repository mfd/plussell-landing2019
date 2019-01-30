class Share {

  constructor(view) {
    this.share();
  }

  share() {
    $('.shareFacebook').on('click',(e) => {
      let url = $(e.currentTarget).attr('href');
      this.picture = null;
      if($('.donation').length) {
        let bg = $('.bannerHead').css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, '');
        this.picture = bg;
      }else{
        this.picture = $('section .media > img').attr('src');
      } 
      let desc = $('section .content > h2.pageTitle').text();
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': url,
            'og:title': 'Pastel Fluo',
            'og:description': desc,
            'og:image': this.picture
          }
        })
      }, (response) => {});
      e.preventDefault();
    });
    $('.shareTwitter').on('click',(e) => {
      let width  = 575,
        height = 400,
        left   = ($(window).width() - width) / 2,
        top    = ($(window).height() - height) / 2,
        url    = $(e.currentTarget).attr('href'),
        opts   = 'status=1' +
                         ',width=' + width +
                         ',height=' + height +
                         ',top=' + top +
                         ',left=' + left;

      window.open(url, 'twitter', opts);
      return false;
    });
    $('.sharePinterest').on('click',(e) => {
      let width  = 600,
        height = 800,
        left   = ($(window).width() - width) / 2,
        top    = ($(window).height() - height) / 2,
        url    = $(e.currentTarget).attr('href'),
        opts   = 'status=1' +
                         ',width=' + width +
                         ',height=' + height +
                         ',top=' + top +
                         ',left=' + left;

      window.open(url, 'pinterest', opts);
      return false;
    });
  }

}

export default Share;
