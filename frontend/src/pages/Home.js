function Home() {
  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        hello: "helloworld",
      }),
    };
    // console.log("requestOptions : ", requestOptions);

    fetch("/helloworld", requestOptions).then((res) => res.json());
  };

  return (
    <div>
      <div>CsStudy</div>
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
}

export default Home;
