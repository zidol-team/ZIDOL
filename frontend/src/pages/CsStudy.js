const CsStudy = () => {
  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        hello: "helloworld",
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/hello.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
      });
  };

  return (
    <div>
      <div>CsStudy</div>
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
};

export default CsStudy;
