// Awesome Gold Rusher by Dean

var fs = require('fs');
var spawn = require('child_process').spawn;

var american = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric", "Stephen", "Andrew", "Raymond", "Gregory", "Joshua", "Jerry", "Dennis", "Walter", "Patrick", "Peter", "Harold", "Douglas", "Henry", "Carl", "Arthur", "Ryan", "Roger", "Joe", "Juan", "Jack", "Albert", "Jonathan", "Justin", "Terry", "Gerald", "Keith", "Samuel", "Willie", "Ralph", "Lawrence", "Nicholas", "Roy", "Benjamin", "Bruce", "Brandon", "Adam", "Harry", "Fred", "Wayne", "Billy", "Steve", "Louis", "Jeremy", "Aaron", "Randy", "Howard", "Eugene", "Carlos", "Russell", "Bobby", "Victor", "Martin", "Ernest", "Phillip", "Todd", "Jesse", "Craig", "Alan", "Shawn", "Clarence", "Sean", "Philip", "Chris", "Johnny", "Earl", "Jimmy", "Antonio", "Danny", "Bryan", "Tony", "Luis", "Mike", "Stanley", "Leonard", "Nathan", "Dale", "Manuel", "Rodney", "Curtis", "Norman", "Allen", "Marvin", "Vincent", "Glenn", "Jeffery", "Travis", "Jeff", "Chad", "Jacob", "Lee", "Melvin", "Alfred", "Kyle", "Francis", "Bradley", "Jesus", "Herbert", "Frederick", "Ray", "Joel", "Edwin", "Don", "Eddie", "Ricky", "Troy", "Randall", "Barry", "Alexander", "Bernard", "Mario", "Leroy", "Francisco", "Marcus", "Micheal", "Theodore", "Clifford", "Miguel", "Oscar", "Jay", "Jim", "Tom", "Calvin", "Alex", "Jon", "Ronnie", "Bill", "Lloyd", "Tommy", "Leon", "Derek", "Warren", "Darrell", "Jerome", "Floyd", "Leo", "Alvin", "Tim", "Wesley", "Gordon", "Dean", "Greg", "Jorge", "Dustin", "Pedro", "Derrick", "Dan", "Lewis", "Zachary", "Corey", "Herman", "Maurice", "Vernon", "Roberto", "Clyde", "Glen", "Hector", "Shane", "Ricardo", "Sam", "Rick", "Lester", "Brent", "Ramon", "Charlie", "Tyler", "Gilbert", "Gene", "Marc", "Reginald", "Ruben", "Brett", "Angel", "Nathaniel", "Rafael", "Leslie", "Edgar", "Milton", "Raul", "Ben", "Chester", "Cecil", "Duane", "Franklin", "Andre", "Elmer", "Brad", "Gabriel", "Ron", "Mitchell", "Roland", "Arnold", "Harvey", "Jared", "Adrian", "Karl", "Cory", "Claude", "Erik", "Darryl", "Jamie", "Neil", "Jessie", "Christian", "Javier", "Fernando", "Clinton", "Ted", "Mathew", "Tyrone", "Darren", "Lonnie", "Lance", "Cody", "Julio", "Kelly", "Kurt", "Allan", "Nelson", "Guy", "Clayton", "Hugh", "Max", "Dwayne", "Dwight", "Armando", "Felix", "Jimmie", "Everett", "Jordan", "Ian", "Wallace", "Ken", "Bob", "Jaime", "Casey", "Alfredo", "Alberto", "Dave", "Ivan", "Johnnie", "Sidney", "Byron", "Julian", "Isaac", "Morris", "Clifton", "Willard", "Daryl", "Ross", "Virgil", "Andy", "Marshall", "Salvador", "Perry", "Kirk", "Sergio", "Marion", "Tracy", "Seth", "Kent", "Terrance", "Rene", "Eduardo", "Terrence", "Enrique", "Freddie", "Wade"];
var chinese = ["An", "Bing", "Chen", "Chung", "Confucius", "Cong", "Deshi", "Dewei", "Fohai", "Fohsing", "Gan", "Gao", "Genjo", "Ho", "Hsin", "Huang", "fu", "Huichao", "HuiK'o", "Jiang", "Jin", "Jing", "Jun", "Kong", "LaoTzu", "Lee", "Lei", "Li", "Liang", "Liko", "LiLiang", "Manchu", "Ming", "Niaoka", "On", "QingNan", "Quon", "Shen", "Shing", "Sun", "Tung", "Uang", "Wang", "Wen", "Woo", "Wupen", "Xiaoping", "Xin", "Xingfu", "XiWang", "Yao", "Ye", "Yo", "Yong", "Yu", "Yuan", "Zhong", "Zhu", "Zhuang", "Ah", "lam", "An", "Bao", "Chen", "Chenchio", "Chentao", "Chow", "Chu", "hua", "Chun", "Chyou", "DaShin", "Daxia", "Fai", "Fang", "Fang", "hua", "Genji", "Guanyin", "Hua", "Hui", "fang", "Jing", "Wei", "Jun", "Kimora", "Le", "Lee", "Lei", "Li", "Lian", "Lien", "Li", "Hua", "Li", "Mei", "Li", "Ming", "Lin", "Ling", "Lixue", "Mee", "Mei", "Mingmei", "Quan", "Shu", "Fang", "Ting", "Ushi", "Xiang", "XiaoNiao", "XiaoXing", "Xin", "Xiu", "Mei", "Yin", "Yu", "Zan", "Zhengqiu", "Zhi", "Zhijuan", "Zi"];
var arabic = ["Aban", "Abbas", "Abbud", "Abbudin", "AbdulAbdelAbdal", "AbdulAdl", "AbdulAhad", "AbdulAlim", "AbdulAliyy", "AbdulAzim", "AbdulAziz", "AbdulBadi", "AbdulBaith", "AbdulBaqi", "AbdulBari", "AbdulBarr", "AbdulBasir", "AbdulBasit", "AbdulFattah", "AbdulGhaffar", "AbdulGhafur", "AbdulGhani", "AbdulHadi", "AbdulHafiz", "AbdulHakam", "AbdulHakim", "AbdulHalim", "AbdulHamid", "AbdulHaqq", "AbdulHasib", "AbdulHayy", "AbdulJabbar", "AbdulJalil", "AbdulKarim", "AbdulKhabir", "AbdulKhaliq", "AbdulLatif", "AbdulMalik", "AbdulMajid", "AbdulMatin", "AbdulMubdi", "AbdulMughni", "AbdulMuhaimin", "AbdulMuhsi", "AbdulMuhyi", "AbdulMuid", "AbdulMuizz", "AbdulMujib", "AbdulMumin", "AbdulMuqaddim", "AbdulMuqtadir", "AbdulMusawwir", "AbdulMutaal", "AbdulNafi", "AbdulNasser", "AbdulNasir", "AbdulNur", "AbdulQadir", "AbdulQahhar", "AbdulQawi", "AbdulQayyum", "AbdulQuddus", "AbdulRafi", "AbdulRahim", "AbdulRahman", "AbdulRashid", "AbdulRauf", "AbdulRazzaq", "AbdulSabur", "AbdulSalam", "AbdulSamad", "AbdulSami", "AbdulSattar", "AbdulShahid", "AbdulShakur", "AbdulTawwab", "AbdulWadud", "AbdulWahhab", "AbdulWahid", "AbdulWajid", "AbdulWakil", "AbdulWali", "AbdulWaliy", "AbdulWarith", "AbdulZahir", "Abdullah", "Abid", "Abidin", "AbuBakr", "AbualKhayr", "Adan", "AdelAdil", "Adham", "Adib", "Adli", "AdnanAdnan", "AfifAfeef", "AhmadAhmed", "Ajib", "Akif", "Akil", "Akram", "Ala", "AlaalDin", "AlAbbas", "AladdinAlaaldin", "AlBara", "AlHakam", "AlHarith", "Alhasan", "AlhusainAlhusayn", "AliAliAliyy", "Alim", "Almahdi", "AlSafi", "Altaf", "Altair", "AlTayyib", "AlTijani", "AlTufailAlTufayl", "Amid", "Amid", "AminAmeen", "AmirAmeer", "Amir", "Amjad", "AmmarAmmar", "Amro", "Anas", "Anis", "Antarah", "Anwar", "Aqil", "Arfan", "Arif", "Arif", "Asad", "Asad", "Asadel", "Ashraf", "Asif", "AsimAsim", "Aswad", "AtaAtaa", "AtaAllah", "AtaalRahman", "Athil", "Athir", "AtifAtif", "AwadAwad", "Awf", "Aws", "Awwab", "Ayham", "Ayman", "Ayser", "AyyubAyoob", "Aza", "Azab", "Azhar", "AzeemAzim", "AzizAziz", "AzzamAzzam", "Badi", "BadialZaman", "Badr", "BadralDin", "Badri", "BahaBaha", "BahaalDinBahiyyalDin", "Bahij", "Bahir", "Bakr", "Bakri", "Baligh", "Bandar", "Barakah", "Barir", "Bashir", "Bashshar", "Basil", "BasimBassam", "Bayhas", "Bilal", "Bishr", "Boulos", "BudailBudayl", "Burhan", "Bushr", "Butrus", "Dabir", "Dani", "Darwish", "DaudDawud", "Dhakir", "Dhakiy", "Dhakwan", "DhulFiqar", "Dirar", "Diya", "DiyaalDin", "Fadi", "Fadil", "Fadl", "FadlAllah", "FahdFahad", "Fahmi", "FaisalFaysal", "Faiz", "Fakhir", "FakhralDin", "FakhriFakhry", "Fakih", "Falah", "Falih", "FarajFarraj", "Farhan", "FaridFareed", "FariqFareeq", "Faris", "FaruqFarooq", "Fath", "Fathi", "Fatih", "FatinFateen", "Fawwaz", "Fawzan", "Fawzi", "Fayyad", "Ferran", "Fida", "Fikri", "Firas", "FouadFuad", "Fudail", "GamalGamali", "GhaithGhayth", "Ghali", "Ghalib", "Ghanim", "Ghassan", "Ghawth", "Ghazi", "Ghazwan", "Ghiyath", "Habbab", "Habib", "Hadad", "Haddad", "Hadi", "Hafiz", "Hakem", "HakimHakeem", "Halim", "Hamal", "Hamas", "Hamdan", "Hamdi", "Hamid", "Hamim", "Hamzah", "Hana", "Hanai", "Hanbal", "Hani", "Hanif", "Hannad", "Haris", "Harith", "HarounHarun", "Hashim", "Hassan", "Hatim", "Haydar", "Haytham", "Hayyan", "Hazim", "HilalHilel", "Hilmi", "Hisham", "HudHoud", "Hudad", "Hudhafah", "HudhaifahHudhayfah", "Humam", "HusainHusaynHussein", "Husam", "HusamalDin", "Ibrahim", "Id", "Idris", "Ihsan", "Ihtisham", "Ikrimah", "Ilias", "ImadImad", "ImadalDin", "Imam", "ImranImran", "Imtiyaz", "Inam", "Iqbal", "IrfanIrfan", "IsaIsaEisa", "IsamIsamIssam", "Ishaq", "Ismail", "Iyad", "Iyas", "IzzalDin", "Jabalah", "JabbarJabr", "Jabir", "JadAllah", "JafarJafar", "Jal", "Jalal", "JalalalDin", "JalilJaleel", "Jamal", "JamalalDin", "JamilJameel", "Jarir", "Jasim", "Jaul", "Jaun", "Jawad", "Jawdah", "Jawhar", "Jibran", "Jibril", "Jihad", "JubairJubayr", "Jul", "JumahJumuah", "JunaidJunayd", "JuwainJuwayn", "KadarKedar", "KadeenKadin", "KadeerKadir", "Kahil", "Kaliq", "Kamal", "KamilKameel", "Karam", "Kardal", "KarifKareef", "KarimKareem", "KasibKaseeb", "KaseemKasim", "KatebKatib", "Kazim", "Khalaf", "KhaldunKhaldoon", "KhalidKhaled", "Khalifah", "KhalilKhaleelKalil", "KhalilalAllah", "Khalis", "Khatib", "KhairalDin", "KhairiKhairyKhayri", "Khoury", "Khulus", "KhuzaimahKhuzaymah", "LabibLabeeb", "Lablab", "Latif", "Layth", "Luay", "LubaidLubayd", "Luqman", "Lut", "Lutfi", "Mad", "Madani", "Mahbub", "Mahdi", "Mahfuz", "Mahir", "Mahjub", "MahmudMahmoud", "Mahrus", "MaimunMaymun", "Majd", "Majdy", "MajdalDin", "Majid", "Makin", "Malik", "MamdouhMamduh", "Mamun", "ManMain", "Mandhur", "Mansur", "Marghub", "Marid", "Maruf", "Marwan", "Marzuq", "Mashal", "Mashhur", "Masrur", "Masud", "Masun", "Maysarah", "Mazhar", "Mazin", "Mihran", "Mihyar", "Mikail", "Miqdad", "Misbah", "MishaalMishal", "Miyaz", "Muadh", "Muawiyah", "Muayyad", "Mubarak", "Mubin", "Mudar", "Muddaththir", "MufidMufeed", "Muflih", "Muhab", "MuhairMuhayr", "MuhammadMohammed", "Muhanna", "MuhannadMuhanned", "Muhib", "Muhibb", "Muhsin", "Muhtadi", "MuhyialDin", "Muin", "Muizz", "Mujab", "Mujahid", "Mukarram", "Mukhlis", "Mukhtar", "Mulham", "Mulhim", "Mummar", "Mumin", "Mumtaz", "Munahid", "Mundhir", "Munib", "Munif", "MunirMuneer", "Munis", "Munjid", "Munsif", "Muntasir", "Murad", "Murshid", "MurtadaMurtadiMurtadhy", "MusaMoosa", "Musab", "Musad", "Musaid", "Mushtaq", "Muslih", "Muslim", "Mustafa", "Muta", "Mutasim", "Mutawalli", "Mutazz", "Muthanna", "Muti", "Muwaffaq", "Muyassar", "Muzaffar", "Muzzammil", "NabhanNabih", "Nabighah", "Nabih", "NabilNabeel", "Nadhir", "NadimNadeem", "Nadir", "Nafi", "Nahid", "Nail", "Naim", "Naji", "NajibNajeeb", "Najid", "Najjar", "NajmalDin", "Naman", "Namir", "NashahNashat", "Nashwan", "Nasib", "Nasih", "Nasim", "Nasir", "NasiralDin", "NasrNasser", "Nasri", "Nasuh", "NawafNawwaf", "Nawfal", "NayifNaif", "NazihNazeeh", "NazimNazeem", "Nazmi", "Nibras", "Nidal", "Nijad", "Nimr", "Nizar", "NuaimNuaym", "NuhNooh", "NuhaidNuhayd", "Numair", "Numan", "NuralDin", "NuriNoori", "NusrahNusrat", "Qasim", "QaysQais", "Qudamah", "Qusay", "Qatadah", "QutaybahQutaibah", "Qutb", "Rabah", "Rabi", "Radi", "Rafi", "Rafid", "Rafiq", "RaghibRagheb", "Raghid", "Rahman", "Raid", "Raif", "Rais", "Raja", "Rajab", "Raji", "Rajih", "Rakin", "Ramadan", "Rami", "Ramih", "Ramiz", "Ramzi", "Rani", "Rashad", "Rashid", "Rasil", "Rasin", "Rasmi", "Rasul", "Ratib", "Rauf", "Rayhan", "Rayyan", "Razin", "RedaRidaRidha", "Ridwan", "Rihab", "RiyadRiyadh", "Rizq", "Ruhi", "Rushd", "Rushdi", "RuwaidRuwayd", "Saad", "Saadah", "Sab", "SabihSabeeh", "SabirSabeer", "Sabri", "Sad", "SadalDin", "Sadad", "Sadid", "Sadiq", "Sadun", "SaeedSaid", "Safi", "Safiy", "SafiyalDin", "Safuh", "SafwahSafwat", "Safwan", "Sahib", "Sahir", "Sahl", "Saib", "SaifSayfSeif", "SaifalDin", "Sajid", "Sajjad", "Sakhr", "Salah", "SalahalDin", "Salamah", "SalehSalih", "SalimSaleem", "Salman", "Sami", "Samih", "SamirSameer", "Samman", "Saqr", "Sariyah", "Sati", "Saud", "Sayyid", "Shaban", "Shadi", "Shadin", "Shafi", "ShafiqShafeeq", "Shahid", "Shahin", "Shahir", "Shakib", "Shakir", "ShamsalDin", "Shamal", "Shamil", "Shamim", "Sharaf", "SharifShareef", "Shawqi", "Shihab", "ShihabalDin", "Shihad", "ShuaibShuayb", "Shukri", "Shumayl", "Siddiq", "Sinan", "Siraj", "SirajalDin", "Sofian", "Subhi", "Sufyan", "SuhaibSuhayb", "SuhailSuhayl", "SuhaimSuhaym", "SulaimanSulayman", "Sultan", "Sumrah", "Suraqah", "SuudSuoud", "Tahir", "Tahsin", "TaimAllahTaymAllah", "Taj", "TajalDin", "Talal", "Talib", "Tamim", "Tamir", "Tamam", "Tammam", "Taqiy", "TarifTareef", "Tariq", "Taslim", "Tawfiq", "Tawhid", "Taymullah", "Taysir", "Tayyib", "Thabit", "ThamerThamir", "Thaqib", "Thawab", "Thawban", "UbaidahUbaydah", "Ubaid", "Ubayy", "UdailUdayl", "Uday", "UmarOmar", "Umarah", "UmayrUmair", "Umayyah", "Urwah", "UsaimUsaym", "UsamaUsamah", "Utbah", "Uthal", "Uthman", "Waddah", "Wadi", "Wadid", "WafiqWafeeq", "Wahab", "Wahhab", "Wahid", "Wail", "Wajdi", "Wajid", "Wajih", "Wakil", "WalidWaleed", "Walif", "WaliyAllah", "WaliyalDin", "Waqar", "Waqqas", "Ward", "Wasif", "Wasil", "WasimWaseem", "Wazir", "Yahya", "Yaman", "Yaqub", "YasarYasser", "YasinYaseen", "Yasir", "Yazan", "YazidYazeed", "YoussefYusefYusuf", "YunusYoonus", "Yushua", "Yusri", "Yusuf", "Zafar", "Zafir", "Zahid", "Zahir", "ZaidZayd", "Zaim", "ZainZayn", "Zarif", "Zakariyya", "ZakiZaky", "Zakwan", "ZiadZiyad", "ZubairZubayr", "ZuhairZuhayr"];
var domains = ['msn.com', 'live.com', 'yahoo.com', 'mail.ru', 'ymail.com', 'hotmail.com', 'fb.com', 'yahoo-inc.com', 'san.rr.com', 'comcast.net', 'comcast.com', 'mail.org'];

