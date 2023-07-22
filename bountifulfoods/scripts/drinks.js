function getSelectData(){
  const url = 'scripts/drinks.json';
    let fruit = document.getElementById('fruits');
        for (let i = 0; i < url.length; i++) {
          fruit.innerHTML = fruit.innerHTML +
            '<option value="' + url[i]['ID'] + '">' + url[i]['name'] + '</option>';
            
    }
  }

  const datefield = document.querySelector("time");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  
  
    function show(fruit) {
      let result = document.getElementById('result');
      result.innerHTML = 'Selected fruit: ' + fruit.options[fruit.selectedIndex].text +
            'ID:' + fruit.value;
      document.getElementById("date").result.innerHTML = fulldate;
    }