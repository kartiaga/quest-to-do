import { useState } from 'react'
import AddQuest from './components/addQuest.jsx'
import QuestList from './components/questList.jsx'

function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || []
  const [quests, setQuests] = useState(localQuests)

  const notConcludedQuests = quests.filter((quest) => quest.status === "aberto")
  const concludedQuests = quests.filter((quest) => quest.status === "concluido")

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
    title = title.trim()
    if (title === "") {
      alert("Preencha o título da tarefa!")
      return
    }

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

  function saveDeleteQuest(quest) {
    let auxQuests = quests

    const filterAuxQuests = auxQuests.filter(
      (auxQuest) => auxQuest.id !== quest.id
    )

    localStorage.setItem("quests", JSON.stringify(filterAuxQuests))
    getQuests()
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")))
  }

  function clearDoneQuests() {
    let auxQuests = quests.filter((quest) => quest.status !== "concluido")

    localStorage.setItem("quests" , JSON.stringify(auxQuests))
    getQuests()
  }

  return (
    <div className="flex min-h-screen justify-center bg-[#F4F5FB]">
      <div className="h-[70%] w-[100%] mx-8 rounded-sm mt-30 sm:w-[40rem]">
        <h1 className="text-3xl font-work font-bold w-fit text-center mb-[2.75rem] text-[#374151]">
          Quadro de tarefas
        </h1>
        <AddQuest saveAddQuest={saveAddQuest}/>

        <div className='flex flex-col gap-4 w-ful mt-10'>
          <QuestList 
            quests={notConcludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
        </div>

        {concludedQuests.length > 0 && (

        <div className='flex flex-col gap-4 w-ful mt-10'>
          <h2 className='text-2xl font-bold font-work text-gray-500' >Tarefas concluídas</h2>
          <QuestList 
            quests={concludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
          <button
            className='bg-[#CA3884] hover:bg-[#A52C6B] text-[#FFF] w-[16rem] h-[2.75rem] px-6 rounded-[12px] focus:outline-[#A52C6B] my-5 max-sm:w-full'
            onClick={clearDoneQuests}
          >
            Limpar tarefas concluídas
          </button>
        </div>
        )}
      </div>
    </div>
  )
}

export default App;
