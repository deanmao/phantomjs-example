// Awesome Gold Rusher by Dean

phantom.userAgent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-us) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4';

var inputData = {
  name: phantom.args[0],
  email: phantom.args[1],
  password: phantom.args[2],
  companyId: phantom.args[3],
  referral: phantom.args[4],
  createNew: phantom.args[5]
};

if (inputData.name && inputData.email && inputData.email.match(/@/)) {
  var state = phantom.state;

  if (state.length == 0) {
    phantom.viewportSize = { width: 600, height: 600 };
    if (inputData.createNew == '1') {
      phantom.state = 'register';
      if (inputData.referral && inputData.referral != '0') {
        console.log('Signing up as a referral');
        phantom.open('http://www.startupbus.com/ref/'+inputData.referral);
      }
    } else {
      console.log('logging in');
      phantom.state = 'login';
      phantom.open('http://startupbus.com/login');
    }
  } else if (state == 'login') {
    console.log('entering credentials into login fields');
    phantom.state = 'visiting';
    document.getElementById('user_email').value = inputData.email;
    document.getElementById('user_password').value = inputData.password;
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.getElementById('user_submit').dispatchEvent(evt);
  } else if (state == 'register') {
    phantom.state = 'input';
    console.log('Registering as a new user');
    phantom.sleep(1000);
    phantom.open("http://www.facebook.com/plugins/registration.php?client_id=119313704799268&redirect_uri=http://startupbus.com/auth/registration/facebook/callback&fields=name,email,password");
  } else if (state == 'input') {
    console.log('Filling in form with data');
    phantom.sleep(1000);
    var inputs = document.getElementsByTagName('input');
    for(var i=0; i<inputs.length; i++) {
      var input = inputs[i];
      var name = input.getAttribute('name');
      if (name == 'name') {
        input.value = inputData.name;
      } else if (name == 'email') {
        input.value = inputData.email;
      } else if (name == 'password') {
        input.value = inputData.password;
      } else if (name == 'password_confirmation') {
        input.value = inputData.password;
      }
    }
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var button = document.getElementById('fbRegistrationRegisterButton');
    if (button) {
      console.log('did click');
      button.dispatchEvent(evt);
      phantom.state = 'visiting';
    } else {
      phantom.exit();
    }
  } else if (state == 'visiting') {
    console.log('Visiting startup page');
    phantom.sleep(1000);
    phantom.state = 'buy';
    phantom.open("http://startupbus.com/game/transactions/buy/"+inputData.companyId);
  } else if (state == 'buy') {
    console.log('Buying shares');
    phantom.sleep(1000);
    if (document.getElementById('game_transaction_num_shares') == null) {
      phantom.sleep(3000);
      // I don't know why page takes so long to load for this part...
      if (document.getElementById('game_transaction_num_shares') == null) {
        phantom.sleep(2000);
        if (document.getElementById('game_transaction_num_shares') == null) {
          // bail if it takes more than 7 seconds.
          phantom.exit();
        }
      }
    }
    var sharePrice = 4;
    var totalCash = 90;
    try {
      totalCash = parseFloat(document.getElementsByClassName('cash')[0].innerHTML.replace(/[\$\s+]/g, ''));
      sharePrice = parseFloat(document.getElementsByTagName('h2')[0].innerHTML.match(/\$([\d\.]+)/)[1]);
      if (totalCash > sharePrice) {
        phantom.state = 'photo';
        var shareCount = Math.floor(totalCash / sharePrice);
        document.getElementById('game_transaction_num_shares').value = shareCount;
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.getElementById('game_transaction_submit').dispatchEvent(evt);
        console.log('Bought '+shareCount+' shares at a current price of $'+sharePrice);
      } else {
        console.log('Too poor to buy stock!');
        phantom.exit();
      }
    } catch (e) {
      console.log('warning: error finding cash & share price!')
      phantom.exit();
    }
  } else if (state == 'photo') {
    try {
      var userId = document.location.toString().match(/(\d+)$/)[1];
      console.log('user_id: '+userId);
    } catch(e) {
    }
    console.log('Taking a photo for '+inputData.email);
    phantom.sleep(200);
    var photoName = inputData.email.replace('@', '_at_') + '.png';
//    phantom.render(photoName);
    phantom.exit();
  }
} else {
  console.log("------------------> Bad Name & Email!!");
}

