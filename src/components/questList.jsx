export default function QuestList(props) {
  return (
    <div className="grid gap-3 mt-10">
        {props.quests.map((quest) => {
          return (
            <div key={quest.id} className="h-[3rem] bg-white flex items-center rounded-[12px]">
              <p 
              className="pl-4 text-[#374151]"
              >
                {quest.title}
              </p>
            </div>
          )
        })}
    </div>
  )
}