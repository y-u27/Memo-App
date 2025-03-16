import { Box, Button, Card, CardBody, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Main = () => {
  //タイトル
  const [title, setTitle] = useState("");
  //メモの詳細
  const [memoDetail, setMemoDetail] = useState("");
  //追加するメモ
  const [addMemoList, setAddMemoList] = useState([]);

  const [id, setId] = useState(0);

  //タイトル入力ハンドラー
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //メモ詳細入力ハンドラー
  const handleDetailChange = (e) => {
    setMemoDetail(e.target.value);
  };

  //メモ追加関数
  const addMemoClick = () => {
    if (title.trim() === "" || memoDetail.trim() === "") return;
    const newMemo = {
      id: id,
      title: title,
      detail: memoDetail,
    };

    //既存のリストに新しいメモ追加
    setAddMemoList((prevList) => [...prevList, newMemo]);
    setId((prevId) => prevId + 1);

    //入力値クリア
    setTitle("");
    setMemoDetail("");
  };

  return (
    <Box>
      <Card w={80} m={200} mx={500}>
        <CardBody>
          <Text mb={5}>Memo App</Text>
          <Box display="flex" flexDirection="column" gap={2}>
            <Input
              placeholder="タイトル入力"
              value={title}
              onChange={handleTitleChange}
            />
            <Input
              placeholder="メモの詳細入力"
              value={memoDetail}
              onChange={handleDetailChange}
            />
            <Button onClick={addMemoClick}>＋</Button>
            <Box>
              {addMemoList.map((memo) => (
                <Card key={memo.id} mt={2}>
                  <CardBody>
                    <Text fontWeight="bold">{memo.title}</Text>
                    <Text>{memo.detail}</Text>
                  </CardBody>
                </Card>
              ))}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Main;
