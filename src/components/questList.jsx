import QuestItem from "./questItem"

export default function QuestList(props) {
  const concluded = props.quests.some((quest) => quest.status === "concluido")

  if (props.quests.length === 0) {
    return (
      <p className="text-center text-gray-400 font-bold text-[2rem] bg-white py-20 w-full rounded-[12px] ">
        Nenhuma atividade pendente!
      </p>
    )
  }

  return (
    <div className={`${concluded ? "flex flex-wrap" : " grid grid-cols"} gap-3 w-full`}>
      {props.quests.map((quest) => (
        <QuestItem 
          key={quest.id}
          quest={quest}
          saveEditQuest={props.saveEditQuest}
          saveConcludedQuest={props.saveConcludedQuest}
          saveDeleteQuest={props.saveDeleteQuest}
        />
      ))}
    </div>
  )
}