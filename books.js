function changeListToGrid() {

  let gridListIcon = document.getElementById('gridListIcon');
  gridListIcon.innerText = "view_list";
  gridListIcon.setAttribute("onclick", "changeGridToList()");

  let cardContainerList = document.getElementById('grid');
  cardContainerList.classList.replace("card-container-list", "card-container-grid");

  let cardListHeader = document.getElementsByClassName("card-list-header");
  cardListHeader[0].remove();


  let card = document.getElementsByClassName("card-list");

  let bookTitle = document.getElementsByClassName('book-title-list');
  let quoteText = document.getElementsByClassName('quote-text-list');
  let authorFont = document.getElementsByClassName('author-font-list');
  let likes = document.getElementsByClassName('likes');


  for (let i = card.length; card.length > 0; i--) {
    card[i - 1].innerHTML =
      '  <section class="book-info"> ' +
      '  <figure class="book-img">' +
      '  <img class="image" src="https://www.adazing.com/wp-content/uploads/2012/07/girl-with-dragon-tatoo.jpg" alt="Book Covers">' +
      '</figure>' +
      '<blockquote class="quote">' +
      '<p class="book-title">' + bookTitle[i - 1].innerText + '</p>' +
      '  <p class="quote-text">' +
      quoteText[i - 1].innerText +
      ' </p>' +
      '<p class="author-font"> ' + authorFont[i - 1].innerText + '</p>' +
      '    </blockquote>' +
      '</section>' +
      '<section id="footer-info' + i + '" class="card-footer-info">' +
      '  <figure class="star-footer"> ' +
      '  <span class="material-icons"> ' +
      '  star ' +
      '</span>' +
      '  </figure> ' +
      '<p class="likes">' + likes[i - 1].innerText + '</p> ' +
      '<a class="iconPressGrid"><figure class="more-icon">' +
      '<span class="material-icons">' +
      'more_horiz' +
      '</span>' +
      '  </figure></a> ' +
      '  </section>';

    card[i - 1].classList.replace("card-list", "card");
  }


  let iconPress = document.getElementsByClassName("iconPressGrid");
  for (let i = 0; i < iconPress.length; i++) {
    iconPress[i].onmouseover = function() {
      dropdownBooks(this);
    };
  }

}


function changeGridToList() {

  let gridListIcon = document.getElementById('gridListIcon');
  gridListIcon.innerText = "view_comfy";
  gridListIcon.setAttribute("onclick", "changeListToGrid()");

  let cardContainerGrid = document.getElementById('grid');
  cardContainerGrid.classList.replace("card-container-grid", "card-container-list");

  let cardListHeader = document.createElement('section');
  cardListHeader.classList.add("card-list-header");
  cardListHeader.innerHTML =
    '  <article class="card-list-header-info">' +
    '<p class="card-list-header-title">Title</p>' +
    '<p class="card-list-header-quote">Quote</p>' +
    '<p class="card-list-header-author">Author</p>' +
    '</article>' +

    '  <article class="card-list-header-popularity"> ' +
    '  <p class="card-list-header-cover">Cover</p> ' +
    '  <p class="card-list-likes">Likes</p> ' +
    '</article>';

  let card = document.getElementsByClassName('card');

  let bookTitle = document.getElementsByClassName('book-title');
  let quoteText = document.getElementsByClassName('quote-text');
  let authorFont = document.getElementsByClassName('author-font');
  let likes = document.getElementsByClassName('likes');

  for (let i = card.length; card.length > 0; i--) {
    card[i - 1].innerHTML = '<blockquote class="book-info-list">' +
      '<p class="book-title-list">' + bookTitle[i - 1].innerText + '</p>' +
      '<p class="quote-text-list">' +
      quoteText[i - 1].innerText +
      '</p>' +
      '<p class="author-font-list">' + authorFont[i - 1].innerText + '</p> ' +
      '</blockquote>' +
      '<section class="book-popularity">' +
      '<figure class="book-img-list">' +
      '<img class="image-list" src="https://www.adazing.com/wp-content/uploads/2012/07/girl-with-dragon-tatoo.jpg" alt="Book Covers">' +
      '</figure>' +
      '<figure class="star-footer-list">' +
      '<span class="material-icons">' +
      ' star ' +
      '</span>' +
      '</figure>' +

      '<p class="likes">' + likes[i - 1].innerText + '</p>' +

      '<a class="iconPress">' +
      '  <figure class="more-icon">' +
      '<span class="material-icons">' +
      'more_horiz' +
      '</span>' +
      '  </figure>' +
      '  </a>' +

      '</section>';
    card[i - 1].classList.replace("card", "card-list");
  }

  let iconPress = document.getElementsByClassName("iconPress");
  for (let i = 0; i < iconPress.length; i++) {
    iconPress[i].setAttribute("id", "iconPressId" + i);
    iconPress[i].onmouseover = function() {
      dropdownBooksInListView(this);
    };
  }

  let cardList = document.getElementsByClassName("card-list");

  cardContainerGrid.insertBefore(cardListHeader, cardList[0]);

}


