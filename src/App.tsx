import Logo from './assets/Logo-nlw-expert.svg'
import { NewNoteCard } from './components/NewNoteCard'
import { NoteCard } from './components/NoteCard'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo} alt="NLW EXPERT nome como logo da aplicação" />
      <form className='w-full'>
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='
          w-full
          bg-transparent 
          text-3xl 
          font-semibold 
          tracking-tighter
          outline-none
          placeholder:text-slate-500'
        />
      </form>
      <hr className='border-1 border-slate-700'/>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard />

        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />

      </div>
        
    </div>
  )
}
