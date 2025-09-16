// ボタン要素を取得
const toggleButton = document.getElementById('theme-toggle-button');

// ボタンがクリックされたときの処理
toggleButton.addEventListener('click', () => {
    // bodyタグに 'dark-mode' クラスを付けたり外したりする
    document.body.classList.toggle('dark-mode');
});