// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.selector = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.selector.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    // Create the Mark as Read Button and addEventHandler
    this.removeArticle = document.createElement('button');
    this.removeArticle.className = "remove";
    this.removeArticle.textContent = "Mark as Read";
    this.selector.appendChild(this.removeArticle);
    this.removeArticle.addEventListener('click',e =>{
      this.selector.parentNode.removeChild(this.selector)
    });
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    let toggle = this.selector.classList.toggle('article-open');
    let buttonStatus = this.expandButton;
    toggle ?  buttonStatus.textContent = 'Click to Close' 
           :  buttonStatus.textContent = 'Click to Expand';
  }

  removeArticle(){

  }
}
// START HERE: 
//Select all classes named ".article" and assign that value to the articles variable.  
// With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
let articles = document.querySelectorAll('.article');
articles.forEach(x => {new Article(x)})