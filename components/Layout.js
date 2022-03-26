import Meta from "./Meta"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen flex bg-color-dark-1">
        <div className="flex-auto overflow-y-auto">
          <main className="py-6">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
