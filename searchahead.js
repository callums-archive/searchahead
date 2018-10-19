// constructor
var searchahead = function(el, settings) {
  // get the text element and make it contenteditable
  this.text_element = document.querySelector(el);
  this.text_element.style.position = "relative";
  this.text_element.setAttribute("spellcheck", "false");
  this.text_element.setAttribute("autocomplete", "off");
  this.text_element.style.backgroundColor = "#ffffff00";

  // make is easier to get to the parent node
  this.parent_node = this.text_element.parentNode;

  // suggestion text element
  this.under_text = document.createElement("input");
  this.under_text.setAttribute("tabIndex", "-1");
  this.under_text.setAttribute("readonly", "true");
  this.under_text.setAttribute("class", "form-control");
  this.under_text.style.position = "absolute";
  this.under_text.style.backgroundColor = "#ffffff00";
  this.under_text.style.color = "#ccd6dd";

  // holder container for inputs
  this.input_holder = document.createElement("div");
  this.input_holder.style.position = "relative";
  this.input_holder.appendChild(this.under_text);
  this.input_holder.appendChild(this.text_element);

  // add hoder container
  this.parent_node.appendChild(this.input_holder);

  // fetch the settings
  this.settings = settings;

  // init the searchahead
  this.init();
};

searchahead.prototype = {
  init: function() {
    if (this.settings.hasOwnProperty('local') && this.settings.hasOwnProperty('remote')) {
      this.throwError('you have defined too many resources, pick either "local" or "remote"');
    }
    else {
      this.deployListeners();
    }
  },

  throwError: function(error) {
    // used to display errors to the user/dev to fix issues
    alert(`an issue has been detected in searchahead(#${this.text_element.id}) please see console.`)
    console.error(`searchahead(#${this.text_element.id}) error: ${error}`);
  },

  createDropdown: function(list) {
    // define the root object
    var root = this;

    if (list.length > 0) {
      // create the dropdown
      root.dropdown = document.createElement("DIV");
      root.dropdown.setAttribute('class', 'dropdown show');

      // create dropdown menu
      root.dropdown_menu = document.createElement("DIV");
      root.dropdown_menu.setAttribute("class", "dropdown-menu show");
      root.dropdown_menu.style.width = "100%";

      // iterate therough the list and populate the dropdown menu
      list.forEach(function(val, key) {
        // create a dropdown link
        d_link = document.createElement("A");
        d_link.setAttribute("class", "dropdown-item");
        d_link.setAttribute("href", "#");
        d_link.onclick = function(e) {root.clickedOption(e)};
        d_link.innerText = val.origional;

        // add the link to the dropdown menu
        root.dropdown_menu.appendChild(d_link);
      });

      // set the amount of nodes inside of the dropdown menu
      this.dropdownCount = root.dropdown_menu.childNodes.length;

      // after itteration add dropdown menu to the dropdown
      this.dropdown.appendChild(this.dropdown_menu);

      // append the dropdown to the bottom of the text element
      this.parent_node.appendChild(this.dropdown);

      // check to see that the user has not typed the whole thing
      this.userTypeCheck();

      // if the user mouses over to the dropdown
      this.dropdown.onmouseover = function() {
        // set the dropdown placeholder back to 0
        root.dropdownLevel = 0;
        // clear states and set the text in the text field
        root.clearAciveDropDownState();
        root.text_element.value = root.typed;
        root.generateSuggestion(root.typed, root.resultObj);
      }
    }
  },

  clearDropdown: function() {
    // remove the dropdown node that removes the dropdown ele
    if(this.hasOwnProperty('dropdownLevel')) {
      this.dropdownLevel = -1;
    }
    this.parent_node.childNodes.forEach(function(val, key) {
      if (val.classList !== undefined) {
        if (val.classList.contains("dropdown")) {
          val.remove();
        }
      }
    });
  },

  deployListeners: function() {
    // define the root object
    var root = this;// constructor
var searchahead = function(el, settings) {
  // get the text element and make it contenteditable
  this.text_element = document.querySelector(el);
  this.text_element.style.position = "relative";
  this.text_element.setAttribute("spellcheck", "false");
  this.text_element.setAttribute("autocomplete", "off");
  this.text_element.style.backgroundColor = "#ffffff00";

  // make is easier to get to the parent node
  this.parent_node = this.text_element.parentNode;

  // suggestion text element
  this.under_text = document.createElement("input");
  this.under_text.setAttribute("tabIndex", "-1");
  this.under_text.setAttribute("readonly", "true");
  this.under_text.setAttribute("class", "form-control");
  this.under_text.style.position = "absolute";
  this.under_text.style.backgroundColor = "#ffffff00";
  this.under_text.style.color = "#ccd6dd";

  // holder container for inputs
  this.input_holder = document.createElement("div");
  this.input_holder.style.position = "relative";
  this.input_holder.appendChild(this.under_text);
  this.input_holder.appendChild(this.text_element);

  // add hoder container
  this.parent_node.appendChild(this.input_holder);

  // fetch the settings
  this.settings = settings;

  // init the searchahead
  this.init();
};

searchahead.prototype = {
  init: function() {
    if (this.settings.hasOwnProperty('local') && this.settings.hasOwnProperty('remote')) {
      this.throwError('you have defined too many resources, pick either "local" or "remote"');
    }
    else {
      this.deployListeners();
    }
  },

  throwError: function(error) {
    // used to display errors to the user/dev to fix issues
    alert(`an issue has been detected in searchahead(#${this.text_element.id}) please see console.`)
    console.error(`searchahead(#${this.text_element.id}) error: ${error}`);
  },

  createDropdown: function(list) {
    // define the root object
    var root = this;

    if (list.length > 0) {
      // create the dropdown
      root.dropdown = document.createElement("DIV");
      root.dropdown.setAttribute('class', 'dropdown show');

      // create dropdown menu
      root.dropdown_menu = document.createElement("DIV");
      root.dropdown_menu.setAttribute("class", "dropdown-menu show");
      root.dropdown_menu.style.width = "100%";

      // iterate therough the list and populate the dropdown menu
      list.forEach(function(val, key) {
        // create a dropdown link
        d_link = document.createElement("A");
        d_link.setAttribute("class", "dropdown-item");
        d_link.setAttribute("href", "#");
        d_link.onclick = function(e) {root.clickedOption(e)};
        d_link.innerText = val.origional;

        // add the link to the dropdown menu
        root.dropdown_menu.appendChild(d_link);
      });

      // set the amount of nodes inside of the dropdown menu
      this.dropdownCount = root.dropdown_menu.childNodes.length;

      // after itteration add dropdown menu to the dropdown
      this.dropdown.appendChild(this.dropdown_menu);

      // append the dropdown to the bottom of the text element
      this.parent_node.appendChild(this.dropdown);

      // check to see that the user has not typed the whole thing
      this.userTypeCheck();

      // if the user mouses over to the dropdown
      this.dropdown.onmouseover = function() {
        // set the dropdown placeholder back to 0
        root.dropdownLevel = 0;
        // clear states and set the text in the text field
        root.clearAciveDropDownState();
        root.text_element.value = root.typed;
        root.generateSuggestion(root.typed, root.resultObj);
      }
    }
  },

  clearDropdown: function() {
    // remove the dropdown node that removes the dropdown ele
    if(this.hasOwnProperty('dropdownLevel')) {
      this.dropdownLevel = -1;
    }
    this.parent_node.childNodes.forEach(function(val, key) {
      if (val.classList !== undefined) {
        if (val.classList.contains("dropdown")) {
          val.remove();
        }
      }
    });
  },

  deployListeners: function() {
    // define the root object
    var root = this;

    // if the user us typing in the text field
    this.text_element.oninput = function() {
      root.clearDropdown();
      root.clearSuggestion();
      root.generateList(this.value);
      root.typed = this.value;
    }

    // remove dropdown if the user moves away
    this.text_element.onblur = function() {
      root.clearDropdown();
    }

    // add dropdown if the user focuses
    this.text_element.onfocus = function() {
      root.generateList(this.value);
    }

    this.text_element.onkeydown = function(ev) {
      // if the user presses tab, autocomplete
      if (ev.keyCode == 9) {
        if ((root.text_element.value > 0) && (root.under_text.value == 0)) {
          ev.preventDefault();
        }
        root.acceptSuggestion();
      }

      // if the user presses down start toggling the list
      if(ev.keyCode == 40) {
        ev.preventDefault();
        root.toggleDropDown("down");
      }

      // if the user presses up start toggling the list
      if(ev.keyCode == 38) {
        ev.preventDefault();
        root.toggleDropDown("up");
      }

      // if the user presses enter
      if(ev.keyCode == 13) {
        root.clearDropdown();
      }
    }
  },

  generateList: function(user_input) {
    // this will get the resules for local and remote and
    // populate it to the dropdown
    if(this.settings.hasOwnProperty('minLength') && (user_input.length >= this.settings.minLength)) {
      // define the root object
      var root = this;
      //local
      if (this.settings.hasOwnProperty('local')) {
        // results list
        var includes_str = this.defaultSort(user_input, this.settings.local);
        // populate the first item as a suggestion
        this.generateSuggestion(user_input, includes_str[0]);
        // populate the dropdown
        this.createDropdown(includes_str);
      }
      else if (this.settings.hasOwnProperty('remote')) {
        // remote fetch
        fetch(String(this.settings.remote).replace("%TERM", user_input))
        .then(response => response.json())
        .then(function(json_response) {
          // results list
          var includes_str = root.defaultSort(user_input, json_response);
          // populate the first item as a suggestion
          root.generateSuggestion(user_input, includes_str[0]);
          // populate the dropdown
          root.createDropdown(includes_str);
        });
      }
      else {
        this.throwError('No data source created!, define local or remote');
      }
    }
  },

  clickedOption: function(el) {
    // once the user has selected an option
    // set the input field to the value of the a tag
    this.text_element.value = el.target.innerText;
    // remove the dropdown
    this.clearDropdown();
    this.clearSuggestion();
  },

  generateSuggestion: function(suggestion, resultObj) {
    // clear previous suggestion
    this.clearSuggestion();
    // text input suggestion
    var user_input = this.text_element.value;
    suggestion = (suggestion !== undefined) ? suggestion : "";
    if (user_input.length > 0 && resultObj !== undefined) {
      sliced_origional = resultObj.origional.substring(suggestion.length, resultObj.origional.length);
      sliced_user = suggestion.substring(0, suggestion.length);
      this.under_text.setAttribute("value", sliced_user + sliced_origional);
      this.resultObj = resultObj;
    }
    else {
      this.clearSuggestion();
    }
  },

  clearSuggestion: function() {
    // clear suggestion box
    if (this.under_text) {
      this.under_text.setAttribute("value", "");
    }
  },

  acceptSuggestion: function() {
    if (this.under_text.value.length > 0){
      this.text_element.value = this.resultObj.origional
    }
    this.clearDropdown();
    this.clearSuggestion();
  },

  defaultSort: function(item, arr) {
    // default sort for suggestions
    var final_array = []
    var results = [];

    item = item.toLowerCase();
    arr.forEach(function(val, key) {
      final_array.push({'val': val.toLowerCase(), 'origional': val, 'key': key});
    });

    final_array.forEach(function(v) {
      if (v.val.slice(0, item.length) == item) {
        results.push(v);
      }
    });
    return results;
  },

  userTypeCheck: function() {
    // Check to see if the user has typed the whole darn thing, if so put origional
    if(this.dropdown_menu.childElementCount == 1) {
      if(this.dropdown_menu.firstChild.innerText.toLowerCase() == this.text_element.value.toLowerCase()) {
        this.text_element.value = this.dropdown_menu.firstChild.innerText;
        this.clearSuggestion();
        this.clearDropdown();
      }
    }
  },

  toggleDropDown: function(direction) {
    // toggles to dropdown
    // clear the suggestion
    this.clearSuggestion();

    // logic
    if (!this.hasOwnProperty('dropdownLevel')) {
      this.dropdownLevel = 0;
      this.actionDropDownMove();
    }
    else if (direction == "up" && (this.dropdownLevel - 1) >= -1) {
      this.dropdownLevel-=1;
      this.actionDropDownMove();
    }
    else if (direction == "down"  && (this.dropdownLevel + 1) < this.dropdownCount) {
      this.dropdownLevel+=1;
      this.actionDropDownMove();
    }
  },

  actionDropDownMove: function() {
    // actually moves the active class on the dropdown
    this.clearAciveDropDownState();

    if (this.dropdownLevel != -1 && this.dropdownLevel <= this.dropdownCount) {
      var d_link = this.dropdown_menu.childNodes[this.dropdownLevel];
      d_link.classList.add("active");
      this.text_element.value = d_link.innerText;
    }
    else {
      this.text_element.value = this.typed;
      this.generateSuggestion(this.typed, this.resultObj);
    }
  },

  clearAciveDropDownState: function() {
    // clears all of the active classes in dropdown items if any
    this.dropdown_menu.childNodes.forEach(function(val) {
      val.classList.remove("active");
    });
  }
};


    // if the user us typing in the text field
    this.text_element.oninput = function() {
      root.clearDropdown();
      root.clearSuggestion();
      root.generateList(this.value);
      root.typed = this.value;
    }

    // remove dropdown if the user moves away
    this.text_element.onblur = function() {
      root.clearDropdown();
    }

    // add dropdown if the user focuses
    this.text_element.onfocus = function() {
      root.generateList(this.value);
    }

    this.text_element.onkeydown = function(ev) {
      // if the user presses tab, autocomplete
      if (ev.keyCode == 9) {
        if ((root.text_element.value > 0) && (root.under_text.value == 0)) {
          ev.preventDefault();
        }
        root.acceptSuggestion();
      }

      // if the user presses down start toggling the list
      if(ev.keyCode == 40) {
        ev.preventDefault();
        root.toggleDropDown("down");
      }

      // if the user presses up start toggling the list
      if(ev.keyCode == 38) {
        ev.preventDefault();
        root.toggleDropDown("up");
      }

      // if the user presses enter
      if(ev.keyCode == 13) {
        root.clearDropdown();
      }
    }
  },

  generateList: function(user_input) {
    // this will get the resules for local and remote and
    // populate it to the dropdown
    if(this.settings.hasOwnProperty('minLength') && (user_input.length >= this.settings.minLength)) {
      // define the root object
      var root = this;
      //local
      if (this.settings.hasOwnProperty('local')) {
        // results list
        var includes_str = this.defaultSort(user_input, this.settings.local);
        // populate the first item as a suggestion
        this.generateSuggestion(user_input, includes_str[0]);
        // populate the dropdown
        this.createDropdown(includes_str);
      }
      else if (this.settings.hasOwnProperty('remote')) {
        // remote fetch
        fetch(String(this.settings.remote).replace("%TERM", user_input))
        .then(response => response.json())
        .then(function(json_response) {
          // results list
          var includes_str = root.defaultSort(user_input, json_response);
          // populate the first item as a suggestion
          root.generateSuggestion(user_input, includes_str[0]);
          // populate the dropdown
          root.createDropdown(includes_str);
        });
      }
      else {
        this.throwError('No data source created!, define local or remote');
      }
    }
  },

  clickedOption: function(el) {
    // once the user has selected an option
    // set the input field to the value of the a tag
    this.text_element.value = el.target.innerText;
    // remove the dropdown
    this.clearDropdown();
    this.clearSuggestion();
  },

  generateSuggestion: function(suggestion, resultObj) {
    // clear previous suggestion
    this.clearSuggestion();
    // text input suggestion
    var user_input = this.text_element.value;
    suggestion = (suggestion !== undefined) ? suggestion : "";
    if (user_input.length > 0 && resultObj !== undefined) {
      sliced_origional = resultObj.origional.substring(suggestion.length, resultObj.origional.length);
      sliced_user = suggestion.substring(0, suggestion.length);
      this.under_text.setAttribute("value", sliced_user + sliced_origional);
      this.resultObj = resultObj;
    }
    else {
      this.clearSuggestion();
    }
  },

  clearSuggestion: function() {
    // clear suggestion box
    if (this.under_text) {
      this.under_text.setAttribute("value", "");
    }
  },

  acceptSuggestion: function() {
    if (this.under_text.value.length > 0){
      this.text_element.value = this.resultObj.origional
    }
    this.clearDropdown();
    this.clearSuggestion();
  },

  defaultSort: function(item, arr) {
    // default sort for suggestions
    var final_array = []
    var results = [];

    item = item.toLowerCase();
    arr.forEach(function(val, key) {
      final_array.push({'val': val.toLowerCase(), 'origional': val, 'key': key});
    });

    final_array.forEach(function(v) {
      if (v.val.slice(0, item.length) == item) {
        results.push(v);
      }
    });
    return results;
  },

  userTypeCheck: function() {
    // Check to see if the user has typed the whole darn thing, if so put origional
    if(this.dropdown_menu.childElementCount == 1) {
      if(this.dropdown_menu.firstChild.innerText.toLowerCase() == this.text_element.value.toLowerCase()) {
        this.text_element.value = this.dropdown_menu.firstChild.innerText;
        this.clearSuggestion();
        this.clearDropdown();
      }
    }
  },

  toggleDropDown: function(direction) {
    // toggles to dropdown
    // clear the suggestion
    this.clearSuggestion();

    // logic
    if (!this.hasOwnProperty('dropdownLevel')) {
      this.dropdownLevel = 0;
      this.actionDropDownMove();
    }
    else if (direction == "up" && (this.dropdownLevel - 1) >= -1) {
      this.dropdownLevel-=1;
      this.actionDropDownMove();
    }
    else if (direction == "down"  && (this.dropdownLevel + 1) < this.dropdownCount) {
      this.dropdownLevel+=1;
      this.actionDropDownMove();
    }
  },

  actionDropDownMove: function() {
    // actually moves the active class on the dropdown
    this.clearAciveDropDownState();

    if (this.dropdownLevel != -1 && this.dropdownLevel <= this.dropdownCount) {
      var d_link = this.dropdown_menu.childNodes[this.dropdownLevel];
      d_link.classList.add("active");
      this.text_element.value = d_link.innerText;
    }
    else {
      this.text_element.value = this.typed;
      this.generateSuggestion(this.typed, this.resultObj);
    }
  },

  clearAciveDropDownState: function() {
    // clears all of the active classes in dropdown items if any
    this.dropdown_menu.childNodes.forEach(function(val) {
      val.classList.remove("active");
    });
  }
};
