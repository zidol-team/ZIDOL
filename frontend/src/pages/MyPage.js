function MyPage() {
  const profiletest = () => {
    fetch("/userProfile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      // body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
      });
  };

  return (
    <div>
      <div>MyPage</div>
      <button onClick={profiletest}>test</button>
    </div>
  );
}

export default MyPage;