function randomName() {
  var r = Math.random();
  var names = american;
  if (r < 0.3) {
    names = chinese;
  } else if (r >= 0.3 && r < 0.6) {
    names = arabic;
  }
  var first = names[Math.floor(names.length * Math.random())];
  var last = names[Math.floor(names.length * Math.random())];
  return [first, last].join(' ');
}

function randomEmail(name) {
  var num = Math.floor(1000 * Math.random()).toString();
  var domain = domains[Math.floor(domains.length * Math.random())];
  var parts = name.toLowerCase().split(' ');
  var first = parts[0];
  var last = parts[1];
  var email;
  if (Math.random() > 0.5) {
    email = [first, last, num, '@', domain];
  } else {
    email = [first, num, last, '@', domain];
  }
  return email.join('');
}

function logAppender(logFile) {
  return function(data) {
    fs.open(logFile, 'a+', function(err, fd) {
      if (!err) {
        fs.write(fd, data, null, data.length, null, function(err, written) {
            if(err) throw err;
            fs.close(fd, function(err) {
              if(err) throw err;
            });
        });
      }
    });
  };
}

function signup(name, email, password, companyId, referral, createNew, callback) {
  var child = spawn('phantomjs', ['phantom_script.js', name, email, password, companyId, referral, (createNew ? '1' : '0')], {cwd: __dirname, env: process.env});
  if (child.stdout) {
    var outputs = [];
    child.stdout.on('data', function(data) {
      if (data) {
        outputs.push(data.toString());
        console.log(data.toString());
      }
    });
    child.on('exit', function() {
      callback(outputs.join());
      console.log('Signed up '+email);
    });
    child.stdout.end();
  }
}

