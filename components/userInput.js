import { useState, useEffect } from "react";

const UserInput = props => {
  const [formFeilds, setFormFeilds] = useState({ value: "" });

  const onSubmitHandler = e => {
    e.preventDefault();
    if (formFeilds.value) props.onHandler(formFeilds);
  };

  const onChangeHandler = e => {
    const { value } = e.target;
    formFeilds.value = value;
    setFormFeilds({ ...formFeilds });
  };

  useEffect(() => {
    if (props.reset && formFeilds.value) {
      formFeilds.value = "";
      setFormFeilds({ ...formFeilds });
    }
  }, [!props.reset]);

  return (
    <div className="px-2">
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-center">
          <div className="max-w-3xl w-full bg-blue-500 p-2">
            <label htmlFor="input-link" />
            <input
              className="px-2 border-2 border-blue-200 w-full h-16 text-xl"
              placeholder="Paste or type link here..."
              value={formFeilds.value}
              onChange={onChangeHandler}
              required
              disabled={props.isLoading}
              id="input-link"
            />
          </div>
          <div className="bg-blue-500 p-2">
            <button className="px-5 py-2 bg-blue-500 h-16 hover:bg-blue-800">
              <span className="text-white block font-bold text-xl">Start</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserInput;
