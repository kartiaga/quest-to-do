import { useState } from 'react'
import AddQuest from './components/addQuest.jsx'
import QuestList from './components/questList.jsx'

function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || []
  const [quests, setQuests] = useState(localQuests)

  const concludedQuests = quests.filter((quest) => quest.status === "concluido")
  const notConcludedQuests = quests.filter((quest) => quest.status === "aberto")

  function saveEditQuest(quest, title) {
    let auxQuests = quests
    const editedQuest = {
      id: quest.id,
      title: title || quest.title,
      status: quest.status,
      created_at: quest.created_at,
    }

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id
    )

    auxQuests.splice(findQuestPosition, 1, editedQuest)

    localStorage.setItem("quests", JSON.stringify(auxQuests))

    getQuests()
  }

  function saveConcludedQuest(quest) {
    let auxQuests = quests
    const editedQuest = {
      id: quest.id,
      title: quest.title,
      status: "concluido",
      created_at: quest.created_at
    }

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id
    )

    auxQuests.splice(findQuestPosition, 1, editedQuest)

    localStorage.setItem("quests", JSON.stringify(auxQuests))

    getQuests()
  }

  function saveAddQuest(title) {
    let auxQuests = quests
    let id = 0
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length - 1].id
    }
    id++

    const createdQuest = {
      id:id,
      title: title,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString()
    }
    auxQuests.push(createdQuest)
    localStorage.setItem("quests", JSON.stringify(auxQuests))
    getQuests()
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")))
  }

  return (
    <div className="flex min-h-screen justify-center bg-[#F4F5FB]">
      <div className="w-[100%] sm:w-[40rem] h-[70%] rounded-sm mt-30">
        <h1 className="text-3xl font-work font-bold w-fit text-center mb-[2.75rem] text-[#374151]">
          Lista de tarefas
        </h1>
        <AddQuest saveAddQuest={saveAddQuest}/>

        <div className='flex flex-col gap-4 w-ful items-center mt-10'>
          <h2 className='text-2xl font-bold font-work text-[#374151]'>Abertas</h2>
          <QuestList 
            quests={notConcludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
          />
        </div>

        <div className='flex flex-col gap-4 w-ful items-center mt-10'>
          <h2 className='text-2xl font-bold font-work text-[#374151]'>Concluídas</h2>
          <QuestList 
            quests={concludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
