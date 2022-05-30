const CsStudy = () => {
  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Access-control-allow-origin": "http://112.172.225.17:8282",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        string: "helloworld",
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/helloworld", requestOptions)
      // .then((res) => res.json())
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
