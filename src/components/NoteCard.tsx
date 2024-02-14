export function NoteCard() {
  return (
    <button className='rounded-md text-start bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-sm font-medium text-slate-300'>
        Há 4 dias
      </span>
      <p className='text-slate-400 leading-6 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quidem eius hic laudantium impedit, ratione esse earum quae consequatur similique obcaecati sit labore consequuntur vero odio at est non dolorem.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quidem eius hic laudantium impedit, ratione esse earum quae consequatur similique obcaecati sit labore consequuntur vero odio at est non dolorem.
      </p>
      <div className='absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>

    </button>
  )
}