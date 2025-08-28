
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-center rounded-lg w-60 bg-card-bg m-4 hover:bg-card-bg-hover">
      {children}
    </div>
  )
}
