import { useState } from "react";

function AddQuest(props) {
  const [title, setTitle] = useState("")

  return (
    <div className="flex justify-center items-center gap-4 w-full h-[2.75rem]">
      <input
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className="pl-4.5 flex w-[100%] h-[100%] rounded-[12px] bg-[#FFF] border-[2px] border-[#D1D5DB] hover:border-[#B9C2D0] focus:outline-[#CA3884]"
        onChange={(event) => setTitle(event.target.value)}
       />
      <button className="bg-[#CA3884] hover:bg-[#A52C6B] text-[#FFF] min-w-[10rem] h-[100%] px-6 rounded-[12px]"
      onClick={() => props.saveAddQuest(title)}>
        Adicionar item
      </button>
    </div>
  )
}

export default AddQuest;