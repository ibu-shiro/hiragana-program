const characters = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    // "ま", "み", "む", "め", "も",
    // "や", "ゆ", "よ",
    // "ら", "り", "る", "れ", "ろ",
    // "わ", "を", "ん"
  ];
  
  // ひらがなに対応した画像のパス（例として画像ファイル名は "a.png", "i.png" など）
  const charToImage = {
    "あ": "images/あ.jpg",
    "い": "images/い.jpg",
    // ... 他のひらがなも同様に設定
    "う": "images/う.jpg", 
    "え": "images/え.jpg", 
    "お": "images/お.jpg", 
    "か": "images/か.jpg", 
    "き": "images/き.jpg", 
    "く": "images/く.jpg", 
    "け": "images/け.jpg", 
    "こ": "images/こ.jpg", 
    "さ": "images/さ.jpg", 
    "し": "images/し.jpg", 
    "す": "images/す.jpg", 
    "せ": "images/せ.jpg", 
    "そ": "images/そ.jpg", 
    "た": "images/た.jpg", 
    "ち": "images/ち.jpg", 
    "つ": "images/つ.jpg", 
    "て": "images/て.jpg", 
    "と": "images/と.jpg", 
    "な": "images/な.jpg", 
    "に": "images/に.jpg", 
    "ぬ": "images/ぬ.jpg", 
    "ね": "images/ね.jpg", 
    "の": "images/の.jpg", 
    "は": "images/は.jpg", 
    "ひ": "images/ひ.jpg", 
    "ふ": "images/ふ.jpg", 
    "へ": "images/へ.jpg", 
    "ほ": "images/ほ.jpg", 
  };
  
  const charDiv = document.getElementById("character");
  const image = document.getElementById("image");
  
  function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  function showRandomCharacter() {
    image.style.display = "none";
    const char = getRandomCharacter();
    charDiv.textContent = char;
  }
  
  charDiv.addEventListener("click", () => {
    const currentChar = charDiv.textContent;
    const imgSrc = charToImage[currentChar];
  
    if (imgSrc) {
      image.src = imgSrc;
      image.style.display = "block";
      charDiv.style.display = "none";
    }
  });
  
  // 画像をクリックしたらまたランダムな文字へ戻る
  image.addEventListener("click", () => {
    charDiv.style.display = "block";
    showRandomCharacter();
  });
  
  window.onload = showRandomCharacter;
  