var maxRushers = 10;
var currentRushers = 0;
var companyId = 86;

var logger = logAppender(__dirname + '/logins.txt');
var usersToIgnore = {};

function rushGold() {
  currentRushers = currentRushers + 1;
  var referralId, name, email, password;
  var useExistingLogins = (Math.random() < 0.1);
  if (useExistingLogins) {
    fs.readFile('logins.txt', function(err, data) {
      if (data) {
        var stringData = data.toString();
        var logins = stringData.split(/\n/).map(function(x) {
          var parts = x.split(', ');
          return {user: parts[0], pass: parts[1]};
        });
        var randomLogin = logins[Math.floor(logins.length * Math.random())];
        if (randomLogin && randomLogin.user && randomLogin.pass && !usersToIgnore[randomLogin.user]) {
          console.log('USING EXISTING USER:');
          console.log('      email: '+randomLogin.user);
          console.log('   password: '+randomLogin.pass);
          signup('Joe Schmoe', randomLogin.user, randomLogin.pass, companyId, '3000', false, function(outputString) {
            currentRushers = currentRushers - 1;
            parallelize();
            if (outputString.match(/Too poor/)) {
              usersToIgnore[randomLogin.user] = true;
            }
          });
        } else {
          currentRushers = currentRushers - 1;
          parallelize();
        }
      }
    });
  } else {
    // choose a random person to be the referral
    referralId = Math.floor(Math.random() * 3000 + 30);
    // make a random name, email, and password
    name = randomName();
    email = randomEmail(name);
    password = 'asdf' + Math.floor(100000 * Math.random() + 1000).toString();
    console.log('SIGNING UP:');
    console.log('       name: '+name);
    console.log('      email: '+email);
    console.log('   password: '+password);
    signup(name, email, password, companyId, referralId, true, function(outputString) {
      currentRushers = currentRushers - 1;
      parallelize();
      var matches = outputString.match(/user_id: (\d+)/);
      if (matches) {
        logger(new Buffer(email + ', ' + password + ', ' + matches[1] + '\n'));
      }
    });
  }
}

function parallelize() {
  process.nextTick(function() {
    for(var i=currentRushers; i<maxRushers; i++) {
      if (currentRushers < maxRushers) {
       rushGold();
      }
    }
  });
}

parallelize();
