import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from 'lucide-react'
import { Table } from './table/table'
import { IconButton } from './icon-button'
import { TableHeader } from './table/table-header'
import { TableLine } from './table/table-line'
import { ChangeEvent, useEffect, useState } from 'react'

interface Attendees {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    checkedInAt: string | null;
}

interface AttendeesList {
    attendees: Attendees[],
    total: number
}

export function AttendeeList() {
    const [searchText, setSearchText] = useState<string>(() => {
        const url = new URL(window.location.toString())

        if (url.searchParams.has('searchText')) {
            return url.searchParams.get('searchText') ?? ''
        }

        return '';
    })
    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString())

        if (url.searchParams.has('page')) {
            return Number(url.searchParams.get('page'))
        }

        return 1;
    })

    const [totalAttendees, setTotalAttendees] = useState(0)
    const [attendees, setAttendees] = useState<Attendees[]>([])

    useEffect(() => {
        const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

        url.searchParams.set('pageIndex', String(page - 1))

        if (searchText.length > 0) {
            url.searchParams.set('query', searchText)
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAttendees(data.attendees)
                setTotalAttendees(data.total)
            })
    }, [page, searchText])

    let pageNumbers = Math.ceil(totalAttendees / 10);

    function setCurrentSeachText(search: string) {
        const url = new URL(window.location.toString())

        url.searchParams.set('searchText', search.toString())

        window.history.pushState({}, '', url)
        setSearchText(search)
    }

    function setCurrentPage(page: number) {
        const url = new URL(window.location.toString())

        url.searchParams.set('page', page.toString())

        window.history.pushState({}, '', url)
        setPage(page)
    }

    function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        setCurrentSeachText(event.target.value)
        setCurrentPage(1)
    }

    function goToNextPage() {
        setCurrentPage(page + 1)
    }

    function goToPreviousPage() {
        setCurrentPage(page - 1)
    }

    function goToFirstpage() {
        setCurrentPage(1)
    }

    function goToLastpage() {
        setCurrentPage(pageNumbers)
    }

    return (
        <div className=' flex flex-col gap-4'>
            <div className="flex flex-row gap-3 items-center">
                <h1 className="text-2xl font-bold ">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search size={16} className='text-emerald-300' />
                    <input
                        onChange={onSearchInputChange}
                        value={searchText}
                        className="bg-transparent flex-1 outline-none h-auto border-0 text-sm p-0 focus:ring-0"
                        placeholder="Buscar participante...">

                    </input>
                </div>
            </div>

            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }}>
                            <input type='checkbox' className='size-4 bg-black/20 rounded bornder border-white/10' />
                        </TableHeader>
                        <TableHeader> Código </TableHeader>
                        <TableHeader> Participante </TableHeader>
                        <TableHeader> Data de inscrição </TableHeader>
                        <TableHeader> Data de check-in </TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>

                </thead>
                <tbody>
                    {attendees.map((attendees) => {
                        return (
                            <TableLine key={attendees.id} code={attendees.id} name={attendees.name} email={attendees.email} createdAt={attendees.createdAt} checkedAt={attendees.checkedInAt} />
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td className='py-3 px-3 text-sm  text-left' colSpan={3}> Mostrando {attendees.length} de {totalAttendees} </td>
                        <td className='py-3 px-3 text-sm  text-right' colSpan={3}>
                            <div className='inline-flex itens-center gap-8'>
                                <span>Mostrando {page} de {pageNumbers}</span>
                                <div className=' flex gap-1.5'>
                                    <IconButton disabled={page === 1} onClick={goToFirstpage}>
                                        <ChevronsLeft size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === 1} onClick={goToPreviousPage}>
                                        <ChevronLeft size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === pageNumbers} onClick={goToNextPage}>
                                        <ChevronRight size={16} />
                                    </IconButton>
                                    <IconButton disabled={page === pageNumbers} onClick={goToLastpage}>
                                        <ChevronsRight size={16} />
                                    </IconButton>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}