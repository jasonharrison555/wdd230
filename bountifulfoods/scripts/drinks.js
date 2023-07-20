function populateSelect(){
  const url = 'scripts/drinks.json';

    let ele = document.getElementById('fruits');
        for (let i = 0; i < url.length; i++) {
          // populate select element with json.
          ele.innerHTML = ele.innerHTML +
            '<option value="' + url[i]['ID'] + '">' + url[i]['name'] + '</option>';
            
    }
  }
  const datefield = document.querySelector("time");

  // derive the current date using a date object
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  // "full" or long, medium, short options ... try them
  
  
    function show(ele) {
      // get the selected value from <select> element and show it.
      let msg = document.getElementById('msg');
      msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
            'ID: <b>' + ele.value + '</b>';
      document.getElementById("date").msg.innerHTML = fulldate;
    }