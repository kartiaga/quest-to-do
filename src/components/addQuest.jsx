import { useState } from "react";

function AddQuest(props) {
  const [title, setTitle] = useState("")

  return (
    <div className="max-sm:block max-sm:h-[100%] flex justify-center items-center gap-4 w-full">
      <input
        type="text"
        value={title}
        placeholder="Nova tarefa"
        className="pl-4.5 flex w-[100%] h-11 rounded-[12px] bg-[#FFF] border-[2px] border-[#D1D5DB] hover:border-[#B9C2D0] focus:outline-[#CA3884]"
        onChange={(event) => setTitle(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            props.saveAddQuest(title)
            setTitle("")
          }
        }}
       />
      <button className="bg-[#CA3884] hover:bg-[#A52C6B] text-[#FFF] min-w-[11rem] h-11 px-6 rounded-[12px] focus:outline-[#A52C6B] max-sm:w-full max-sm:mt-4"
      onClick={() => {
        props.saveAddQuest(title)
        setTitle("")
      }}
      >
        Adicionar tarefa
      </button>
    </div>
  )
}

export default AddQuest;