import { useState } from "react";

export default function QuestItem(props) {
  const [title, setTitle] = useState(props.quest.title)
  const [checked, setChecked] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const concluded = props.quest.status === "concluido"

  return (
    <div className="bg-[#FFF] pl-4.5 py-2 rounded-[12px] text-[#374151]">
      <div className="flex items-center gap-2">
        <input 
          disabled={concluded}
          type="checkbox"
          checked={checked}
          className="rounded-full border"
          onChange={() => {
            if (concluded) return
            setChecked(!checked)
            props.saveConcludedQuest(props.quest)
          }}
        />

        {editMode && !concluded ? (
          <input
            placeholder="quest"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="bg-gray-100 text-black pl-2 w-full rounded"
            autoFocus
          />
        ) : (
          <p className={`break-words ${concluded ? "line-through" : ""}`}>
            {props.quest.title}
          </p>
        )}
      </div>

      {!concluded && (
        <div className="flex gap-2 mt-2">
          <button 
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title)
              setEditMode(!editMode)
            }}
            className="text-sm text-blue-400 hover:text-blue-600"
          >
            {editMode ? "Salvar" : "Editar"}
          </button>

          <button
            onClick={() => {
              if (concluded) return
              else props.saveDeleteQuest(props.quest)
            }}
            className="text-sm text-red-400 hover:text-red-600"
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  )
}
