import { useState } from "react";
import {useDispatch} from "react-redux";
import { tambahTodo } from "../store/todoSlice";

import styled from "@emotion/styled";
import CalendarIcon from "../assets/Calender.icon";
import NotePencilIcon from "../assets/NotePencil.icon";
import NotebookIcon from "../assets/Notebook.icon";

function TodoInput(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    desc: "",
    date: "",
    completed: false,
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (data.title !== "" && data.desc !== "" && data.date !== "") {
      dispatch(tambahTodo(data));
    } else {
      alert("name or notes or date is empty");
    }
  };

  return (
    <WrapperInput className="justify-start font-bold">
      <ItemInput>
        <InputIcon>
          <h4 style={{ padding: 0, margin: "10px 10px 10px 0" }}>New Task</h4>
          <NotebookIcon />
        </InputIcon>
        <input
          style={{ borderRadius: "50px", padding: "10px", width: "90%", border: "1px solid black" }}
          type="text"
          name="title"
          placeholder="Add task..."
          value={data.title}
          onChange={handleChange}
        />
      </ItemInput>

      <ItemInput>
        <InputIcon>
          <h4 style={{ padding: 0, margin: "10px 10px 10px 0" }}>Notes</h4>
          <NotePencilIcon />
        </InputIcon>
        <input
          style={{ borderRadius: "50px", padding: "10px", width: "90%", border: "1px solid black" }}
          type="text"
          name="desc"
          placeholder="Discuss..."
          value={data.desc}
          onChange={handleChange}
        />
      </ItemInput>

      <ItemInput>
        <InputIcon>
          <h4 style={{ padding: 0, margin: "10px 10px 10px 0" }}>Date</h4>
          <CalendarIcon />
        </InputIcon>

        <ButtonDate>
          <input
            style={{
              borderRadius: "50px",
              padding: "10px",
              width: "30%",
              textAlign: "center",
              border: "1px solid black"
            }}
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>ADD TASK</Button>
        </ButtonDate>
      </ItemInput>
    </WrapperInput>
  );
}


const WrapperInput = styled.div`
border: 1px solid black;
border-radius: 25px;
padding: 20px 25px;
align-items: center;
margin: 30px 10%;
box-shadow: 3px 3px #282c40;
width: 80%;
margin-left: 150px;

@media (max-width: 428px) {
  padding: 10px 5px;
  margin-left: 40px;
}

`;
const InputIcon = styled.div`
display: flex;
align-items: center;
`;
const ItemInput = styled.div`
text-align: start;
margin-left: 10px;
margin-bottom: 10px;
`;
const Button = styled.div`
background-color: #4b5274;
color: #ffffff;
text-align: center;
padding: 10px 0;
width: 25%;
border-radius: 25px;
cursor: pointer;

@media (max-width: 900px) {
  padding: 10px 0;
  width: 40%;
}
@media (max-width: 428px) {
  padding: 10px 0;
  width: 50%;
}
`;
const ButtonDate = styled.div`
display: flex;
justify-content: space-between;
margin-right: 5%;
`;

export default TodoInput;
