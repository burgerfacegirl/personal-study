import React, { useState } from "react";

type MyFormProps = {
  // form 이라는 객체를 파라미터로 가져오고 이 함수의 결과값은 void다
  // type Params = {name: string; description: string}해서 밑에 자리에 넣는 거랑 같음
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange}></input>
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
