export default function TasteNotes({ rating, notes, viewMode }) {
  return (
    <div>
      {/* Rating number */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-sans font-bold text-[20px] leading-none text-amber">
          {rating}
        </span>
        <span className="font-sans font-normal text-[11px] text-stone">/10</span>
      </div>

      {/* Tasting notes */}
      {notes && (
        <p
          className={`font-sans text-[14px] leading-[1.65] text-stone/80 ${
            viewMode === 'grid' ? 'line-clamp-2' : ''
          }`}
        >
          {notes}
        </p>
      )}
    </div>
  )
}
