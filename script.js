// Secura24 Decryptor

function sortChars(list, char1, char2) {
    const sort_elements = [list[char1], list[char2]];
    [list[char2], list[char1]] = sort_elements;
    return list;
}

function decrypt() {
    const possible_chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"§$%&/()=?+*#-_.:,;<>@ ';
    let chars_to_use = possible_chars;
    let encrypted_chars = '';
    let key = document.getElementById('keyInput').innerText;
    let user_input = document.getElementById('userInput').innerText;
    //let user_input = get_user_input.replace("\\n", "\n");

    const sort_key = parseInt(key.slice(-1));
    let key_list = key.match(/\d+/g);
    key_list.pop();

    function sortChars(list, char1, char2) {
      const sort_elements = [list[char1], list[char2]];
      [list[char2], list[char1]] = sort_elements;
      return list;
    }

    let sort_number = 0;
    while (sort_number + sort_key < key_list.length) {
      sortChars(key_list, sort_number + sort_key, sort_number);
      sort_number += sort_key * 2;
    }

    for (let char of key_list) {
      encrypted_chars += chars_to_use[parseInt(char)];
      chars_to_use = chars_to_use.slice(0, parseInt(char)) + chars_to_use.slice(parseInt(char) + 1);
    }

    let decrypted_result = '';

    for (let char of user_input) {
      const char_index = encrypted_chars.indexOf(char);
      if (char_index !== -1) {
        decrypted_result += possible_chars[char_index];
      }
    }

    document.getElementById('resultOutput').innerText = decrypted_result;
}

function darkMode() {
  document.body.classList.toggle('darkmode');
  if (darkModeBool) {
    darkModeBool = false;
    document.getElementById("ModeToggle").innerText = "Dark Mode";
  }
  else {
    darkModeBool = true;
    document.getElementById("ModeToggle").innerText = "Light Mode";
  }
}
