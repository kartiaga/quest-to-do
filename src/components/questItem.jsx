import { useState } from "react";

export default function QuestItem(props) {
  const [title, setTitle] = useState(props.quest.title)
  const [checked, setChecked] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const concluded = props.quest.status === "concluido"

  return (
    <div className="bg-[#FFF] pl-3 py-2 rounded-[12px] text-[#374151] flex justify-between items-center">
      <div className="flex items-center gap-3 h-9">
        <input 
          disabled={concluded}
          type="checkbox"
          checked={checked}
          className="accent-[#CA3884] w-4"
          onChange={() => {
            if (concluded) return
            setChecked(!checked)
            props.saveConcludedQuest(props.quest)
          }}
        />

        {editMode && !concluded ? (
          <input
            placeholder="Tarefa"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="bg-gray-100 text-black pl-2 mr-2 w-full rounded-[4px] focus:outline-gray-300"
            autoFocus
          />
        ) : (
          <p className={`break-words ${concluded ? "line-through pr-3" : ""}`}>
            {props.quest.title}
          </p>
        )}
      </div>

      {!concluded && (
        <div className="flex gap-2 mr-5">
          <button 
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title)
              setEditMode(!editMode)
            }}
            className="text-sm text-blue-400 hover:text-blue-600"
          >
            {editMode ? "Save" : "Edit"}
          </button>

          <button
            onClick={() => {
              if (concluded) return
              else props.saveDeleteQuest(props.quest)
            }}
            className="text-sm text-red-400 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
