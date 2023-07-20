let ele = document.getElementById('fruits');
    for (let i = 0; i < fruits.length; i++) {
      // populate select element with json.
      ele.innerHTML = ele.innerHTML +
        '<option value="' + fruits[i]['ID'] + '">' + fruits[i]['Bird_Name'] + '</option>';
    }
    function show(ele) {
      // get the selected value from <select> element and show it.
      let msg = document.getElementById('msg');
      msg.innerHTML = 'Selected Fruit: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
        'ID: <b>' + ele.value + '</b>';
    }