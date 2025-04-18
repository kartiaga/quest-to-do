import { useState } from 'react'
import AddQuest from './components/addQuest.jsx'
import QuestList from './components/questList.jsx'

function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || []
  const [quests, setQuests] = useState(localQuests)
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
    <div className="flex h-screen justify-center items-center bg-[#F4F5FB]">
      <div className="w-[100%] sm:w-[40rem] h-[70%] rounded-sm">
        <h1 className="text-3xl font-work font-bold w-fit text-center mb-[2.75rem]">
          Quest To Do
        </h1>
        <AddQuest saveAddQuest={saveAddQuest}/>
        <QuestList quests={quests}/>
      </div>
    </div>
  )
}

export default App;
