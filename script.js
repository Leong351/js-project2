const quotes = {
    "- Ronald Reagan" : '"A people free to choose will always choose peace. Ronald Reagan"',
    "Maya angelua" : '"The truth is, no one of us can be free until everybody is free. Maya Angelou"',
    "Dennis A" : '"Man will never be free until the last king is strangled with the entrails of the last priest."',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."'

};


document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });

function generate(){


    // grab all the keys in the dictionary (authors) and store in an array
    const authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    const author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    const quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  }

  window.onload = function(){
    generate()
  }