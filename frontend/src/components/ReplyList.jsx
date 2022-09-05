export default function ReplyList() {
  const [reply, setReply] = useState('');
  const deleteReply = (replyCode) => {
    fetch('/delete-reply.act', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        replyCode: replyCode,
        userCode: userCode
      })
    }).then((ref) => {});

    const newList = list1.filter((data) => {
      return data.replyCode !== replyCode;
    });
    setList2(newList);
  };
  //댓글 보냄

  const changeReply = (e) => {
    setReply(e.target.value);
  };
  return (
    <div>
      {list1.map((a, index) => (
        <div key={index}>
          <div className="form-control">
            <div>
              <span style={{ float: 'left', marginRight: '10px' }}>{a.user.userNickname}</span>
              <div style={{ float: 'right' }}>
                <Button onClick={() => deleteReply(a.reply.replyCode)}>삭제</Button>
              </div>
              <span style={{ float: 'right' }}>{a.reply.replyRegdate}</span>
            </div>
            <div>
              <span style={{ float: 'inline-start' }}>{a.reply.replyContent}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
