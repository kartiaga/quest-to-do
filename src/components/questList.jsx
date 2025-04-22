import QuestItem from "./questItem"

export default function QuestList(props) {
  return (
    <div className="grid gap-3 mt-4 w-full">
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