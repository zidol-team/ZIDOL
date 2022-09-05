export default function Reply() {
  const submitReply = () => {
    const userCode = localStorage.getItem('userCode');

    fetch('/insert-reply.act', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        replyContent: reply,
        userCode: userCode,
        boardCode: board.boardCode
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setReply('');
        setList2(list1);
        alert('댓글등록완료');
      });
  };
  return (
    <div>
      <div className="areacontainer">
        <textarea
          value={reply}
          onChange={changeReply}
          className="replycontent"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
      </div>
      <div className="buttonss">
        <Button variant="outlined" onClick={submitReply}>
          댓글등록
        </Button>
      </div>
    </div>
  );
}
