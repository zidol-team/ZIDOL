function MyPage() {
  const profiletest = () => {
    fetch("/context.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  return (
    <div>
      <div>MyPage</div>
      <button onClick={profiletest}>test</button>
    </div>
  );
}

export default MyPage;
