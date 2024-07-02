const botn= document. getElementById('btn')

botn.addEventListener('click',()=>{
  const teXt= document. getElementById('text');
  setTimeout(() => {
    teXt.textContent ='ボタンをクリックしました。';
  }, 2000);
});
