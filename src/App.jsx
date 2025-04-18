import AddQuest from './components/addQuest.jsx'

function App() {
  function saveAddQuest(quest) {
    console.log(quest)
  }

  return (
    <div className="flex h-screen justify-center items-center bg-[#F4F5FB]">
      <div className="w-[100%] sm:w-[40rem] h-[70%] rounded-sm">
        <h1 className="text-3xl font-work font-bold w-fit text-center mb-[2.75rem]">
          Quest To Do
        </h1>
        <AddQuest saveAddQuest={saveAddQuest}/>
      </div>
    </div>
  )
}

export default App;