function dropdownBooks(elem) {
  let ddf = document.getElementById(elem.parentNode.id);
  let ddfHeight = ddf.offsetHeight;
  let cardHeight = document.getElementById(elem.offsetParent.id).clientHeight;

  let dropdownFooterInfo = document.createElement('section');
  dropdownFooterInfo.classList.add("dropdown-card");
  dropdownFooterInfo.setAttribute("id", "ddFooter");
  dropdownFooterInfo.onmouseleave = function() {
    removeDropdownBooks(this, ddf);
  };

  let ddArticle = document.createElement('article');
  ddArticle.classList.add("dropdown-card-header");

  let ddFigure = document.createElement('figure');
  let ddSpan = document.createElement('span');
  ddSpan.classList.add("material-icons", "dropdown-star-footer");
  ddSpan.innerText = "star";
  ddFigure.appendChild(ddSpan);


  let ddp = document.createElement('p');
  ddp.classList.add("dropdown-likes");
  ddp.innerText = elem.previousElementSibling.innerText;



  let ddMoreIcon = document.createElement('figure');
  ddMoreIcon.classList.add("dropdown-more-icon-container");
  let ddMoreIconSpan = document.createElement('span');
  ddMoreIconSpan.classList.add("material-icons", "dropdown-more-icon");
  ddMoreIconSpan.innerText = "more_horiz";
  ddMoreIcon.appendChild(ddMoreIconSpan);

  ddArticle.appendChild(ddFigure);
  ddArticle.appendChild(ddp);
  ddArticle.appendChild(ddMoreIcon);

  dropdownFooterInfo.appendChild(ddArticle);


  let ddNav = document.createElement('nav');
  let ddUl = document.createElement('ul');

  let ddLi1 = document.createElement('li');
  ddLi1.classList.add("dropdown-item");

  let ddA1 = document.createElement('a');
  ddA1.href = "#";
  ddA1.innerText = "Edit book details";
  ddLi1.appendChild(ddA1);

  let ddL2 = document.createElement('li');
  ddL2.classList.add("dropdown-item");
  let ddA2 = document.createElement('a');
  ddA2.href = "#";
  ddA2.innerText = "Duplicate book";
  ddL2.appendChild(ddA2);

  let ddL3 = document.createElement('li');
  ddL3.classList.add("dropdown-item");
  let ddA3 = document.createElement('a');
  ddA3.href = "#";
  ddA3.innerText = "Move book";
  ddL3.appendChild(ddA3);

  let ddL4 = document.createElement('li');
  ddL4.classList.add("dropdown-item");
  let ddA4 = document.createElement('a');
  ddA4.href = "#";
  ddA4.innerHTML = 'Delete book' + '<br>' + '<p class="note-text">Delete this book permanently</p>';
  ddL4.appendChild(ddA4);

  ddUl.appendChild(ddLi1);
  ddUl.appendChild(ddL2);
  ddUl.appendChild(ddL3);
  ddUl.appendChild(ddL4);

  ddNav.appendChild(ddUl);

  dropdownFooterInfo.appendChild(ddNav);

  ddf.parentNode.replaceChild(dropdownFooterInfo, ddf);
  let res = cardHeight - ddfHeight;
  dropdownFooterInfo.style.top = res.toString() + "px";
};

function removeDropdownBooks(elem, ddf) { //this, ddf
  let dd = document.getElementById(elem.id);
  dd.parentNode.replaceChild(ddf, dd); // (novi, stari)
}







function dropdownBooksInListView(elem) {
  let dropDownIcon = document.getElementById(elem.id);
  let dropDownCardExist = document.getElementsByClassName('dropdown-list-icon');
  if (dropDownCardExist.length === 0) {
    dropDownIcon.style.backgroundColor = "#3D4852";
    dropDownIcon.firstElementChild.firstElementChild.classList.add("dropdown-list-icon");

    dropDownIcon.onmouseleave = function() {
      removeDropdownBooksInListView(this, dropdownCard);
    };

    let dropdownCard = document.createElement('section');
    dropdownCard.classList.add("dropdown-card-list");

    let ddNav = document.createElement('nav');
    let ddUl = document.createElement('ul');

    let ddLi1 = document.createElement('li');
    ddLi1.classList.add("dropdown-item");

    let ddA1 = document.createElement('a');
    ddA1.href = "#";
    ddA1.innerText = "Edit book details";
    ddLi1.appendChild(ddA1);

    let ddL2 = document.createElement('li');
    ddL2.classList.add("dropdown-item");
    let ddA2 = document.createElement('a');
    ddA2.href = "#";
    ddA2.innerText = "Duplicate book";
    ddL2.appendChild(ddA2);

    let ddL3 = document.createElement('li');
    ddL3.classList.add("dropdown-item");
    let ddA3 = document.createElement('a');
    ddA3.href = "#";
    ddA3.innerText = "Move book";
    ddL3.appendChild(ddA3);

    let ddL4 = document.createElement('li');
    ddL4.classList.add("dropdown-item");
    let ddA4 = document.createElement('a');
    ddA4.href = "#";
    ddA4.innerHTML = 'Delete book' + '<br>' + '<p class="note-text">Delete this book permanently</p>';
    ddL4.appendChild(ddA4);

    ddUl.appendChild(ddLi1);
    ddUl.appendChild(ddL2);
    ddUl.appendChild(ddL3);
    ddUl.appendChild(ddL4);

    ddNav.appendChild(ddUl);

    dropdownCard.appendChild(ddNav);

    dropDownIcon.appendChild(dropdownCard);
  }
}


function removeDropdownBooksInListView(elem, newItem) {
  let dropdown = document.getElementById(elem.id)
  newItem.remove();
  dropdown.style.backgroundColor = "white";
  dropdown.firstElementChild.firstElementChild.classList.remove("dropdown-list-icon");

}
