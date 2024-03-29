import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, content, created_date, emotion, id }) => {


  const { onRemove, onEdit } = useContext(DiaryDispatchContext)

  const [isEdit, setIsEdit] = useState(false);
  //true일땐 false로 false일땐 true 토글시켜줌
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();
  const handelRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id)
    }
  }
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return
    }
    if (window.confirm(`${id}번 쨰 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent)
      toggleIsEdit();
    }
  }
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author} | 감정 점수 : {emotion}</span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit
          ? <><textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} /></>
          : <>{content}</>}
      </div>

      {isEdit
        ? <><button onClick={handleQuitEdit}>수청 취소</button>
          <button onClick={handleEdit}>수청 완료</button></>
        : <><button onClick={handelRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button></>
      }
    </div>
  );
};

export default React.memo(DiaryItem);