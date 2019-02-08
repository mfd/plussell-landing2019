export default class LiferayUI {
  constructor() {
    this.modals = {};
    this.dom = {
      modal: '#loginform',
      btn: '.btn-login',
      form: '#loginform .sign-in-form'
    };
    this.init();
  }
  init() {
    console.log('init Liferay Modals');
    // init SignIn
    // AUI().ready('liferay-sign-in-modal',function(A) {
    //   var signIn = A.one('#sign-in');
    //   if (signIn && signIn.getData('redirect') !== 'true') {
    //     signIn.plug(Liferay.SignInModal);
    //   }
    // });
    let $modal = $(this.dom.modal);
    let btn = this.dom.btn;
    let $form = $(this.dom.form);

    if ($form.length > 0) {
      let newFormUrl = '/web/guest/registration?' + $form.attr( 'action' ).split('?')[1];

      $('#loginform').find('fieldset').attr('disabled', false);
      $('#loginform').find('.page-oneitem').attr('disabled', false);

      $('#loginform form').prop( 'action', `${newFormUrl}`);
      console.log('changed', newFormUrl);
    }

    //$('body').on('click', btn, this.openLoginPopup.bind(this));
  }
  openLoginPopup() {
    $(this.dom.modal).modal('show');
  }

  destroy() {
    console.log('destroy Liferay Modals');
    // if ($('#signinmodal').hasClass('modal-focused')) {
    //   Liferay.Util.Window.getById('signinmodal').destroy();
    // }
    let $modal = $(this.dom.modal);
    let btn = this.dom.btn;
    let $form = $(this.dom.form);

    $modal.data('bs.modal', null);
    $modal
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal');
    $modal.hide();
    $('.modal-backdrop').hide();
    $('body').removeClass('modal-open');
    $modal.trigger('hidden.bs.modal');
  }

}

