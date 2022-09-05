export default function header() {
  const userName = localStorage.getItem('userName');

  const style = {
    backgroundColor: '#b6daff',
    fontSize: 'xx-large',
    padding: '20px',
    color: 'white'
  };
  const name = {
    FontFace: 'Arial',
    backgroundColor: 'white',
    color: '#b6daff',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px'
  };
  return (
    <>
      <div style={name}>{userName}님 오늘 하루도 화이팅</div>
      <div style={style}>SEA-S</div>
    </>
  );
}
