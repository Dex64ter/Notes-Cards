export function NewNoteCard() {
  return (
    <div className='rounded-md bg-slate-700 p-5 space-y-3'>
      <span className='text-sm font-medium text-slate-200'>
        Adicionar nota
      </span>
      <p className='text-slate-400 leading-6 text-sm'>
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}