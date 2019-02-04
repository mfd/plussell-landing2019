export default class LiferayUI {
  constructor() {
    this.modals = {};
    this.signinmodal =
    this.init();
  }
  init() {
    console.log('init Liferay Modals');
    // init SignIn
    AUI().ready('liferay-sign-in-modal',function(A) {
      var signIn = A.one('#sign-in');
      if (signIn && signIn.getData('redirect') !== 'true') {
        signIn.plug(Liferay.SignInModal);
      }
    });
  }
  destroy() {
    console.log('destroy Liferay Modals');
    if ($('#signinmodal').hasClass('modal-focused')) {
      Liferay.Util.Window.getById('signinmodal').destroy();
    }
  }

}

