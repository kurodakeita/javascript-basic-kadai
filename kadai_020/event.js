const botn= document. getElementById('btn')

botn,addEventListener('click',()=>{
  const teXt= document. getElementById('text');
  teXt.textContent = 'ボタンをクリックしました。';
  console.log(teXt);
});
