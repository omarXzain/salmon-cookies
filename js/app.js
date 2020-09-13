'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var zainStore = {

  location : 'Seatlle',
  minCustomers : 23,
  maxCustomers : 65,
  custArray: [],
  totalCookie: 0,
  avgCookie : 6.3,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('htmlDiv');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
zainStore.randomCustm();
zainStore.rendre();




//--------------------------------------------------


var zainStore2 = {

  location : 'Tokyo',
  minCustomers : 3,
  maxCustomers : 24,
  custArray: [],
  totalCookie: 0,
  avgCookie : 1.2,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('htmlDiv');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
zainStore2.randomCustm();
zainStore2.rendre();



//------------------------------------------------------

var zainStore3 = {

  location : 'Dubai',
  minCustomers : 11,
  maxCustomers : 38,
  totalCookie: 0,
  custArray: [],
  avgCookie : 3.7,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('htmlDiv');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
zainStore3.randomCustm();
zainStore3.rendre();


//-----------------------------------------------------

var zainStore4 = {

  location : 'Paris',
  minCustomers : 20,
  maxCustomers : 38,
  totalCookie: 0,
  custArray: [],
  avgCookie : 2.3,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('htmlDiv');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
zainStore4.randomCustm();
zainStore4.rendre();




//---------------------------------------------------


var zainStore5 = {

  location : 'Lima',
  minCustomers : 2,
  maxCustomers : 16,
  custArray: [],
  totalCookie: 0,
  avgCookie : 4.6,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  render5:function(){
    var divx = document.getElementById('htmlDiv');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);



    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
zainStore5.randomCustm();
zainStore5.render5();







//--------------------------------------------------



