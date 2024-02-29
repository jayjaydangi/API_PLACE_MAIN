import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                minHeight: '70vh',
            }} className="d-flex flex-column text-align-center justify-content-center align-content-center align-items-center ">
                <h1 className="w-[400px]">404 - Page Not Found   </h1>
                <Link href='/'>
                    <button className="cursor-pointer hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700  w-[200px] h-[50px] bg-body-secondary">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </>
    )

}