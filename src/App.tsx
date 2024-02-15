import { ChangeEvent, useState } from 'react'
import Logo from './assets/Logo-nlw-expert.svg'
import { NewNoteCard } from './components/NewNoteCard'
import { NoteCard } from './components/NoteCard'

interface Note {
  id: string,
  createdAt: Date,
  content: string
}

export function App() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes')

    if (noteOnStorage) {
      return JSON.parse(noteOnStorage)
    }
    
    return []
  })

  function onCreateNewNote(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      content: content
    }

    setNotes((state) => [newNote, ...state])
    const notesArray = [newNote, ...notes]

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query)
  }

  function onDeleteNote(noteId: string) {
    const newArrayWithoutOne = notes.filter((note) => {
      return note.id !== noteId
    })

    setNotes(newArrayWithoutOne)

    localStorage.setItem('notes', JSON.stringify(newArrayWithoutOne))
  }

  const filteredNotes = search !== '' ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase())) : notes

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5 md:px-0'>
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
          onChange={handleSearch}
          value={search}
        />
      </form>
      <hr className='border-1 border-slate-700'/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard onCreateNote={onCreateNewNote}/>
        {
          filteredNotes.map((note) => {
            return (
              <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} />
            )
          })
        }
      </div>
        
    </div>
  )
}
