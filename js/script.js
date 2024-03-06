function quote() {
  var quote = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“So many books, so little time.” ― Frank Zappa',
    '“You only live once, but if you do it right, once is enough.” ― Mae West',
    '“Be the change that you wish to see in the world.” ― Mahatma Gandhi',
    '“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard',
    '“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde',
    '“Good friends, good books, and a sleepy conscience: this is the ideal life.” ― Mark Twain',
    '“Life is what happens to us while we are making other plans.” ― Allen Saunders',
    '“The man who does not read has no advantage over the man who cannot read.” ― Mark Twain',
    '“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.” ― Dr. Seuss',
    '“A day without sunshine is like, you know, night.” ― Steve Martin'
  ];
  var paratext = document.getElementById('quote-of-the-day');
  var randomNumber = Math.floor(Math.random() * 10);
  paratext.innerHTML = quote[randomNumber];
}