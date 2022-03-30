export default function WaterMarkdown() {
    return (
        <>
        <footer className="w-3/4 sm:w-1/2 mx-auto pt-4 sm:pt-8">
            <div className="bg-gray-200 h-2 w-full rounded-xl"/>
            <div className="flex place-content-between flex-auto pt-4">
                <p>
                    © 2022 Javier Pizarro.
                </p>
                <p className="text-right">
                    Creada usando NextJs.
                </p>
            </div>
        </footer>
        </>
    )
}